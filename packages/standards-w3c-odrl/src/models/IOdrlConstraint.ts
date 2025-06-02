// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { LeftOperandType } from "./types/leftOperandTypes";
import type { OperatorType } from "./types/operatorTypes";
import type { StatusType } from "./types/statusTypes";

/**
 * Interface for ODRL Constraints.
 */
export interface IOdrlConstraint extends IJsonLdNodeObject {
	/**
	 * Optional unique identifier for the constraint.
	 */
	uid?: string;

	/**
	 * The left operand of the constraint.
	 */
	leftOperand: string | LeftOperandType;

	/**
	 * The operator of the constraint.
	 */
	operator: OperatorType;

	/**
	 * The right operand of the constraint.
	 * value with optional @type is used for literal values (like "5.00" with type "xsd:decimal")
	 * id is used when referencing a URI/identifier (like odrl:policyUsage)
	 */
	rightOperand?:
		| string
		| {
				"@value": string;
				"@type"?: string;
		  }
		| {
				"@id": string;
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
