// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { IOdrlDuty } from "./IOdrlDuty";
import type { IOdrlRule } from "./IOdrlRule";

/**
 * Interface for Permission Rules.
 * A Permission allows an action to be exercised on an Asset
 * if all constraints are satisfied and if all duties are fulfilled.
 */
export interface IOdrlPermission extends IOdrlRule {
	/**
	 * The duties that must be fulfilled before the permission can be exercised.
	 * A Permission MAY have none, one, or more duty property values.
	 */
	duty?: IOdrlDuty[];
}
