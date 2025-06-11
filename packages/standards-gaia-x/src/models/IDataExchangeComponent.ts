// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { GaiaXContextType } from "./gaiaXContextType";
import type { GaiaXTypes } from "./gaiaXTypes";

/**
 * Data Exchange component as defined by Gaia-X
 * https://docs.gaia-x.eu/ontology/development/classes/DataExchangeComponent
 */
export interface IDataExchangeComponent extends IJsonLdNodeObject {
	/**
	 * The LD Context
	 */
	"@context": GaiaXContextType;

	/**
	 * The type of JSON-LD node
	 */
	type:
		| typeof GaiaXTypes.DataExchangeComponent
		| [typeof GaiaXTypes.DataExchangeComponent, ...string[]];
}
