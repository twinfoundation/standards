// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for ODRL Logical Constraints.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const LogicalConstraintType = {
	/**
	 * And type.
	 */
	And: "and",

	/**
	 * Or type.
	 */
	Or: "or",

	/**
	 * Xone type.
	 */
	Xone: "xone",

	/**
	 * And sequence type.
	 */
	AndSequence: "andSequence"
} as const;

/**
 * The types for ODRL Logical Constraints.
 */
export type LogicalConstraintType =
	(typeof LogicalConstraintType)[keyof typeof LogicalConstraintType];
