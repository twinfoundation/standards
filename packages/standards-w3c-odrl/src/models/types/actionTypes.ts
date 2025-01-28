// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for ODRL Common Actions.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ActionTypes = {
	/**
	 * Use action.
	 */
	Use: "use",

	/**
	 * Transfer action.
	 */
	Transfer: "transfer",

	/**
	 * Display action.
	 */
	Display: "display",

	/**
	 * Print action.
	 */
	Print: "print",

	/**
	 * Play action.
	 */
	Play: "play",

	/**
	 * Distribute action.
	 */
	Distribute: "distribute",

	/**
	 * Index action.
	 */
	Index: "index",

	/**
	 * Reproduce action.
	 */
	Reproduce: "reproduce",

	/**
	 * Compensate action.
	 */
	Compensate: "compensate",

	/**
	 * Modify action.
	 */
	Modify: "modify",

	/**
	 * Derive action.
	 */
	Derive: "derive",

	/**
	 * Delete action.
	 */
	Delete: "delete",

	/**
	 * Move action.
	 */
	Move: "move",

	/**
	 * Sell action.
	 */
	Sell: "sell",

	/**
	 * Lend action.
	 */
	Lend: "lend",

	/**
	 * Give action.
	 */
	Give: "give",

	/**
	 * Lease action.
	 */
	Lease: "lease",

	/**
	 * Execute action.
	 */
	Execute: "execute",

	/**
	 * Present action.
	 */
	Present: "present",

	/**
	 * Read action.
	 */
	Read: "read",

	/**
	 * Write action.
	 */
	Write: "write",

	/**
	 * Extract action.
	 */
	Extract: "extract",

	/**
	 * Notify action.
	 */
	Notify: "notify",

	/**
	 * Archive action.
	 */
	Archive: "archive",

	/**
	 * Share action.
	 */
	Share: "share",

	/**
	 * Install action.
	 */
	Install: "install",

	/**
	 * Uninstall action.
	 */
	Uninstall: "uninstall"
} as const;

/**
 * The types for ODRL Actions.
 */
export type ActionType = (typeof ActionTypes)[keyof typeof ActionTypes];
