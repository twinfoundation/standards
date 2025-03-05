// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import {
	Converter,
	GeneralError,
	Guards,
	Is,
	ObjectHelper,
	Uint8ArrayHelper
} from "@twin.org/core";
import { Sha256 } from "@twin.org/crypto";
import { JsonLdProcessor, type IJsonLdNodeObject } from "@twin.org/data-json-ld";
import { nameof } from "@twin.org/nameof";
import { Jwk, Jws, type IJwk } from "@twin.org/web";
import { DidContexts } from "../models/didContexts";
import type { IJsonWebSignature2020Proof } from "../models/IJsonWebSignature2020Proof";
import type { IProofSignerVerifier } from "../models/IProofSignerVerifier";

/**
 * Helper methods for creating and verifying proofs.
 */
export class JsonWebSignature2020SignerVerifier implements IProofSignerVerifier {
	/**
	 * Runtime name for the class.
	 */
	public readonly CLASS_NAME: string = nameof<JsonWebSignature2020SignerVerifier>();

	/**
	 * Create a proof for the given data.
	 * @param unsecuredDocument The data to create the proof for.
	 * @param unsignedProof The proof options.
	 * @param signKey The key to sign the proof with.
	 * @returns The created proof.
	 */
	public async createProof(
		unsecuredDocument: IJsonLdNodeObject,
		unsignedProof: IJsonWebSignature2020Proof,
		signKey: IJwk
	): Promise<IJsonWebSignature2020Proof> {
		Guards.object<IJsonLdNodeObject>(this.CLASS_NAME, nameof(unsecuredDocument), unsecuredDocument);
		Guards.object<IJsonWebSignature2020Proof>(
			this.CLASS_NAME,
			nameof(unsignedProof),
			unsignedProof
		);
		Guards.object<IJwk>(this.CLASS_NAME, nameof(signKey), signKey);

		const hash = await this.createHash(unsecuredDocument, unsignedProof);

		const cryptoKey = await Jwk.toCryptoKey(signKey);

		const signature = await Jws.create(cryptoKey, hash);

		const signedProof = ObjectHelper.clone(unsignedProof);

		signedProof.jws = signature;

		return signedProof;
	}

	/**
	 * Verify a proof for the given data in format.
	 * @param securedDocument The credential to verify.
	 * @param signedProof The proof to verify.
	 * @param verifyKey The public key to verify the proof with.
	 * @returns True if the credential was verified.
	 */
	public async verifyProof(
		securedDocument: IJsonLdNodeObject,
		signedProof: IJsonWebSignature2020Proof,
		verifyKey: IJwk
	): Promise<boolean> {
		Guards.object<IJsonLdNodeObject>(this.CLASS_NAME, nameof(securedDocument), securedDocument);
		Guards.object<IJsonWebSignature2020Proof>(this.CLASS_NAME, nameof(signedProof), signedProof);
		Guards.object<IJwk>(this.CLASS_NAME, nameof(verifyKey), verifyKey);
		const jws = signedProof.jws;
		if (!Is.stringValue(jws)) {
			throw new GeneralError(this.CLASS_NAME, "jwsMissing");
		}

		const hash = await this.createHash(securedDocument, signedProof);

		const cryptoKey = await Jwk.toCryptoKey(verifyKey);

		return Jws.verify(jws, cryptoKey, hash);
	}

	/**
	 * Create a hash for the given data.
	 * @param unsecuredDocument The data to create the proof for.
	 * @param unsignedProof The unsigned proof.
	 * @returns The created hash.
	 */
	public async createHash(
		unsecuredDocument: IJsonLdNodeObject,
		unsignedProof: IJsonWebSignature2020Proof
	): Promise<Uint8Array> {
		Guards.object<IJsonLdNodeObject>(this.CLASS_NAME, nameof(unsecuredDocument), unsecuredDocument);
		Guards.object<IJsonWebSignature2020Proof>(
			this.CLASS_NAME,
			nameof(unsignedProof),
			unsignedProof
		);
		Guards.stringValue(
			this.CLASS_NAME,
			nameof(unsignedProof.verificationMethod),
			unsignedProof.verificationMethod
		);
		const unsecuredDocumentClone = ObjectHelper.clone(unsecuredDocument);
		const proofOptionsClone = ObjectHelper.clone(unsignedProof);

		unsecuredDocumentClone["@context"] = JsonLdProcessor.combineContexts(
			unsecuredDocumentClone["@context"],
			DidContexts.ContextSecurityJws2020
		);

		proofOptionsClone["@context"] = unsecuredDocumentClone[
			"@context"
		] as IJsonWebSignature2020Proof["@context"];

		delete unsecuredDocumentClone.proof;
		delete proofOptionsClone.jws;

		const canonizedData: string = await JsonLdProcessor.canonize(unsecuredDocumentClone);
		const canonizedProof: string = await JsonLdProcessor.canonize(
			proofOptionsClone as unknown as IJsonLdNodeObject
		);

		const hashedProof = Sha256.sum256(Converter.utf8ToBytes(canonizedProof));
		const hashedData = Sha256.sum256(Converter.utf8ToBytes(canonizedData));

		return Uint8ArrayHelper.concat([hashedProof, hashedData]);
	}
}
