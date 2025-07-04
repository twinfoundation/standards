// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { GaiaXContextType } from "./gaiaXContextType";
import type { GaiaXTypes } from "./gaiaXTypes";
import type { IDataExchangeComponent } from "./IDataExchangeComponent";
import type { IParticipant } from "./IParticipant";

/**
 * A Data Resource as defined by Gaia-X.
 * See also W3C DCAT Dataset https://www.w3.org/TR/vocab-dcat-3/.
 */
export interface IDataResource extends IJsonLdNodeObject {
	/**
	 * The LD Context
	 */
	"@context": GaiaXContextType;

	/**
	 * Subject Id
	 */
	id: string;

	/**
	 * Subject type
	 */
	type: typeof GaiaXTypes.DataResource;

	/**
	 * Description
	 */
	description?: string;

	/**
	 * The Resource Name
	 */
	name: string;

	/**
	 * Exposed through a Data Exchange Component.
	 * 'string' in case just an Id pointing to the Data Exchange Component is supplied
	 * the third case covers the idiom where a JSON-LD Node is supplied with id and type.
	 */
	exposedThrough:
		| IDataExchangeComponent
		| string
		| (IJsonLdNodeObject & { id: string; type: typeof GaiaXTypes.DataExchangeComponent });

	/**
	 * Who is the data producer
	 */
	producedBy: IParticipant | string;

	/**
	 * Pointer (URL) to the license
	 */
	license: string;

	/**
	 * Copyright owner
	 */
	copyrightOwnedBy: IParticipant | string;

	/**
	 * ODRL Policy
	 */
	resourcePolicy: ObjectOrArray<IJsonLdNodeObject>;
}
