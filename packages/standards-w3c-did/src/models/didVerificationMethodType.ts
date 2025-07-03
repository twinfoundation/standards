// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDidDocument } from "./IDidDocument";

/**
 * The types of verification method.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DidVerificationMethodType: {
	[id: string]: keyof Pick<
		IDidDocument,
		| "verificationMethod"
		| "authentication"
		| "assertionMethod"
		| "keyAgreement"
		| "capabilityInvocation"
		| "capabilityDelegation"
	>;
} = {
	/**
	 * VerificationMethod.
	 */
	VerificationMethod: "verificationMethod",

	/**
	 * Authentication.
	 */
	Authentication: "authentication",

	/**
	 * Assertion Method.
	 */
	AssertionMethod: "assertionMethod",

	/**
	 * Key Agreement.
	 */
	KeyAgreement: "keyAgreement",

	/**
	 * Capability Invocation.
	 */
	CapabilityInvocation: "capabilityInvocation",

	/**
	 * Capability Delegation.
	 */
	CapabilityDelegation: "capabilityDelegation"
} as const;

/**
 * The types of verification method.
 */
export type DidVerificationMethodType =
	(typeof DidVerificationMethodType)[keyof typeof DidVerificationMethodType];
