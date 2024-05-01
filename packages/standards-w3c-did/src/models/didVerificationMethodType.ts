// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDidDocument } from "./IDidDocument";

/**
 * The types of verification method.
 */
export type DidVerificationMethodType = keyof Pick<
	IDidDocument,
	| "verificationMethod"
	| "authentication"
	| "assertionMethod"
	| "keyAgreement"
	| "capabilityInvocation"
	| "capabilityDelegation"
>;
