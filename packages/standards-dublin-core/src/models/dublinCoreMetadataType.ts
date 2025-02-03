// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { DublinCorePropertyType } from "./dublinCoreTypes";

/**
 * Type for Dublin Core metadata properties
 */
export type DublinCoreMetadataType = {
	[K in DublinCorePropertyType as `dc:${K}`]?:
		| string
		| {
				"@id"?: string;
		  }
		| string[];
};
