// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { IOdrlDuty } from "./IOdrlDuty";
import type { IOdrlPermission } from "./IOdrlPermission";
import type { IOdrlProhibition } from "./IOdrlProhibition";
import type { ConflictStrategyType } from "./odrlTypes";

/**
 * Interface representing an ODRL Policy.
 */
export interface IOdrlPolicy {
	/**
	 * The context for the policy.
	 * Must include "http://www.w3.org/ns/odrl.jsonld"
	 */
	"@context": string | string[];
	/**
	 * The type of policy.
	 * Must be one of: "Set", "Offer", "Agreement"
	 */
	"@type": string;

	/**
	 * The unique identifier for the policy.
	 * Must be an IRI.
	 */
	uid: string;

	/**
	 * The profile(s) this policy conforms to.
	 * IRIs identifying the ODRL Profile(s).
	 */
	profile?: string | string[];

	/**
	 * The parent policy(ies) this policy inherits from.
	 * IRIs identifying the parent Policy(ies).
	 */
	inheritFrom?: string | string[];

	/**
	 * The conflict resolution strategy.
	 */
	conflict?: ConflictStrategyType;

	/**
	 * The permissions in the policy.
	 * At least one of permission, prohibition, or obligation must be present.
	 */
	permission?: IOdrlPermission[];

	/**
	 * The prohibitions in the policy.
	 * At least one of permission, prohibition, or obligation must be present.
	 */
	prohibition?: IOdrlProhibition[];

	/**
	 * The obligations in the policy.
	 * At least one of permission, prohibition, or obligation must be present.
	 */
	obligation?: IOdrlDuty[];
}
