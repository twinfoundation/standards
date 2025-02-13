// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinitionElement, IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { DidContexts } from "./didContexts";
import type { IDidCredentialStatus } from "./IDidCredentialStatus";
import type { IDidProof } from "./IDidProof";

/**
 * Interface describing a verifiable credential.
 * https://www.w3.org/TR/vc-data-model-2.0
 */
export interface IDidVerifiableCredential {
	/**
	 * The context for the verifiable credential.
	 */
	"@context":
		| typeof DidContexts.ContextVCv2
		| [typeof DidContexts.ContextVCv2, IJsonLdContextDefinitionElement];

	/**
	 * The identifier for the verifiable credential.
	 */
	id?: string;

	/**
	 * The types of the data stored in the verifiable credential.
	 */
	type: string | string[];

	/**
	 * The data for the verifiable credential.
	 */
	credentialSubject: IJsonLdNodeObject | IJsonLdNodeObject[];

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
	 * The date the verifiable credential is valid from.
	 */
	validFrom?: string;

	/**
	 * The date the verifiable credential is valid until.
	 */
	validUntil?: string;

	/**
	 * Evidence associated with the Credential.
	 */
	evidence?: IJsonLdNodeObject | IJsonLdNodeObject[];

	/**
	 * Proofs that the verifiable credential is valid.
	 * Optional if a different proof method is used, such as JWT.
	 */
	proof?: IDidProof | IDidProof[];
}
