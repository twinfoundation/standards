// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for ODRL Conflict Resolution Strategies.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ConflictStrategyTypes = {
	/**
	 * Permission type.
	 */
	Perm: "perm",

	/**
	 * Prohibition type.
	 */
	Prohibit: "prohibit",

	/**
	 * Invalid type.
	 */
	Invalid: "invalid"
} as const;

/**
 * The types for ODRL Conflict Resolution Strategies.
 */
export type ConflictStrategyType =
	(typeof ConflictStrategyTypes)[keyof typeof ConflictStrategyTypes];
