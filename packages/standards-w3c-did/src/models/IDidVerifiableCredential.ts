// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinitionRoot, IJsonLdObject } from "@twin.org/data-json-ld";
import type { IDidCredentialStatus } from "./IDidCredentialStatus";
import type { IDidProof } from "./IDidProof";

/**
 * Interface describing a verifiable credential.
 */
export interface IDidVerifiableCredential<T extends IJsonLdObject = IJsonLdObject> {
	/**
	 * The context for the verifiable credential.
	 */
	"@context": IJsonLdContextDefinitionRoot;

	/**
	 * The identifier for the verifiable credential.
	 */
	id?: string;

	/**
	 * The types of the data stored in the verifiable credential.
	 */
	type: string[];

	/**
	 * The data for the verifiable credential.
	 */
	credentialSubject: T | T[];

	/**
	 * Used to discover information about the current status of the
	 * verifiable credential, such as whether it is suspended or revoked.
	 */
	credentialStatus?: IDidCredentialStatus;

	/**
	 * The issuing identity.
	 */
	issuer?: string;

	/**
	 * The date the verifiable credential was issued.
	 */
	issuanceDate?: string;

	/**
	 * Proofs that the verifiable credential is valid.
	 * Optional if a different proof method is used, such as JWT.
	 */
	proof?: IDidProof | IDidProof[];
}
