// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { IOdrlParty } from "./IOdrlParty";
import type { IOdrlPolicy } from "./IOdrlPolicy";
import type { OdrlTypes } from "./types/odrlTypes";

/**
 * Interface representing an ODRL Agreement.
 * An Agreement requires both an assigner and assignee (both agreeing parties).
 */
export interface IOdrlAgreement extends IOdrlPolicy {
	/**
	 * The type must be "Agreement".
	 */
	"@type": typeof OdrlTypes.Agreement;

	/**
	 * The assigner of the agreement.
	 * Required for Agreement policies.
	 */
	assigner: string | IOdrlParty;

	/**
	 * The assignee of the agreement.
	 * Required for Agreement policies.
	 */
	assignee: string | IOdrlParty;
}
