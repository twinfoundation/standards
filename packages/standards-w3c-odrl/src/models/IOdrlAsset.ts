// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlAssetCollection } from "./IOdrlAssetCollection";

/**
 * Interface for ODRL Assets.
 */
export interface IOdrlAsset {
	/**
	 * The unique identifier for the asset.
	 * Should be an IRI.
	 */
	uid?: string;

	/**
	 * The type of the asset.
	 * Can be used to specify additional type information.
	 */
	"@type"?: string;

	/**
	 * Reference to the asset collection this asset is part of.
	 * Used to identify an AssetCollection that this Asset is a member of.
	 */
	partOf?: string | IOdrlAssetCollection;
}
