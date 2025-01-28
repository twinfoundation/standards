// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlAction } from "./IOdrlAction";
import type { IOdrlAsset } from "./IOdrlAsset";
import type { IOdrlConstraint } from "./IOdrlConstraint";
import type { IOdrlParty } from "./IOdrlParty";
import type { ActionType } from "./types/actionTypes";

/**
 * Base interface for ODRL Rules.
 */
export interface IOdrlRule {
	/**
	 * Optional unique identifier for the rule.
	 */
	uid?: string;

	/**
	 * The action associated with the rule.
	 */
	action: ActionType | IOdrlAction | (ActionType | IOdrlAction)[];

	/**
	 * The target asset for the rule.
	 */
	target?: string | IOdrlAsset;

	/**
	 * The assigner of the rule.
	 */
	assigner?: string | IOdrlParty;

	/**
	 * The assignee of the rule.
	 */
	assignee?: string | IOdrlParty;

	/**
	 * Constraints applied to the rule.
	 */
	constraint?: IOdrlConstraint[];
}
