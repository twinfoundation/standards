// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { GaiaXContextType } from "./gaiaXContextType";
import type { GaiaXTypes } from "./gaiaXTypes";
import type { IDataResource } from "./IDataResource";
import type { IEndpoint } from "./IEndpoint";
import type { IParticipant } from "./IParticipant";

/**
 * A Service offering
 */
export interface IServiceOffering extends IJsonLdNodeObject {
	/**
	 * The LD context
	 */
	"@context": GaiaXContextType;

	/**
	 * Id
	 */
	id: string;

	/**
	 * Type
	 */
	type: typeof GaiaXTypes.ServiceOffering;

	/**
	 * Description
	 */
	description?: string;

	/**
	 * Name
	 */
	name: string;

	/**
	 * Participant that provides the offering
	 */
	providedBy:
		| string
		| IParticipant
		| (IJsonLdNodeObject & { id: string; type: typeof GaiaXTypes.Participant });

	/**
	 * ODRL policy associated to the service offering
	 */
	servicePolicy: IJsonLdNodeObject;

	/**
	 * Resources aggregated
	 * It is supported different representations, inline,
	 * by reference both providing the URI or a partial JSON-LD Node object
	 */
	aggregationOfResources?:
		| string[]
		| IDataResource[]
		| (IJsonLdNodeObject & { id: string; type: typeof GaiaXTypes.DataResource });

	/**
	 * The endpoint
	 */
	endpoint: IEndpoint;
}
