// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { IOdrlConstraint } from "./IOdrlConstraint";

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
	and?: IOdrlConstraint[];

	/**
	 * OR operator - at least one constraint must be satisfied.
	 */
	or?: IOdrlConstraint[];

	/**
	 * XOR operator - exactly one constraint must be satisfied.
	 */
	xone?: IOdrlConstraint[];

	/**
	 * AND Sequence operator - all constraints must be satisfied in order.
	 */
	andSequence?: IOdrlConstraint[];
}
