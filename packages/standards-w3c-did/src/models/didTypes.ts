// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for DIDs.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DidTypes = {
	/**
	 * The type for Verifiable Credential.
	 */
	VerifiableCredential: "VerifiableCredential",

	/**
	 * The type for Verifiable Presentation.
	 */
	VerifiablePresentation: "VerifiablePresentation",

	/**
	 * The type for Ed25519VerificationKey2020.
	 */
	Ed25519VerificationKey2020: "Ed25519VerificationKey2020",

	/**
	 * The type for JsonWebKey2020.
	 */
	JsonWebKey2020: "JsonWebKey2020",

	/**
	 * The type for LinkedDomains.
	 */
	LinkedDomains: "LinkedDomains",

	/**
	 * The type for Multikey.
	 */
	Multikey: "Multikey"
} as const;

/**
 * The types for DIDs.
 */
export type DidTypes = (typeof DidTypes)[keyof typeof DidTypes];
