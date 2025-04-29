// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Common Dublin Core property types for ODRL Policy Metadata.
 * Based on http://purl.org/dc/terms/
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DublinCorePropertyType = {
	/**
	 * The individual, agent, or organisation that authored the Policy.
	 * Note: String values may not be normalized and should not be used for direct comparison.
	 */
	Creator: "creator",

	/**
	 * A human-readable representation or summary of the Policy.
	 * Note: String values may not be normalized and should not be used for direct comparison.
	 */
	Description: "description",

	/**
	 * The date (and time) the Policy was first issued.
	 * Note: String values may not be normalized and should not be used for direct comparison.
	 */
	Issued: "issued",

	/**
	 * The date (and time) the Policy was updated.
	 * Note: String values may not be normalized and should not be used for direct comparison.
	 */
	Modified: "modified",

	/**
	 * The publisher of the Policy.
	 * Note: String values may not be normalized and should not be used for direct comparison.
	 */
	Publisher: "publisher",

	/**
	 * The subject of the Policy.
	 * Note: String values may not be normalized and should not be used for direct comparison.
	 */
	Subject: "subject",

	/**
	 * The jurisdiction under which the Policy is relevant.
	 * Note: When using string values, they may not be normalized and should not be used for direct comparison.
	 * Using "@id" references is preferred for comparison purposes.
	 */
	Coverage: "coverage",

	/**
	 * The identifier of a Policy that this Policy supersedes.
	 * Using "@id" references is preferred for comparison purposes.
	 */
	Replaces: "replaces",

	/**
	 * The identifier of a Policy that supersedes this Policy.
	 * Using "@id" references is preferred for comparison purposes.
	 */
	IsReplacedBy: "isReplacedBy",

	/**
	 * See Description at
	 * https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/hasPart
	 */
	HasPart: "hasPart"
} as const;

/**
 * Common Dublin Core property types.
 */
export type DublinCorePropertyType =
	(typeof DublinCorePropertyType)[keyof typeof DublinCorePropertyType];
