// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDidDocument } from "../src/models/IDidDocument";

describe("IDidDocument", () => {
	test("Example 1", () => {
		const doc: IDidDocument = {
			"@context": [
				"https://www.w3.org/ns/did/v1",
				"https://w3id.org/security/suites/ed25519-2020/v1"
			],
			id: "did:example:123456789abcdefghi",
			authentication: [
				{
					id: "did:example:123456789abcdefghi#keys-1",
					type: "Ed25519VerificationKey2020",
					controller: "did:example:123456789abcdefghi",
					publicKeyMultibase: "zH3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
				}
			]
		};
		expect(doc).toBeDefined();
	});

	test("Example 9", () => {
		const doc: IDidDocument = {
			"@context": [
				"https://www.w3.org/ns/did/v1",
				"https://w3id.org/security/suites/ed25519-2020/v1"
			],
			id: "did:example:123456789abcdefghi",
			verificationMethod: [
				{
					id: "did:example:123456789abcdefghi#key-1",
					type: "Ed25519VerificationKey2020",
					controller: "did:example:123456789abcdefghi",
					publicKeyMultibase: "zH3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
				}
			],
			authentication: ["#key-1"]
		};
		expect(doc).toBeDefined();
	});

	test("Example 12", () => {
		const doc: IDidDocument = {
			"@context": [
				"https://www.w3.org/ns/did/v1",
				"https://w3id.org/security/suites/jws-2020/v1",
				"https://w3id.org/security/suites/ed25519-2020/v1"
			],
			id: "did:example:123456789abcdefghi",
			verificationMethod: [
				{
					id: "did:example:123#_Qq0UL2Fq651Q0Fjd6TvnYE-faHiOpRlPVQcY_-tA4A",
					type: "JsonWebKey2020",
					controller: "did:example:123",
					publicKeyJwk: {
						crv: "Ed25519",
						x: "VCpo2LMLhn6iWku8MKvSLg2ZAoC-nlOyPVQaO3FxVeQ",
						kty: "OKP",
						kid: "_Qq0UL2Fq651Q0Fjd6TvnYE-faHiOpRlPVQcY_-tA4A"
					}
				},
				{
					id: "did:example:123456789abcdefghi#keys-1",
					type: "Ed25519VerificationKey2020",
					controller: "did:example:pqrstuvwxyz0987654321",
					publicKeyMultibase: "zH3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
				}
			]
		};
		expect(doc).toBeDefined();
	});

	test("Example 13", () => {
		const doc: IDidDocument = {
			"@context": [
				"https://www.w3.org/ns/did/v1",
				"https://w3id.org/security/suites/jws-2020/v1",
				"https://w3id.org/security/suites/ed25519-2020/v1"
			],
			id: "did:example:123456789abcdefghi",
			verificationMethod: [
				{
					id: "did:example:123#_Qq0UL2Fq651Q0Fjd6TvnYE-faHiOpRlPVQcY_-tA4A",
					type: "JsonWebKey2020",
					controller: "did:example:123",
					publicKeyJwk: {
						crv: "Ed25519",
						x: "VCpo2LMLhn6iWku8MKvSLg2ZAoC-nlOyPVQaO3FxVeQ",
						kty: "OKP",
						kid: "_Qq0UL2Fq651Q0Fjd6TvnYE-faHiOpRlPVQcY_-tA4A"
					}
				},
				{
					id: "did:example:123456789abcdefghi#keys-1",
					type: "Ed25519VerificationKey2020",
					controller: "did:example:pqrstuvwxyz0987654321",
					publicKeyMultibase: "zH3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
				}
			]
		};
		expect(doc).toBeDefined();
	});

	test("Example 15", () => {
		const doc: IDidDocument = {
			"@context": [
				"https://www.w3.org/ns/did/v1",
				"https://w3id.org/security/suites/ed25519-2020/v1"
			],
			id: "did:example:123456789abcdefghi",
			authentication: [
				"did:example:123456789abcdefghi#keys-1",

				{
					id: "did:example:123456789abcdefghi#keys-2",
					type: "Ed25519VerificationKey2020",
					controller: "did:example:123456789abcdefghi",
					publicKeyMultibase: "zH3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
				}
			]
		};
		expect(doc).toBeDefined();
	});

	test("Example 16", () => {
		const doc: IDidDocument = {
			"@context": [
				"https://www.w3.org/ns/did/v1",
				"https://w3id.org/security/suites/ed25519-2020/v1"
			],
			id: "did:example:123456789abcdefghi",
			assertionMethod: [
				"did:example:123456789abcdefghi#keys-1",
				{
					id: "did:example:123456789abcdefghi#keys-2",
					type: "Ed25519VerificationKey2020",
					controller: "did:example:123456789abcdefghi",
					publicKeyMultibase: "zH3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
				}
			]
		};
		expect(doc).toBeDefined();
	});

	test("Example 17", () => {
		const doc: IDidDocument = {
			"@context": "https://www.w3.org/ns/did/v1",
			id: "did:example:123456789abcdefghi",
			keyAgreement: [
				"did:example:123456789abcdefghi#keys-1",
				{
					id: "did:example:123#zC9ByQ8aJs8vrNXyDhPHHNNMSHPcaSgNpjjsBYpMMjsTdS",
					type: "X25519KeyAgreementKey2019",
					controller: "did:example:123",
					publicKeyMultibase: "z9hFgmPVfmBZwRvFEyniQDBkz9LmV7gDEqytWyGZLmDXE"
				}
			]
		};
		expect(doc).toBeDefined();
	});

	test("Example 18", () => {
		const doc: IDidDocument = {
			"@context": [
				"https://www.w3.org/ns/did/v1",
				"https://w3id.org/security/suites/ed25519-2020/v1"
			],
			id: "did:example:123456789abcdefghi",
			capabilityInvocation: [
				"did:example:123456789abcdefghi#keys-1",
				{
					id: "did:example:123456789abcdefghi#keys-2",
					type: "Ed25519VerificationKey2020",
					controller: "did:example:123456789abcdefghi",
					publicKeyMultibase: "zH3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
				}
			]
		};
		expect(doc).toBeDefined();
	});

	test("Example 19", () => {
		const doc: IDidDocument = {
			"@context": [
				"https://www.w3.org/ns/did/v1",
				"https://w3id.org/security/suites/ed25519-2020/v1"
			],
			id: "did:example:123456789abcdefghi",
			capabilityDelegation: [
				"did:example:123456789abcdefghi#keys-1",

				{
					id: "did:example:123456789abcdefghi#keys-2",
					type: "Ed25519VerificationKey2020",
					controller: "did:example:123456789abcdefghi",
					publicKeyMultibase: "zH3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
				}
			]
		};
		expect(doc).toBeDefined();
	});

	test("Example 30", () => {
		const doc: IDidDocument = {
			"@context": [
				"https://www.w3.org/ns/did/v1",
				"https://w3id.org/security/suites/ed25519-2020/v1"
			],
			id: "did:example:123",
			authentication: [
				{
					id: "did:example:123#z6MkecaLyHuYWkayBDLw5ihndj3T1m6zKTGqau3A51G7RBf3",
					type: "Ed25519VerificationKey2020", // external (property value)
					controller: "did:example:123",
					publicKeyMultibase: "zAKJP3f7BD6W4iWEQ9jwndVTCBq8ua2Utt8EEjJ6Vxsf"
				}
			],
			capabilityInvocation: [
				{
					id: "did:example:123#z6MkhdmzFu659ZJ4XKj31vtEDmjvsi5yDZG5L7Caz63oP39k",
					type: "Ed25519VerificationKey2020", // external (property value)
					controller: "did:example:123",
					publicKeyMultibase: "z4BWwfeqdp1obQptLLMvPNgBw48p7og1ie6Hf9p5nTpNN"
				}
			],
			capabilityDelegation: [
				{
					id: "did:example:123#z6Mkw94ByR26zMSkNdCUi6FNRsWnc2DFEeDXyBGJ5KTzSWyi",
					type: "Ed25519VerificationKey2020", // external (property value)
					controller: "did:example:123",
					publicKeyMultibase: "zHgo9PAmfeoxHG8Mn2XHXamxnnSwPpkyBHAMNF3VyXJCL"
				}
			],
			assertionMethod: [
				{
					id: "did:example:123#z6MkiukuAuQAE8ozxvmahnQGzApvtW7KT5XXKfojjwbdEomY",
					type: "Ed25519VerificationKey2020", // external (property value)
					controller: "did:example:123",
					publicKeyMultibase: "z5TVraf9itbKXrRvt2DSS95Gw4vqU3CHAdetoufdcKazA"
				}
			]
		};
		expect(doc).toBeDefined();
	});

	test("Example 31", () => {
		const doc: IDidDocument = {
			"@context": ["https://www.w3.org/ns/did/v1", "https://w3id.org/security/suites/jws-2020/v1"],
			id: "did:example:123",
			verificationMethod: [
				{
					id: "did:example:123#key-0",
					type: "JsonWebKey2020",
					controller: "did:example:123",
					publicKeyJwk: {
						kty: "OKP", // external (property name)
						crv: "Ed25519", // external (property name)
						x: "VCpo2LMLhn6iWku8MKvSLg2ZAoC-nlOyPVQaO3FxVeQ" // external (property name)
					}
				},
				{
					id: "did:example:123#key-1",
					type: "JsonWebKey2020",
					controller: "did:example:123",
					publicKeyJwk: {
						kty: "OKP", // external (property name)
						crv: "X25519", // external (property name)
						x: "pE_mG098rdQjY3MKK2D5SUQ6ZOEW3a6Z6T7Z4SgnzCE" // external (property name)
					}
				},
				{
					id: "did:example:123#key-2",
					type: "JsonWebKey2020",
					controller: "did:example:123",
					publicKeyJwk: {
						kty: "EC", // external (property name)
						crv: "secp256k1", // external (property name)
						x: "Z4Y3NNOxv0J6tCgqOBFnHnaZhJF6LdulT7z8A-2D5_8", // external (property name)
						y: "i5a2NtJoUKXkLm6q8nOEu9WOkso1Ag6FTUT6k_LMnGk" // external (property name)
					}
				},
				{
					id: "did:example:123#key-3",
					type: "JsonWebKey2020",
					controller: "did:example:123",
					publicKeyJwk: {
						kty: "EC", // external (property name)
						crv: "secp256k1", // external (property name)
						x: "U1V4TVZVMUpUa0ZVU1NBcU9CRm5IbmFaaEpGNkxkdWx", // external (property name)
						y: "i5a2NtJoUKXkLm6q8nOEu9WOkso1Ag6FTUT6k_LMnGk" // external (property name)
					}
				},
				{
					id: "did:example:123#key-4",
					type: "JsonWebKey2020",
					controller: "did:example:123",
					publicKeyJwk: {
						kty: "EC", // external (property name)
						crv: "P-256", // external (property name)
						x: "Ums5WVgwRkRTVVFnU3k5c2xvZllMbEcwM3NPRW91ZzN", // external (property name)
						y: "nDQW6XZ7b_u2Sy9slofYLlG03sOEoug3I0aAPQ0exs4" // external (property name)
					}
				},
				{
					id: "did:example:123#key-5",
					type: "JsonWebKey2020",
					controller: "did:example:123",
					publicKeyJwk: {
						kty: "EC", // external (property name)
						crv: "P-384", // external (property name)
						x: "VUZKSlUwMGdpSXplekRwODhzX2N4U1BYdHVYWUZsaXVDR25kZ1U0UXA4bDkxeHpE", // external (property name)
						y: "jq4QoAHKiIzezDp88s_cxSPXtuXYFliuCGndgU4Qp8l91xzD1spCmFIzQgVjqvcP" // external (property name)
					}
				},
				{
					id: "did:example:123#key-6",
					type: "JsonWebKey2020",
					controller: "did:example:123",
					publicKeyJwk: {
						kty: "EC", // external (property name)
						crv: "P-521", // external (property name)
						x: "VTI5c1lYSmZWMmx1WkhNZ0dQTXhaYkhtSnBEU3UtSXZwdUtpZ0VOMnB6Z1d0U28tLVJ3ZC1uNzhuclduWnplRGMx", // external (property name)
						y: "UW5WNVgwSnBkR052YVc0Z1VqY1B6LVpoZWNaRnliT3FMSUpqVk9sTEVUSDd1UGx5RzBnRW9NV25JWlhoUVZ5cFB5" // external (property name)
					}
				},
				{
					id: "did:example:123#key-7",
					type: "JsonWebKey2020",
					controller: "did:example:123",
					publicKeyJwk: {
						kty: "RSA", // external (property name)
						e: "AQAB", // external (property name)
						n: "UkhWaGJGOUZRMTlFVWtKSElBdENGV2hlU1F2djFNRXh1NVJMQ01UNGpWazlraEpLdjhKZU1YV2UzYldIYXRqUHNrZGYyZGxhR2tXNVFqdE9uVUtMNzQybXZyNHRDbGRLUzNVTElhVDFoSkluTUhIeGoyZ2N1Yk82ZUVlZ0FDUTRRU3U5TE8wSC1MTV9MM0RzUkFCQjdRamE4SGVjcHl1c3BXMVR1X0RicXhjU253ZW5kYW13TDUyVjE3ZUtobE80dVh3djJIRmx4dWZGSE0wS21DSnVqSUt5QXhqRF9tM3FfX0lpSFVWSEQxdERJRXZMUGhHOUF6c24zajk1ZC1zYU" // external (property name)
					}
				}
			]
		};
		expect(doc).toBeDefined();
	});

	test("Example 32", () => {
		const doc: IDidDocument = {
			"@context": [
				"https://www.w3.org/ns/did/v1",
				"https://w3id.org/security/suites/ed25519-2018/v1",
				"https://w3id.org/security/suites/x25519-2019/v1",
				"https://w3id.org/security/suites/secp256k1-2019/v1",
				"https://w3id.org/security/suites/jws-2020/v1"
			],
			id: "did:example:123",
			verificationMethod: [
				{
					id: "did:example:123#key-0",
					type: "Ed25519VerificationKey2018",
					controller: "did:example:123",
					publicKeyMultibase: "3M5RCDjPTWPkKSN3sxUmmMqHbmRPegYP1tjcKyrDbt9J" // external (property name)
				},
				{
					id: "did:example:123#key-1",
					type: "X25519KeyAgreementKey2019",
					controller: "did:example:123",
					publicKeyMultibase: "FbQWLPRhTH95MCkQUeFYdiSoQt8zMwetqfWoxqPgaq7x" // external (property name)
				},
				{
					id: "did:example:123#key-2",
					type: "EcdsaSecp256k1VerificationKey2019",
					controller: "did:example:123",
					publicKeyMultibase: "ns2aFDq25fEV1NUd3wZ65sgj5QjFW8JCAHdUJfLwfodt" // external (property name)
				},
				{
					id: "did:example:123#key-3",
					type: "JsonWebKey2020",
					controller: "did:example:123",
					publicKeyJwk: {
						kty: "EC", // external (property name)
						crv: "P-256", // external (property name)
						x: "Er6KSSnAjI70ObRWhlaMgqyIOQYrDJTE94ej5hybQ2M", // external (property name)
						y: "pPVzCOTJwgikPjuUE6UebfZySqEJ0ZtsWFpj7YSPGEk" // external (property name)
					}
				}
			]
		};
		expect(doc).toBeDefined();
	});
});
