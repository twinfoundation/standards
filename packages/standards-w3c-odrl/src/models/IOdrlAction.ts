// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IOdrlConstraint } from "./IOdrlConstraint";
import type { IOdrlLogicalConstraint } from "./IOdrlLogicalConstraint";
import type { ActionType } from "./types/actionType";

/**
 * Interface for ODRL Actions.
 */
export interface IOdrlAction extends IJsonLdNodeObject {
	/**
	 * The value/identifier of the action.
	 * Used in complex action definitions.
	 */
	"rdf:value"?: { "@id": string };

	/**
	 * Direct action identifier.
	 * Used in simple action references.
	 */
	"@id"?: string;

	/**
	 * Refinements applied to the action.
	 */
	refinement?:
		| IOdrlConstraint
		| IOdrlLogicalConstraint
		| (IOdrlConstraint | IOdrlLogicalConstraint)[];

	/**
	 * Reference to the action this action is included in.
	 */
	includedIn?: ActionType;

	/**
	 * References to actions this action implies.
	 */
	implies?: ActionType[];
}
