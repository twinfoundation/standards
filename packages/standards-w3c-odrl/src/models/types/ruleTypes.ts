// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for ODRL Rules.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const RuleType = {
	/**
	 * Permission type.
	 */
	Permission: "Permission",

	/**
	 * Prohibition type.
	 */
	Prohibition: "Prohibition",

	/**
	 * Duty type.
	 */
	Duty: "Duty"
} as const;

/**
 * The types for ODRL Rules.
 */
export type RuleType = (typeof RuleType)[keyof typeof RuleType];
