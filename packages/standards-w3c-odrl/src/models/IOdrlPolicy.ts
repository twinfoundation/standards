// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { IJsonLdContextDefinition } from "@twin.org/data-json-ld";
import type { IOdrlAction } from "./IOdrlAction";
import type { IOdrlAsset } from "./IOdrlAsset";
import type { IOdrlDuty } from "./IOdrlDuty";
import type { IOdrlParty } from "./IOdrlParty";
import type { IOdrlPermission } from "./IOdrlPermission";
import type { IOdrlPolicyMetadata } from "./IOdrlPolicyMetadata";
import type { IOdrlProhibition } from "./IOdrlProhibition";
import type { OdrlContexts } from "./odrlContexts";
import type { ActionType } from "./types/actionTypes";
import type { ConflictStrategyType } from "./types/conflictStrategyTypes";
import type { PolicyType } from "./types/policyTypes";

/**
 * Interface representing an ODRL Policy.
 */
export interface IOdrlPolicy extends IOdrlPolicyMetadata {
	/**
	 * The context for the policy.
	 * Must include "https://www.w3.org/ns/odrl.jsonld"
	 */
	"@context":
		| typeof OdrlContexts.Context
		| [typeof OdrlContexts.Context, IJsonLdContextDefinition]
		| IJsonLdContextDefinition;
	/**
	 * The type of policy.
	 * Must be one of: "Set", "Offer", "Agreement"
	 */
	"@type": PolicyType;

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
	 * The assigner of the policy.
	 * Applies to all rules unless overridden at rule level.
	 */
	assigner?: string | IOdrlParty;

	/**
	 * The assignee of the policy.
	 * Applies to all rules unless overridden at rule level.
	 */
	assignee?: string | IOdrlParty;

	/**
	 * The target asset for the rule.
	 */
	target?: string | IOdrlAsset | (string | IOdrlAsset)[];

	/**
	 * The action associated with the rule.
	 */
	action?: ActionType | IOdrlAction | (ActionType | IOdrlAction)[];

	/**
	 * The parent policy(ies) this policy inherits from.
	 * IRIs identifying the parent Policy(ies).
	 */
	inheritFrom?: string | string[];

	/**
	 * The conflict resolution strategy.
	 * - perm: Permissions override Prohibitions
	 * - prohibit: Prohibitions override Permissions
	 * - invalid: Policy is void if conflicts exist (default)
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
