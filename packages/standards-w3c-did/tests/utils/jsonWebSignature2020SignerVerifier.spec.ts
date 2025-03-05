// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Converter } from "@twin.org/core";
import { Ed25519 } from "@twin.org/crypto";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import { Jwk } from "@twin.org/web";
import type { IDidVerifiableCredential } from "../../src/models/IDidVerifiableCredential";
import type { IJsonWebSignature2020Proof } from "../../src/models/IJsonWebSignature2020Proof";
import { ProofTypes } from "../../src/models/proofTypes";
import { JsonWebSignature2020SignerVerifier } from "../../src/signerVerifiers/jsonWebSignature2020SignerVerifier";
import { ProofHelper } from "../../src/utils/proofHelper";

describe("JsonWebSignature2020SignerVerifier", () => {
	beforeAll(() => {
		Date.now = vi.fn(() => new Date("2024-01-31T16:00:45.490Z").getTime());
	});

	test("Can create a JSON Web Signature 2020 Hash", async () => {
		const vc: IDidVerifiableCredential & IJsonLdNodeObject = {
			"@context": [
				"https://www.w3.org/2018/credentials/v1",
				"https://www.w3.org/2018/credentials/examples/v1"
			],
			id: "http://example.edu/credentials/1872",
			type: ["VerifiableCredential", "AlumniCredential"],
			issuer: "https://example.edu/issuers/565049",
			issuanceDate: "2010-01-01T19:23:24Z",
			credentialSubject: {
				id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
				alumniOf: {
					id: "did:example:c276e12ec21ebfeb1f712ebc6f1"
				},
				name: "John Doe"
			}
		};

		const unsignedProof = ProofHelper.createUnsignedProof(
			ProofTypes.JsonWebSignature2020,
			"did:web:wizard.lab.gaia-x.eu:api:credentials:2d37wbGvQzbAQ84yRouh2m2vBKkN8s5AfH9Q75HZRCUQmJW7yAVSNKzjJj6gcjE2mDNDUHCichXWdMH3S2c8AaDLm3kXmf5R8DLGYw32T5A1uaxbEy5W28Tv5BDbSrdfGtCUpjC8RHpZAMFTDET3g3QkFTRuY8rVrR7zjeSWa54WeRLKutKhyR5EbdyNYPWHxm8TEWWuMchWEBnXQNjrntGUEP8csESeaTBCupBqxSJ8WM4fBRwFvJKmCLwJzkpo2LkbWEzpGRy3GvedQ1AFLEe3JCdcgs5b2u5ubgT3pgte71JebuiAPP8jJN3tUAhk9CAPXpu2EHvCuy4C1CuYK5pnMKwRHtRsA2w7i1Gn7EzMrRjiU5AeFS3KLMbbHNLVvuqCeW9Gx93tUfJdQx2Z88obsrH9sWYSCDFExmJE9w31uricJmQcb9815znjuupWrGb3jy32qX7Vvt9uya7keewZuAQ1TjyctKDcqWA44JuKVURtdtykEUuKoUZHBasJ4vaBaBfmy7MBkhFsqPRVp9MdkTwVGv5mHxV6SayZRaN7WoJCWu7Jphb3uB4oEXQXsP4EShYzyqUM8yTrrFtHADiGWDw8CZ86jEvfA7n#JWK2020",
			{ created: "2024-01-31T16:00:45.490Z" }
		);

		const proof = await new JsonWebSignature2020SignerVerifier().createHash(
			vc,
			unsignedProof as IJsonWebSignature2020Proof
		);

		expect(proof).toEqual(
			new Uint8Array([
				55, 65, 185, 111, 65, 195, 125, 156, 53, 221, 213, 247, 53, 123, 167, 52, 9, 236, 251, 6,
				24, 190, 151, 253, 230, 73, 252, 250, 46, 255, 100, 101, 231, 107, 88, 242, 100, 232, 239,
				48, 27, 133, 60, 53, 39, 83, 78, 22, 125, 208, 226, 183, 13, 12, 127, 219, 4, 156, 221, 119,
				166, 252, 229, 225
			])
		);
	});

	test("Can create and verify a JSON Web Signature 2020", async () => {
		const privateKey = Converter.base64UrlToBytes("m5N7gTItgWz6udWjuqzJsqX-vksUnxJrNjD5OilScBc");
		const publicKey = Ed25519.publicKeyFromPrivateKey(privateKey);

		const vc: IDidVerifiableCredential & IJsonLdNodeObject = {
			"@context": [
				"https://www.w3.org/2018/credentials/v1",
				"https://www.w3.org/2018/credentials/examples/v1",
				"https://w3id.org/security/suites/jws-2020/v1"
			],
			id: "http://example.gov/credentials/3732",
			type: ["VerifiableCredential", "UniversityDegreeCredential"],
			issuer: {
				id: "https://example.com/issuer/123"
			},
			issuanceDate: "2020-03-10T04:24:12.164Z",
			credentialSubject: {
				id: "did:example:456",
				degree: {
					type: "BachelorDegree",
					name: "Bachelor of Science and Arts"
				}
			}
		};

		const privateCryptoKey = await Jwk.fromEd25519Private(privateKey);

		const unsignedProof = ProofHelper.createUnsignedProof(
			ProofTypes.JsonWebSignature2020,
			"did:key:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2#z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2",
			{ created: "2023-02-24T23:36:38Z" }
		);

		const proof = await new JsonWebSignature2020SignerVerifier().createProof(
			vc,
			unsignedProof as IJsonWebSignature2020Proof,
			privateCryptoKey
		);

		expect(proof).toEqual({
			"@context": [
				"https://www.w3.org/2018/credentials/v1",
				"https://www.w3.org/2018/credentials/examples/v1",
				"https://w3id.org/security/suites/jws-2020/v1"
			],
			type: "JsonWebSignature2020",
			created: "2023-02-24T23:36:38Z",
			jws: "eyJhbGciOiJFZDI1NTE5IiwiYjY0IjpmYWxzZSwiY3JpdCI6WyJiNjQiXX0..x-9agOvZeq3IU74Dm6RKtC4tjpaKjl2xms5lsluzpbNOD7knwc24tiyc5CH64SucTPnRTr1JGWNu9rgQHQeFAA",
			proofPurpose: "assertionMethod",
			verificationMethod:
				"did:key:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2#z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2"
		});

		const publicCryptoKey = await Jwk.fromEd25519Public(publicKey);
		const verified = await new JsonWebSignature2020SignerVerifier().verifyProof(
			vc,
			proof,
			publicCryptoKey
		);
		expect(verified).toEqual(true);
	});
});
