// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Converter, JsonHelper } from "@twin.org/core";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import { DidContexts } from "../../src/models/didContexts";
import { DidTypes } from "../../src/models/didTypes";
import type { IDataIntegrityProof } from "../../src/models/IDataIntegrityProof";
import type { IDidVerifiableCredential } from "../../src/models/IDidVerifiableCredential";
import type { IMultikey } from "../../src/models/IMultikey";
import { ProofTypes } from "../../src/models/proofTypes";
import { DataIntegrityProofSignerVerifier } from "../../src/signerVerifiers/dataIntegrityProofSignerVerifier";
import { MultikeyHelper } from "../../src/utils/multikeyHelper";
import { ProofHelper } from "../../src/utils/proofHelper";

//  Based on https://www.w3.org/TR/vc-di-eddsa/#representation-eddsa-jcs-2022
describe("DataIntegrityProofSignerVerifier", () => {
	beforeAll(() => {
		Date.now = vi.fn(() => new Date("2024-01-31T16:00:45.490Z").getTime());
	});

	test("Can create hash", async () => {
		const unsecuredDocument: IDidVerifiableCredential & IJsonLdNodeObject = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			id: "urn:uuid:58172aac-d8ba-11ed-83dd-0b3aef56cc33",
			type: ["VerifiableCredential", "AlumniCredential"],
			name: "Alumni Credential",
			description: "A minimum viable example of an Alumni Credential.",
			issuer: "https://vc.example/issuers/5678",
			validFrom: "2023-01-01T00:00:00Z",
			credentialSubject: {
				id: "did:example:abcdefgh",
				alumniOf: "The School of Examples"
			}
		};

		const canonical = JsonHelper.canonicalize(unsecuredDocument);
		expect(canonical).toEqual(
			'{"@context":["https://www.w3.org/ns/credentials/v2","https://www.w3.org/ns/credentials/examples/v2"],"credentialSubject":{"alumniOf":"The School of Examples","id":"did:example:abcdefgh"},"description":"A minimum viable example of an Alumni Credential.","id":"urn:uuid:58172aac-d8ba-11ed-83dd-0b3aef56cc33","issuer":"https://vc.example/issuers/5678","name":"Alumni Credential","type":["VerifiableCredential","AlumniCredential"],"validFrom":"2023-01-01T00:00:00Z"}'
		);

		const unsignedProof: IDataIntegrityProof = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			type: "DataIntegrityProof",
			cryptosuite: "eddsa-jcs-2022",
			created: "2023-02-24T23:36:38Z",
			verificationMethod:
				"did:key:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2#z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2",
			proofPurpose: "assertionMethod"
		};

		const hash = await new DataIntegrityProofSignerVerifier().createHash(
			unsecuredDocument,
			unsignedProof
		);

		expect(Converter.bytesToHex(hash)).toEqual(
			"66ab154f5c2890a140cb8388a22a160454f80575f6eae09e5a097cabe539a1db59b7cb6251b8991add1ce0bc83107e3db9dbbab5bd2c28f687db1a03abc92f19"
		);
	});

	test("Can create and verify a proof", async () => {
		const unsecuredDocument: IDidVerifiableCredential & IJsonLdNodeObject = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			id: "urn:uuid:58172aac-d8ba-11ed-83dd-0b3aef56cc33",
			type: ["VerifiableCredential", "AlumniCredential"],
			name: "Alumni Credential",
			description: "A minimum viable example of an Alumni Credential.",
			issuer: "https://vc.example/issuers/5678",
			validFrom: "2023-01-01T00:00:00Z",
			credentialSubject: {
				id: "did:example:abcdefgh",
				alumniOf: "The School of Examples"
			}
		};

		const unsignedProof = ProofHelper.createUnsignedProof(
			ProofTypes.DataIntegrityProof,
			"did:key:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2#z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2",
			{ created: "2023-02-24T23:36:38Z" }
		);

		const multikey: IMultikey = {
			"@context": DidContexts.ContextControllerIdentifiers,
			type: DidTypes.Multikey,
			publicKeyMultibase: "z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2",
			secretKeyMultibase: "z3u2en7t5LR2WtQH5PfFqMqwVHBeXouLzo6haApm8XHqvjxq"
		};

		const jwk = MultikeyHelper.toJwk(multikey);

		const signedProof = await new DataIntegrityProofSignerVerifier().createProof(
			unsecuredDocument,
			unsignedProof as IDataIntegrityProof,
			jwk
		);

		expect(signedProof).toEqual({
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			type: "DataIntegrityProof",
			cryptosuite: "eddsa-jcs-2022",
			created: "2023-02-24T23:36:38Z",
			verificationMethod:
				"did:key:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2#z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2",
			proofPurpose: "assertionMethod",
			proofValue:
				"z2HnFSSPPBzR36zdDgK8PbEHeXbR56YF24jwMpt3R1eHXQzJDMWS93FCzpvJpwTWd3GAVFuUfjoJdcnTMuVor51aX"
		});

		const verified = await new DataIntegrityProofSignerVerifier().verifyProof(
			unsecuredDocument,
			signedProof as IDataIntegrityProof,
			jwk
		);

		expect(verified).toEqual(true);
	});
});
