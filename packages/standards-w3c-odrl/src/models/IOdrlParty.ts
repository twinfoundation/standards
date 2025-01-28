// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { IOdrlPartyCollection } from "./IOdrlPartyCollection";

/**
 * Interface for ODRL Parties.
 */
export interface IOdrlParty {
	/**
	 * The unique identifier for the party.
	 * Must be an IRI.
	 */
	uid?: string;

	/**
	 * The type of the party.
	 * Can be used to specify additional type information (e.g., "Party",
	 * "vcard:Organization", "vcard:Individual").
	 */
	"@type"?: string | string[];

	/**
	 * Reference to the party collection this party is part of.
	 * Used to identify a PartyCollection that a Party entity is a member of.
	 */
	partOf?: string | IOdrlPartyCollection;
}
