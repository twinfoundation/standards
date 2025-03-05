// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IJwk } from "@twin.org/web";

/**
 * Interface describing a proof signer and verifier.
 */
export interface IProofSignerVerifier {
	/**
	 * Create a proof for the given data.
	 * @param unsecuredDocument The data to create the proof for.
	 * @param unsignedProof The proof options.
	 * @param signKey The key to sign the proof with.
	 * @returns The created proof.
	 */
	createProof(
		unsecuredDocument: IJsonLdNodeObject,
		unsignedProof: IJsonLdNodeObject,
		signKey: IJwk
	): Promise<IJsonLdNodeObject>;

	/**
	 * Verify a proof for the given data.
	 * @param securedDocument The credential to verify.
	 * @param signedProof The proof to verify.
	 * @param verifyKey The public key to verify the proof with.
	 * @returns True if the credential was verified.
	 */
	verifyProof(
		securedDocument: IJsonLdNodeObject,
		signedProof: IJsonLdNodeObject,
		verifyKey: IJwk
	): Promise<boolean>;

	/**
	 * Create a hash for the given data.
	 * @param unsecuredDocument The data to create the proof for.
	 * @param unsignedProof The unsigned proof.
	 * @returns The created hash.
	 */
	createHash(
		unsecuredDocument: IJsonLdNodeObject,
		unsignedProof: IJsonLdNodeObject
	): Promise<Uint8Array>;
}
