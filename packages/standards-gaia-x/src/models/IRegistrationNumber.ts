// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { GaiaXTypes } from "./gaiaXTypes";

/**
 * Registration Number as defined by the Gaia-X ontology.
 * https://docs.gaia-x.eu/ontology/development/classes/RegistrationNumber/
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IRegistrationNumber extends IJsonLdNodeObject {
	/**
	 * JSON-LD Type.
	 */
	type:
		| typeof GaiaXTypes.RegistrationNumber
		| typeof GaiaXTypes.LocalRegistrationNumber
		| typeof GaiaXTypes.EORI
		| typeof GaiaXTypes.EUID
		| typeof GaiaXTypes.LeiCode
		| typeof GaiaXTypes.TaxID
		| typeof GaiaXTypes.VatID;

	/**
	 * Local Registration.
	 */
	local?: string;

	/**
	 * Country code. See https://docs.gaia-x.eu/ontology/development/enums/CountryNameAlpha2/
	 */
	countryCode?: string;

	/**
	 * Subdivision country code.
	 * See https://docs.gaia-x.eu/ontology/development/enums/RegionCode/
	 */
	subdivisionCountryCode?: string;

	/**
	 * The VAT identification number.
	 */
	vatID?: string;

	/**
	 * Unique LEI number as defined by GLEIF.
	 */
	leiCode?: string;

	/**
	 * The Economic Operators Registration and Identification number (EORI).
	 */
	eori?: string;

	/**
	 * The country where the EORI is registered written in plain english
	 */
	country?: string;

	/**
	 * The European Unique Identifier (EUID) for business located in the European Ec.
	 */
	euid?: string;

	/**
	 * The company tax ID.
	 */
	taxId?: string;
}
