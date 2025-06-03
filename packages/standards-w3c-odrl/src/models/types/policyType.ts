// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for ODRL Policies.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const PolicyType = {
	/**
	 * Policy type.
	 */
	Policy: "Policy",

	/**
	 * Set type.
	 */
	Set: "Set",

	/**
	 * Offer type.
	 */
	Offer: "Offer",

	/**
	 * Agreement type.
	 */
	Agreement: "Agreement"
} as const;

/**
 * The types for ODRL Policies.
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];
