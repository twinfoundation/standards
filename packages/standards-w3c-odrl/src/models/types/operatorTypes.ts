// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for ODRL Operators.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const OperatorType = {
	/**
	 * Equal type.
	 */
	Eq: "eq",

	/**
	 * Greater than type.
	 */
	Gt: "gt",

	/**
	 * Greater than or equal to type.
	 */
	Gteq: "gteq",

	/**
	 * Less than type.
	 */
	Lt: "lt",

	/**
	 * Less than or equal to type.
	 */
	Lteq: "lteq",

	/**
	 * Not equal to type.
	 */
	Neq: "neq",

	/**
	 * Is a type.
	 */
	IsA: "isA",

	/**
	 * Has part type.
	 */
	HasPart: "hasPart",

	/**
	 * Is part of type.
	 */
	IsPartOf: "isPartOf",

	/**
	 * Is all of type.
	 */
	IsAllOf: "isAllOf",

	/**
	 * Is any of type.
	 */
	IsAnyOf: "isAnyOf",

	/**
	 * Is none of type.
	 */
	IsNoneOf: "isNoneOf",

	/**
	 * Location time equal to type.
	 */
	LocTimeEq: "locTimeEq",

	/**
	 * Location time greater than or equal to type.
	 */
	LocTimeGteq: "locTimeGteq"
} as const;

/**
 * The types for ODRL Operators.
 */
export type OperatorType = (typeof OperatorType)[keyof typeof OperatorType];
