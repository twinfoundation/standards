// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { OperatorType, StatusType } from "./odrlTypes";

/**
 * Interface for ODRL Constraints.
 */
export interface IOdrlConstraint {
	/**
	 * Optional unique identifier for the constraint.
	 */
	uid?: string;

	/**
	 * The left operand of the constraint.
	 */
	leftOperand: string;

	/**
	 * The operator of the constraint.
	 */
	operator: OperatorType;

	/**
	 * The right operand of the constraint.
	 */
	rightOperand?:
		| string
		| {
				"@value": string;
				"@type"?: string;
		  };

	/**
	 * Reference to the right operand.
	 */
	rightOperandReference?: string;

	/**
	 * The data type of the right operand.
	 */
	dataType?: string;

	/**
	 * The unit for the right operand value.
	 */
	unit?: string;

	/**
	 * The status value for comparison.
	 */
	status?: StatusType;
}
