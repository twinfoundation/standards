// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import fs from 'node:fs/promises';

// Reads the content of the json folder and generates types based on the content.
// Source of data is here https://github.com/uncefact/vocabulary-outputs/blob/main/_data/
// To add a new code type, add the json file to the json folder and run this script.
// Then add the generated files to the exports in the index.ts file from both the codes and codeTypes folder.

const SOURCE_DIR = './src-json';
const CODES_OUTPUT_DIR = './src/codes';
const CODE_TYPES_OUTPUT_DIR = './src/codeTypes';

const files = await fs.readdir(SOURCE_DIR);

for (const file of files) {
	const json = JSON.parse(await fs.readFile(`${SOURCE_DIR}/${file}`, 'utf8'));

	let name = json.label;
	if (name.endsWith('List')) {
		name = name.slice(0, -4);
	}
	if (name.endsWith('Code')) {
		name = name.slice(0, -4);
	}

	await generateCodes(file, name, json);
	await generateCodeTypes(file, name, json);
}

/**
 * Generate the codes.
 * @param filename The filename.
 * @param name The name of the code type.
 * @param json The json data.
 */
async function generateCodes(filename, name, json) {
	const words = wordsSplit(name);
	words.push('codes');
	const constName = words.map(w => w.toUpperCase()).join('_');

	const codesContent = [
		'// Copyright 2024 IOTA Stiftung.',
		'// SPDX-License-Identifier: Apache-2.0.',
		'/* cSpell:disable */',
		'import type { IUneceCode } from "../models/IUneceCode";',
		'',
		'/**',
		` * ${json.comment}`,
		` * https://vocabulary.uncefact.org/${json.label}`,
		` * https://github.com/uncefact/vocabulary-outputs/blob/main/_data/${filename}`,
		' */',
		`export const ${constName}: IUneceCode[] = [`
	];

	const values = [];
	for (const code of json.values) {
		values.push(`  {`);
		values.push(`    uri: "${code.uri}",`);
		values.push(`    comment: "${code.comment}",`);
		values.push(`    value: "${code.value}"`);
		values.push(`  },`);
	}

	codesContent.push(values.join('\n').slice(0, -1), '];', '');

	await fs.writeFile(`${CODES_OUTPUT_DIR}/${camelCase(name)}Codes.ts`, codesContent.join('\n'));
}

/**
 * Generate the code types.
 * @param filename The filename.
 * @param name The name of the code type.
 * @param json The json data.
 */
async function generateCodeTypes(filename, name, json) {
	const codesContent = [
		'// Copyright 2024 IOTA Stiftung.',
		'// SPDX-License-Identifier: Apache-2.0.',
		'/* cSpell:disable */',
		'',
		'/**',
		` * ${json.comment}`,
		` * https://vocabulary.uncefact.org/${json.label}`,
		` * https://github.com/uncefact/vocabulary-outputs/blob/main/_data/${filename}`,
		' */',
		'// eslint-disable-next-line @typescript-eslint/naming-convention',
		`export const ${name}Codes = {`
	];

	const values = [];
	for (const code of json.values) {
		values.push(`	/**`);
		values.push(`	 * ${code.value} ${code.comment}.`);
		values.push(`	 */`);
		values.push(`	${code.value}: "${code.uri}",`);
		values.push(``);
	}

	codesContent.push(values.join('\n').slice(0, -2), '};', '');

	codesContent.push(
		'/**',
		` * ${json.comment}`,
		` * https://vocabulary.uncefact.org/${json.label}`,
		` * https://github.com/uncefact/vocabulary-outputs/blob/main/_data/${filename}`,
		' */',
		`export type ${name}Codes = (typeof ${name}Codes)[keyof typeof ${name}Codes];`,
		''
	);

	await fs.writeFile(
		`${CODE_TYPES_OUTPUT_DIR}/${camelCase(name)}Codes.ts`,
		codesContent.join('\n')
	);
}

/**
 * Camel case all the words.
 * @param input The input to convert.
 * @returns The camel case version of the input.
 */
function camelCase(input) {
	const output = input;
	const words = wordsSplit(output);
	return words.length === 0
		? ''
		: `${words[0].toLowerCase()}${words
				.slice(1)
				.map(w => `${w[0].toUpperCase()}${w.slice(1).toLowerCase()}`)
				.join('')}`;
}

/**
 * Split a string into words.
 * @param input The input to split.
 * @returns The string split into words.
 */
function wordsSplit(input) {
	return (
		input
			.replace(/([A-Z])/g, ' $1')
			.trim()
			.match(/[^\u0000-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007F]+/g) ?? []
	);
}
