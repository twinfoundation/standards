// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import {
	Converter,
	GeneralError,
	Guards,
	Is,
	JsonHelper,
	ObjectHelper,
	Uint8ArrayHelper
} from "@twin.org/core";
import { Ed25519, Sha256 } from "@twin.org/crypto";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import { nameof } from "@twin.org/nameof";
import { Jwk, type IJwk } from "@twin.org/web";
import { DidCryptoSuites } from "../models/didCryptoSuites";
import type { IDataIntegrityProof } from "../models/IDataIntegrityProof";
import type { IProof } from "../models/IProof";
import type { IProofSignerVerifier } from "../models/IProofSignerVerifier";

/**
 * Helper methods for creating and verifying proofs.
 * https://www.w3.org/TR/vc-di-eddsa/#eddsa-jcs-2022
 */
export class DataIntegrityProofSignerVerifier implements IProofSignerVerifier {
	/**
	 * Runtime name for the class.
	 */
	public readonly CLASS_NAME: string = nameof<DataIntegrityProofSignerVerifier>();

	/**
	 * Create a proof for the given data.
	 * @param unsecuredDocument The data to create the proof for.
	 * @param unsignedProof The proof options.
	 * @param signKey The key to sign the proof with.
	 * @returns The created proof.
	 */
	public async createProof(
		unsecuredDocument: IJsonLdNodeObject,
		unsignedProof: IDataIntegrityProof,
		signKey: IJwk
	): Promise<IProof> {
		Guards.object<IJsonLdNodeObject>(this.CLASS_NAME, nameof(unsecuredDocument), unsecuredDocument);
		Guards.object<IProof>(this.CLASS_NAME, nameof(unsignedProof), unsignedProof);
		Guards.object<IJwk>(this.CLASS_NAME, nameof(signKey), signKey);

		const rawKeys = await Jwk.toRaw(signKey);
		if (!Is.uint8Array(rawKeys.privateKey)) {
			throw new GeneralError(this.CLASS_NAME, "missingPrivateKey");
		}

		const combinedHash = await this.createHash(unsecuredDocument, unsignedProof);

		const signature = Ed25519.sign(rawKeys.privateKey, combinedHash);

		const signedProof = ObjectHelper.clone(unsignedProof);

		signedProof.proofValue = `z${Converter.bytesToBase58(signature)}`;

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
		signedProof: IDataIntegrityProof,
		verifyKey: IJwk
	): Promise<boolean> {
		Guards.object<IJsonLdNodeObject>(this.CLASS_NAME, nameof(securedDocument), securedDocument);
		Guards.object<IDataIntegrityProof>(this.CLASS_NAME, nameof(signedProof), signedProof);
		Guards.stringValue(this.CLASS_NAME, nameof(signedProof.proofValue), signedProof.proofValue);
		Guards.object<IJwk>(this.CLASS_NAME, nameof(verifyKey), verifyKey);

		const rawKeys = await Jwk.toRaw(verifyKey);
		if (!Is.uint8Array(rawKeys.publicKey)) {
			throw new GeneralError(this.CLASS_NAME, "missingPublicKey");
		}

		const combinedHash = await this.createHash(securedDocument, signedProof);

		return Ed25519.verify(
			rawKeys.publicKey,
			combinedHash,
			Converter.base58ToBytes(signedProof.proofValue.slice(1))
		);
	}

	/**
	 * Create a hash for the given data.
	 * @param unsecuredDocument The data to create the proof for.
	 * @param unsignedProof The unsigned proof.
	 * @returns The created hash.
	 */
	public async createHash(
		unsecuredDocument: IJsonLdNodeObject,
		unsignedProof: IDataIntegrityProof
	): Promise<Uint8Array> {
		Guards.object<IJsonLdNodeObject>(this.CLASS_NAME, nameof(unsecuredDocument), unsecuredDocument);
		Guards.object<IDataIntegrityProof>(this.CLASS_NAME, nameof(unsignedProof), unsignedProof);
		Guards.stringValue(
			this.CLASS_NAME,
			nameof(unsignedProof.cryptosuite),
			unsignedProof.cryptosuite
		);
		Guards.stringValue(
			this.CLASS_NAME,
			nameof(unsignedProof.verificationMethod),
			unsignedProof.verificationMethod
		);

		const unsecuredDocumentClone = ObjectHelper.clone(unsecuredDocument);
		const proofOptionsClone = ObjectHelper.clone(unsignedProof);

		delete unsecuredDocumentClone.proof;
		delete proofOptionsClone.proofValue;

		if (proofOptionsClone.cryptosuite !== DidCryptoSuites.EdDSAJcs2022) {
			throw new GeneralError(this.CLASS_NAME, "cryptosuiteNotSupported", {
				cryptoSuite: proofOptionsClone.cryptosuite
			});
		}

		if (!Is.empty(unsecuredDocumentClone["@context"])) {
			proofOptionsClone["@context"] = unsecuredDocumentClone[
				"@context"
			] as IDataIntegrityProof["@context"];
		}

		const transformedDocument = JsonHelper.canonicalize(unsecuredDocumentClone);

		const transformedDocumentHash = Sha256.sum256(Converter.utf8ToBytes(transformedDocument));

		const transformedProofOptions = JsonHelper.canonicalize(proofOptionsClone);

		const proofOptionsHash = Sha256.sum256(Converter.utf8ToBytes(transformedProofOptions));

		return Uint8ArrayHelper.concat([proofOptionsHash, transformedDocumentHash]);
	}
}
