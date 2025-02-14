// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDidVerifiablePresentation } from "../src/models/IDidVerifiablePresentation";

describe("IDidVerifiablePresentation", () => {
	test("Example 18", () => {
		const vp: IDidVerifiablePresentation = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			type: ["VerifiablePresentation", "ExamplePresentation"],
			verifiableCredential: [
				{
					"@context": "https://www.w3.org/ns/credentials/v2",
					id: "data:application/vc+sd-jwt,QzVjV...RMjU",
					type: "EnvelopedVerifiableCredential"
				}
			]
		};
		expect(vp).toBeDefined();
	});

	test("Example 19", () => {
		const vp: IDidVerifiablePresentation = {
			"@context": "https://www.w3.org/ns/credentials/v2",
			id: "data:application/vp+jwt,eyJraWQiO...zhwGfQ",
			type: "EnvelopedVerifiablePresentation"
		};
		expect(vp).toBeDefined();
	});

	test("Example 20", () => {
		const vp: IDidVerifiablePresentation = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			type: ["VerifiablePresentation", "ExamplePresentation"],
			holder: "did:example:12345678",
			verifiableCredential: [
				{
					"@context": [
						"https://www.w3.org/ns/credentials/v2",
						"https://www.w3.org/ns/credentials/examples/v2"
					],
					type: ["VerifiableCredential", "ExampleFoodPreferenceCredential"],
					issuer: "did:example:12345678",
					credentialSubject: {
						favoriteCheese: "Gouda"
					}
				}
			],
			proof: []
		};
		expect(vp).toBeDefined();
	});

	test("Example 21", () => {
		const vp: IDidVerifiablePresentation = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			type: ["VerifiablePresentation", "ExamplePresentation"],
			id: "urn:uuid:313801ba-24b7-11ee-be02-ff560265cf9b",
			holder: "did:example:12345678",
			verifiableCredential: [
				{
					"@context": [
						"https://www.w3.org/ns/credentials/v2",
						"https://www.w3.org/ns/credentials/examples/v2"
					],
					type: ["VerifiableCredential", "ExampleAssertCredential"],
					issuer: "did:example:12345678",
					credentialSubject: {
						id: "urn:uuid:313801ba-24b7-11ee-be02-ff560265cf9b",
						assertion: "This VP is submitted by the subject as evidence of a legal right to drive"
					},
					proof: {
						type: "DataIntegrityProof",
						cryptosuite: "eddsa-rdfc-2022",
						created: "2021-11-13T18:19:39Z",
						verificationMethod: "https://university.example/issuers/14#key-1",
						proofPurpose: "assertionMethod",
						proofValue: "z58DAdFfa9SkqZMVPxAQp...jQCrfFPP2oumHKtz"
					}
				}
			],
			proof: {
				type: "DataIntegrityProof",
				cryptosuite: "eddsa-rdfc-2022",
				created: "2021-11-13T18:19:39Z",
				verificationMethod: "https://university.example/issuers/14#key-1",
				proofPurpose: "assertionMethod",
				proofValue: "z58DAdFfa9SkqZMVPxAQp...jQCrfFPP2oumHKtz"
			}
		};
		expect(vp).toBeDefined();
	});
});
