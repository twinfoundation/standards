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
	LogicalConstraint: "LogicalConstraint"
} as const;

/**
 * The types for ODRL.
 */
export type OdrlTypes = (typeof OdrlTypes)[keyof typeof OdrlTypes];

/**
 * The types for ODRL Policies.
 */
export type PolicyType = "Policy" | "Set" | "Offer" | "Agreement";

/**
 * The types for ODRL Rules.
 */
export type RuleType = "Permission" | "Prohibition" | "Duty";

/**
 * The types for ODRL Conflict Resolution Strategies.
 */
export type ConflictStrategyType = "perm" | "prohibit" | "invalid";

/**
 * The types for ODRL Operators.
 */
export type OperatorType =
	| "eq"
	| "gt"
	| "gteq"
	| "lt"
	| "lteq"
	| "neq"
	| "isA"
	| "hasPart"
	| "isPartOf"
	| "isAllOf"
	| "isAnyOf"
	| "isNoneOf"
	| "locTimeEq"
	| "locTimeGteq";

/**
 * The types for ODRL Status.
 */
export type StatusType = "active" | "inactive" | "pending" | "revoked";

/**
 * The types for ODRL Logical Constraints.
 */
export type LogicalConstraintType = "and" | "or" | "xone" | "andSequence";

/**
 * The types for ODRL Common Actions.
 */
export type ActionType =
	| "use"
	| "transfer"
	| "display"
	| "print"
	| "play"
	| "distribute"
	| "reproduce"
	| "modify"
	| "derive"
	| "delete"
	| "move"
	| "sell"
	| "lend"
	| "give"
	| "lease"
	| "execute"
	| "present"
	| "read"
	| "write"
	| "extract"
	| "notify"
	| "archive"
	| "share"
	| "install"
	| "uninstall";

/**
 * The types for ODRL Data Types.
 */
export type DataType =
	| "xsd:string"
	| "xsd:boolean"
	| "xsd:integer"
	| "xsd:decimal"
	| "xsd:double"
	| "xsd:date"
	| "xsd:dateTime";
