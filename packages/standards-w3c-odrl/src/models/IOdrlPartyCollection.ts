// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlConstraint } from "./IOdrlConstraint";
import type { IOdrlParty } from "./IOdrlParty";

/**
 * Interface for ODRL Party Collections.
 * A PartyCollection identifies a collection of entities and is a subclass of Party.
 */
export interface IOdrlPartyCollection extends IOdrlParty {
	/**
	 * Reference to the source of the party collection.
	 * Used to identify the origin or location of the collection.
	 */
	source?: string;

	/**
	 * Refinements applied to the party collection.
	 * Used to specify constraints that apply to all members of the collection.
	 */
	refinement?: IOdrlConstraint[];
}
