// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinitionElement, IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { DidContexts } from "./didContexts";
import type { DidCryptoSuites } from "./didCryptoSuites";
import type { ProofTypes } from "./proofTypes";

/**
 * Interface describing a did proof.
 * https://www.w3.org/TR/vc-data-integrity/
 */
export interface IDataIntegrityProof extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?:
		| typeof DidContexts.ContextDataIntegrity
		| [typeof DidContexts.ContextDataIntegrity, ...IJsonLdContextDefinitionElement[]];

	/**
	 * JSON-LD Type.
	 */
	type: typeof ProofTypes.DataIntegrityProof;

	/**
	 * An identifier for the cryptographic suite that can be used to verify the proof.
	 */
	cryptosuite: DidCryptoSuites | string;

	/**
	 * The id of the proof.
	 */
	id?: string;

	/**
	 * The reason the proof was created.
	 */
	proofPurpose: string;

	/**
	 * Contains the base-encoded binary data necessary to verify the
	 * digital proof using the verificationMethod specified.
	 */
	proofValue?: string;

	/**
	 * The verification method of the proof.
	 */
	verificationMethod?: string;

	/**
	 * The iso date of when the proof was created.
	 */
	created?: string;

	/**
	 * The iso date of when the proof expires.
	 */
	expires?: string;

	/**
	 * One or more security domains in which the proof is meant to be used.
	 */
	domain?: string | string[];

	/**
	 * Provided to mitigate replay attacks on domains.
	 */
	challenge?: string | string[];

	/**
	 * Identifies another data integrity proof that MUST verify before
	 * the current proof is processed
	 */
	previousProof?: string;

	/**
	 * Use of this field is to increase privacy by decreasing linkability
	 * that is the result of deterministically generated signatures.
	 */
	nonce?: string;
}
