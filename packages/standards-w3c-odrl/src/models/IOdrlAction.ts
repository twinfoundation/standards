// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { IOdrlConstraint } from "./IOdrlConstraint";
import type { ActionType } from "./types/actionTypes";

/**
 * Interface for ODRL Actions.
 */
export interface IOdrlAction {
	/**
	 * The value/identifier of the action.
	 */
	"rdf:value"?: { "@id": string };

	/**
	 * Refinements applied to the action.
	 */
	refinement?: IOdrlConstraint[];

	/**
	 * Reference to the action this action is included in.
	 */
	includedIn?: ActionType;

	/**
	 * References to actions this action implies.
	 */
	implies?: ActionType[];
}
