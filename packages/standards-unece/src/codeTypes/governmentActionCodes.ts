// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * A character string used to replace or represent a government action.
 * https://vocabulary.uncefact.org/GovernmentActionCodeList
 * https://github.com/uncefact/vocabulary-outputs/blob/main/_data/governmentactioncodelist.json
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const GovernmentActionCodes = {
	/**
	 * 1 Clearance.
	 */
	1: "unece:GovernmentActionCodeList#1",

	/**
	 * 10 Export certificate not required.
	 */
	10: "unece:GovernmentActionCodeList#10",

	/**
	 * 2 Detention.
	 */
	2: "unece:GovernmentActionCodeList#2",

	/**
	 * 3 Fumigation.
	 */
	3: "unece:GovernmentActionCodeList#3",

	/**
	 * 4 Inspection.
	 */
	4: "unece:GovernmentActionCodeList#4",

	/**
	 * 5 Security.
	 */
	5: "unece:GovernmentActionCodeList#5",

	/**
	 * 6 Means of transport admittance.
	 */
	6: "unece:GovernmentActionCodeList#6",

	/**
	 * 7 Cargo hold inspection.
	 */
	7: "unece:GovernmentActionCodeList#7",

	/**
	 * 8 Container inspection.
	 */
	8: "unece:GovernmentActionCodeList#8",

	/**
	 * 9 Cargo packaging inspection.
	 */
	9: "unece:GovernmentActionCodeList#9"
};

/**
 * A character string used to replace or represent a government action.
 * https://vocabulary.uncefact.org/GovernmentActionCodeList
 * https://github.com/uncefact/vocabulary-outputs/blob/main/_data/governmentactioncodelist.json
 */
export type GovernmentActionCodes = (typeof GovernmentActionCodes)[keyof typeof GovernmentActionCodes];
