// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Interface for ODRL Logical Constraints.
 * A Logical Constraint compares two or more existing Constraints by one logical operator.
 * If the comparison returns a logical match, then the Logical Constraint is satisfied.
 */
export interface IOdrlLogicalConstraint {
	/**
	 * Optional unique identifier for the logical constraint.
	 * Must be an IRI.
	 */
	uid?: string;

	/**
	 * AND operator - all constraints must be satisfied.
	 */
	and?: {
		"@list": { "@id": string }[];
	};

	/**
	 * OR operator - at least one constraint must be satisfied.
	 */
	or?: {
		"@list": { "@id": string }[];
	};

	/**
	 * XOR operator - exactly one constraint must be satisfied.
	 */
	xone?: {
		"@list": { "@id": string }[];
	};

	/**
	 * AND Sequence operator - all constraints must be satisfied in order.
	 */
	andSequence?: {
		"@list": { "@id": string }[];
	};
}
