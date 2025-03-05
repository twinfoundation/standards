// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinitionElement } from "@twin.org/data-json-ld";
import type { DidContexts } from "./didContexts";
import type { IDataIntegrityProof } from "./IDataIntegrityProof";
import type { IDidVerifiableCredential } from "./IDidVerifiableCredential";
import type { IJsonWebSignature2020Proof } from "./IJsonWebSignature2020Proof";

/**
 * Interface describing a verifiable presentation.
 */
export interface IDidVerifiablePresentation {
	/**
	 * The context for the verifiable presentation.
	 */
	"@context":
		| typeof DidContexts.ContextVCv2
		| [typeof DidContexts.ContextVCv2, ...IJsonLdContextDefinitionElement[]];

	/**
	 * Provide a unique identifier for the presentation.
	 */
	id?: string;

	/**
	 * The types of the data stored in the verifiable credential.
	 */
	type: string | string[];

	/**
	 * The data for the verifiable credentials.
	 */
	verifiableCredential?: (string | IDidVerifiableCredential)[];

	/**
	 * The entity generating the presentation.
	 */
	holder?: string;

	/**
	 * Proofs that the verifiable presentation is valid.
	 * Optional if a different proof method is used, such as JWT.
	 */
	proof?:
		| IDataIntegrityProof
		| IJsonWebSignature2020Proof
		| (IDataIntegrityProof | IJsonWebSignature2020Proof)[];
}
