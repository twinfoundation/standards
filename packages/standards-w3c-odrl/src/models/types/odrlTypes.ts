// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for ODRL.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const OdrlTypes = {
	/**
	 * Policy type.
	 */
	Policy: "Policy",

	/**
	 * Set type (subclass of Policy).
	 */
	Set: "Set",

	/**
	 * Offer type (subclass of Policy).
	 */
	Offer: "Offer",

	/**
	 * Agreement type (subclass of Policy).
	 */
	Agreement: "Agreement",

	/**
	 * Asset type.
	 */
	Asset: "Asset",

	/**
	 * AssetCollection type.
	 */
	AssetCollection: "AssetCollection",

	/**
	 * Party type.
	 */
	Party: "Party",

	/**
	 * PartyCollection type.
	 */
	PartyCollection: "PartyCollection",

	/**
	 * Action type.
	 */
	Action: "Action",

	/**
	 * Rule type.
	 */
	Rule: "Rule",

	/**
	 * Permission type (subclass of Rule).
	 */
	Permission: "Permission",

	/**
	 * Prohibition type (subclass of Rule).
	 */
	Prohibition: "Prohibition",

	/**
	 * Duty type (subclass of Rule).
	 */
	Duty: "Duty",

	/**
	 * Constraint type.
	 */
	Constraint: "Constraint",

	/**
	 * LogicalConstraint type.
	 */
	LogicalConstraint: "LogicalConstraint",

	/**
	 * ContextType.
	 */
	ContextType: "ContextType",

	/**
	 * PolicyMetadata type.
	 */
	PolicyMetadata: "PolicyMetadata"
} as const;

/**
 * The types for ODRL.
 */
export type OdrlTypes = (typeof OdrlTypes)[keyof typeof OdrlTypes];
