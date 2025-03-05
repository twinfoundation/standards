// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinitionElement, IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { DidContexts } from "./didContexts";
import type { IDataIntegrityProof } from "./IDataIntegrityProof";
import type { IDidCredentialSchema } from "./IDidCredentialSchema";
import type { IDidCredentialStatus } from "./IDidCredentialStatus";
import type { IJsonWebSignature2020Proof } from "./IJsonWebSignature2020Proof";

/**
 * Interface describing a verifiable credential.
 * https://www.w3.org/TR/vc-data-model-2.0
 */
export interface IDidVerifiableCredential {
	/**
	 * The context for the verifiable credential.
	 */
	"@context":
		| typeof DidContexts.ContextVCv1
		| typeof DidContexts.ContextVCv2
		| [typeof DidContexts.ContextVCv1, ...IJsonLdContextDefinitionElement[]]
		| [typeof DidContexts.ContextVCv2, ...IJsonLdContextDefinitionElement[]];

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
	credentialSubject?: IJsonLdNodeObject | IJsonLdNodeObject[];

	/**
	 * Used to discover information about the current status of the
	 * verifiable credential, such as whether it is suspended or revoked.
	 */
	credentialStatus?: IDidCredentialStatus | IDidCredentialStatus[];

	/**
	 * Annotate type definitions or lock them to specific versions of the vocabulary.
	 */
	credentialSchema?: IDidCredentialSchema | IDidCredentialSchema[];

	/**
	 * The issuing identity.
	 */
	issuer?: string | { [key: string]: unknown; id: string };

	/**
	 * The date the verifiable credential was issued.
	 */
	issuanceDate?: string;

	/**
	 * The name of the credential.
	 */
	name?: string | { "@value": string; "@language": string; "@direction"?: string }[];

	/**
	 * The description of the credential.
	 */
	description?: string | { "@value": string; "@language": string; "@direction"?: string }[];

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
	proof?:
		| IDataIntegrityProof
		| IJsonWebSignature2020Proof
		| (IDataIntegrityProof | IJsonWebSignature2020Proof)[];
}
