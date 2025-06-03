// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for ODRL Status.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const StatusType = {
	/**
	 * Active type.
	 */
	Active: "active",

	/**
	 * Inactive type.
	 */
	Inactive: "inactive",

	/**
	 * Pending type.
	 */
	Pending: "pending",

	/**
	 * Revoked type.
	 */
	Revoked: "revoked"
} as const;

/**
 * The types for ODRL Status.
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];
