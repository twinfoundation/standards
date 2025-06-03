// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Right operand types for ODRL constraints
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const RightOperandType = {
	/**
	 * Reference to policy usage events
	 */
	PolicyUsage: "odrl:policyUsage"

	// ... other right operand types ...
} as const;

/**
 * The types for ODRL Right Operand Types.
 */
export type RightOperandType = (typeof RightOperandType)[keyof typeof RightOperandType];
