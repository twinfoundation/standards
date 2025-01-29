// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Interface for ODRL Policy Metadata using Dublin Core terms.
 * While these aren't explicitly defined in the ODRL spec, they are valid and useful metadata properties that follow Dublin Core standards.
 */
export interface IOdrlPolicyMetadata {
	/**
	 * The individual, agent, or organisation that authored the Policy.
	 * Note: String values may not be normalized and should not be used for direct comparison.
	 */
	"dc:creator"?: string | string[];

	/**
	 * A human-readable representation or summary of the Policy.
	 * Note: String values may not be normalized and should not be used for direct comparison.
	 */
	"dc:description"?: string | string[];

	/**
	 * The date (and time) the Policy was first issued.
	 * Note: String values may not be normalized and should not be used for direct comparison.
	 */
	"dc:issued"?: string;

	/**
	 * The date (and time) the Policy was updated.
	 * Note: String values may not be normalized and should not be used for direct comparison.
	 */
	"dc:modified"?: string;

	/**
	 * The publisher of the Policy.
	 * Note: String values may not be normalized and should not be used for direct comparison.
	 */
	"dc:publisher"?: string;

	/**
	 * The subject of the Policy.
	 * Note: String values may not be normalized and should not be used for direct comparison.
	 */
	"dc:subject"?: string | string[];

	/**
	 * The jurisdiction under which the Policy is relevant.
	 * Note: When using string values, they may not be normalized and should not be used for direct comparison.
	 * Using "@id" references is preferred for comparison purposes.
	 */
	"dc:coverage"?: string | { "@id": string };

	/**
	 * The identifier of a Policy that this Policy supersedes.
	 * Using "@id" references is preferred for comparison purposes.
	 */
	"dc:replaces"?: string | { "@id": string };

	/**
	 * The identifier of a Policy that supersedes this Policy.
	 * Using "@id" references is preferred for comparison purposes.
	 */
	"dc:isReplacedBy"?: string | { "@id": string };
}
