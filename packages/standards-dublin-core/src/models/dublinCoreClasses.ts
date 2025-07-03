// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Dublin Core classes.
 * Based on http://purl.org/dc/dcmitype
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DublinCoreClasses = {
	/**
	 * See Description at
	 * https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/dcmitype/Collection
	 */
	Collection: "Collection"
} as const;

/**
 * Dublin Core classes
 */
export type DublinCoreClasses = (typeof DublinCoreClasses)[keyof typeof DublinCoreClasses];
