// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDidVerifiableCredential } from "../../src/models/IDidVerifiableCredential";

describe("IDidVerifiableCredential", () => {
	test("Example 1", () => {
		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			type: ["VerifiableCredential", "MyPrototypeCredential"],
			credentialSubject: {
				mySubjectProperty: "mySubjectValue"
			}
		};
		expect(vc).toBeDefined();
	});

	test("Example 2", () => {
		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			id: "http://university.example/credentials/58473",
			type: ["VerifiableCredential", "ExampleAlumniCredential"],
			issuer: "did:example:2g55q912ec3476eba2l9812ecbfe",
			validFrom: "2010-01-01T00:00:00Z",
			credentialSubject: {
				id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
				alumniOf: {
					id: "did:example:c276e12ec21ebfeb1f712ebc6f1",
					name: "Example University"
				}
			}
		};
		expect(vc).toBeDefined();
	});

	test("Example 3", () => {
		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			id: "http://university.example/credentials/3732",
			type: ["VerifiableCredential", "ExampleDegreeCredential"],
			issuer: "https://university.example/issuers/565049",
			validFrom: "2010-01-01T00:00:00Z",
			credentialSubject: {
				id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
				degree: {
					type: "ExampleBachelorDegree",
					name: "Bachelor of Science and Arts"
				}
			}
		};
		expect(vc).toBeDefined();
	});

	test("Example 4", () => {
		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			id: "http://university.example/credentials/3732",
			type: ["VerifiableCredential", "ExampleDegreeCredential"],
			issuer: "https://university.example/issuers/565049",
			validFrom: "2010-01-01T00:00:00Z",
			credentialSubject: {
				id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
				degree: {
					type: "ExampleBachelorDegree",
					name: "Bachelor of Science and Arts"
				}
			}
		};
		expect(vc).toBeDefined();
	});

	test("Example 5", () => {
		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			id: "http://university.example/credentials/3732",
			type: ["VerifiableCredential", "ExampleDegreeCredential"],
			issuer: {
				id: "https://university.example/issuers/565049",
				name: "Example University",
				description: "A public university focusing on teaching examples."
			},
			validFrom: "2015-05-10T12:30:00Z",
			name: "Example University Degree",
			description: "2015 Bachelor of Science and Arts Degree",
			credentialSubject: {
				id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
				degree: {
					type: "ExampleBachelorDegree",
					name: "Bachelor of Science and Arts"
				}
			}
		};
		expect(vc).toBeDefined();
	});

	test("Example 6", () => {
		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			id: "http://university.example/credentials/3732",
			type: ["VerifiableCredential", "ExampleDegreeCredential"],
			issuer: {
				id: "https://university.example/issuers/565049",
				name: [
					{
						"@value": "Example University",
						"@language": "en"
					},
					{
						"@value": "Université Exemple",
						"@language": "fr"
					},
					{
						"@value": "جامعة المثال",
						"@language": "ar",
						"@direction": "rtl"
					}
				],
				description: [
					{
						"@value": "A public university focusing on teaching examples.",
						"@language": "en"
					},
					{
						"@value": "Une université publique axée sur l'enseignement d'exemples.",
						"@language": "fr"
					},
					{
						"@value": ".جامعة عامة تركز على أمثلة التدريس",
						"@language": "ar",
						"@direction": "rtl"
					}
				]
			},
			validFrom: "2015-05-10T12:30:00Z",
			name: [
				{
					"@value": "Example University Degree",
					"@language": "en"
				},
				{
					"@value": "Exemple de Diplôme Universitaire",
					"@language": "fr"
				},
				{
					"@value": "مثال الشهادة الجامعية",
					"@language": "ar",
					"@direction": "rtl"
				}
			],
			description: [
				{
					"@value": "2015 Bachelor of Science and Arts Degree",
					"@language": "en"
				},
				{
					"@value": "2015 Licence de Sciences et d'Arts",
					"@language": "fr"
				},
				{
					"@value": "2015 بكالوريوس العلوم والآداب",
					"@language": "ar",
					"@direction": "rtl"
				}
			],
			credentialSubject: {
				id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
				degree: {
					type: "ExampleBachelorDegree",
					name: [
						{
							"@value": "Bachelor of Science and Arts Degree",
							"@language": "en"
						},
						{
							"@value": "Licence de Sciences et d'Arts",
							"@language": "fr"
						},
						{
							"@value": "بكالوريوس العلوم والآداب",
							"@language": "ar",
							"@direction": "rtl"
						}
					]
				}
			}
		};
		expect(vc).toBeDefined();
	});

	test("Example 7", () => {
		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			id: "http://university.example/credentials/3732",
			type: ["VerifiableCredential", "ExampleDegreeCredential"],
			issuer: "https://university.example/issuers/14",
			validFrom: "2010-01-01T19:23:24Z",
			credentialSubject: {
				id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
				degree: {
					type: "ExampleBachelorDegree",
					name: "Bachelor of Science and Arts"
				}
			}
		};
		expect(vc).toBeDefined();
	});

	test("Example 8", () => {
		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			id: "http://university.example/credentials/3732",
			type: ["VerifiableCredential", "ExampleDegreeCredential"],
			issuer: {
				id: "did:example:76e12ec712ebc6f1c221ebfeb1f",
				name: "Example University"
			},
			validFrom: "2010-01-01T19:23:24Z",
			credentialSubject: {
				id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
				degree: {
					type: "ExampleBachelorDegree",
					name: "Bachelor of Science and Arts"
				}
			}
		};
		expect(vc).toBeDefined();
	});

	test("Example 9", () => {
		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			id: "http://university.example/credentials/3732",
			type: ["VerifiableCredential", "ExampleDegreeCredential"],
			issuer: "https://university.example/issuers/565049",
			validFrom: "2010-01-01T00:00:00Z",
			credentialSubject: {
				id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
				degree: {
					type: "ExampleBachelorDegree",
					name: "Bachelor of Science and Arts"
				}
			}
		};
		expect(vc).toBeDefined();
	});

	test("Example 10", () => {
		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			id: "http://university.example/credentials/3732",
			type: ["VerifiableCredential", "RelationshipCredential"],
			issuer: "https://issuer.example/issuer/123",
			validFrom: "2010-01-01T00:00:00Z",
			credentialSubject: [
				{
					id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
					name: "Jayden Doe",
					spouse: "did:example:c276e12ec21ebfeb1f712ebc6f1"
				},
				{
					id: "https://subject.example/subject/8675",
					name: "Morgan Doe",
					spouse: "https://subject.example/subject/7421"
				}
			]
		};
		expect(vc).toBeDefined();
	});

	test("Example 11", () => {
		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			id: "http://university.example/credentials/3732",
			type: ["VerifiableCredential", "ExampleDegreeCredential"],
			issuer: "https://university.example/issuers/14",
			validFrom: "2010-01-01T19:23:24Z",
			validUntil: "2020-01-01T19:23:24Z",
			credentialSubject: {
				id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
				degree: {
					type: "ExampleBachelorDegree",
					name: "Bachelor of Science and Arts"
				}
			}
		};
		expect(vc).toBeDefined();
	});

	test("Example 12", () => {
		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			id: "http://university.example/credentials/3732",
			type: ["VerifiableCredential", "ExampleDegreeCredential"],
			issuer: "https://university.example/issuers/14",
			validFrom: "2010-01-01T19:23:24Z",
			credentialSubject: {
				id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
				degree: {
					type: "ExampleBachelorDegree",
					name: "Bachelor of Science and Arts"
				}
			},
			credentialStatus: {
				id: "https://university.example/credentials/status/3#94567",
				type: "BitstringStatusListEntry",
				statusPurpose: "revocation",
				statusListIndex: "94567",
				statusListCredential: "https://university.example/credentials/status/3"
			}
		};
		expect(vc).toBeDefined();
	});

	test("Example 13", () => {
		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			id: "http://license.example/credentials/9837",
			type: ["VerifiableCredential", "ExampleDrivingLicenseCredential"],
			issuer: "https://license.example/issuers/48",
			validFrom: "2020-03-14T12:10:42Z",
			credentialSubject: {
				id: "did:example:f1c276e12ec21ebfeb1f712ebc6",
				license: {
					type: "ExampleDrivingLicense",
					name: "License to Drive a Car"
				}
			},
			credentialStatus: [
				{
					id: "https://license.example/credentials/status/84#14278",
					type: "BitstringStatusListEntry",
					statusPurpose: "revocation",
					statusListIndex: "14278",
					statusListCredential: "https://license.example/credentials/status/84"
				},
				{
					id: "https://license.example/credentials/status/84#82938",
					type: "BitstringStatusListEntry",
					statusPurpose: "suspension",
					statusListIndex: "82938",
					statusListCredential: "https://license.example/credentials/status/84"
				}
			]
		};
		expect(vc).toBeDefined();
	});

	test("Example 14", () => {
		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			id: "http://university.example/credentials/3732",
			type: ["VerifiableCredential", "ExampleDegreeCredential", "ExamplePersonCredential"],
			issuer: "https://university.example/issuers/14",
			validFrom: "2010-01-01T19:23:24Z",
			credentialSubject: {
				id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
				degree: {
					type: "ExampleBachelorDegree",
					name: "Bachelor of Science and Arts"
				},
				alumniOf: {
					name: "Example University"
				}
			},
			credentialSchema: [
				{
					id: "https://example.org/examples/degree.json",
					type: "JsonSchema"
				},
				{
					id: "https://example.org/examples/alumni.json",
					type: "JsonSchema"
				}
			]
		};
		expect(vc).toBeDefined();
	});

	test("Example 15", () => {
		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			id: "http://example.gov/credentials/3732",
			type: ["VerifiableCredential", "ExampleDegreeCredential"],
			issuer: "did:example:6fb1f712ebe12c27cc26eebfe11",
			validFrom: "2010-01-01T19:23:24Z",
			credentialSubject: {
				id: "https://subject.example/subject/3921",
				degree: {
					type: "ExampleBachelorDegree",
					name: "Bachelor of Science and Arts"
				}
			},
			proof: {
				type: "DataIntegrityProof",
				cryptosuite: "eddsa-rdfc-2022",
				created: "2021-11-13T18:19:39Z",
				verificationMethod: "https://university.example/issuers/14#key-1",
				proofPurpose: "assertionMethod",
				proofValue: "z58DAdFfa9SkqZMVPxAQp...jQCrfFPP2oumHKtz"
			}
		};
		expect(vc).toBeDefined();
	});
});
