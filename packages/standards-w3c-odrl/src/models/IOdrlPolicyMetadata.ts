// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Interface for ODRL Policy Metadata using Dublin Core terms.
 * While these aren't explicitly defined in the ODRL spec, they are valid and useful metadata properties that follow Dublin Core standards.
 */
export interface IOdrlPolicyMetadata {
	/**
	 * The individual, agent, or organisation that authored the Policy.
	 */
	"dc:creator"?: string | string[];

	/**
	 * A human-readable representation or summary of the Policy.
	 */
	"dc:description"?: string | string[];

	/**
	 * The date (and time) the Policy was first issued.
	 */
	"dc:issued"?: string;

	/**
	 * The date (and time) the Policy was updated.
	 */
	"dc:modified"?: string;

	/**
	 * The jurisdiction under which the Policy is relevant.
	 */
	"dc:coverage"?: string | string[];

	/**
	 * The identifier of a Policy that this Policy supersedes.
	 */
	"dc:replaces"?: string;

	/**
	 * The identifier of a Policy that supersedes this Policy.
	 */
	"dc:isReplacedBy"?: string;
}
