// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinitionElement } from "@twin.org/data-json-ld";
import type { DidContexts } from "./didContexts";
import type { ProofTypes } from "./proofTypes";

/**
 * Interface describing a did proof in JSON Web Signature 2020 Format.
 * https://www.w3.org/TR/vc-jws-2020/
 */
export interface IJsonWebSignature2020Proof {
	/**
	 * JSON-LD Context.
	 */
	"@context"?:
		| typeof DidContexts.ContextSecurityJws2020
		| [typeof DidContexts.ContextSecurityJws2020, ...IJsonLdContextDefinitionElement[]];

	/**
	 * JSON-LD Type.
	 */
	type: typeof ProofTypes.JsonWebSignature2020;

	/**
	 * The reason the proof was created.
	 */
	proofPurpose: string;

	/**
	 * The verification method of the proof.
	 */
	verificationMethod?: string;

	/**
	 * The iso date of when the proof was created.
	 */
	created?: string;

	/**
	 * The JSON Web Signature.
	 */
	jws?: string;
}
