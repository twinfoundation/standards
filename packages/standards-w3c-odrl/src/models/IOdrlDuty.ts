// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlRule } from "./IOdrlRule";

/**
 * Interface for Duty Rules.
 * A Duty is the obligation to exercise an action, with all refinements satisfied.
 * A Duty is fulfilled if all constraints are satisfied and if its action has been exercised.
 */
export interface IOdrlDuty extends IOdrlRule {
	/**
	 * The consequences if the duty is not fulfilled.
	 * Only applicable when the Duty is referenced by a Rule with duty or obligation
	 * properties.
	 */
	consequence?: IOdrlDuty[];
	/**
	 * The remedies that may be fulfilled to cure the violation.
	 */
	remedy?: IOdrlDuty[];
}
