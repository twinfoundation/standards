// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinitionRoot, IJsonLdObject } from "@twin.org/data-json-ld";
import type { IDidProof } from "./IDidProof";
import type { IDidVerifiableCredential } from "./IDidVerifiableCredential";

/**
 * Interface describing a verifiable presentation.
 */
export interface IDidVerifiablePresentation<T extends IJsonLdObject = IJsonLdObject> {
	/**
	 * The context for the verifiable credential.
	 */
	"@context": IJsonLdContextDefinitionRoot;

	/**
	 * Provide a unique identifier for the presentation.
	 */
	id?: string;

	/**
	 * The types of the data stored in the verifiable credential.
	 */
	type: string[];

	/**
	 * The data for the verifiable credentials.
	 */
	verifiableCredential: (string | IDidVerifiableCredential<T>)[];

	/**
	 * The entity generating the presentation.
	 */
	holder?: string;

	/**
	 * Proofs that the verifiable presentation is valid.
	 * Optional if a different proof method is used, such as JWT.
	 */
	proof?: IDidProof | IDidProof[];
}
