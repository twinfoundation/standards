// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlAsset } from "./IOdrlAsset";
import type { IOdrlConstraint } from "./IOdrlConstraint";

/**
 * Interface for ODRL Asset Collections.
 * An AssetCollection is a single resource representing a set of member resources,
 * where all members of the set will be the subject of the Rule.
 */
export interface IOdrlAssetCollection extends IOdrlAsset {
	/**
	 * Reference to the source of the asset collection.
	 * Must be an IRI that references the AssetCollection.
	 */
	source?: string;

	/**
	 * Refinements applied to the asset collection.
	 * Used to specify the refinement context under which to identify individual Asset(s)
	 * of the complete collection. The refinement applies to the characteristics of each
	 * member of the collection (not the resource as a whole).
	 */
	refinement?: IOdrlConstraint[];
}
