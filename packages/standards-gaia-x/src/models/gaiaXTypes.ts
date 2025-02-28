// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types concerning Gaia-X.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const GaiaXTypes = {
	/**
	 * Data Resource
	 */
	DataResource: "DataResource",

	/**
	 * Service Offering Type
	 */
	ServiceOffering: "ServiceOffering",

	/**
	 * Participant
	 */
	Participant: "LegalPerson",

	/**
	 * Data Exchange Component
	 */
	DataExchangeComponent: "DataExchangeComponent",

	/**
	 * Address
	 */
	Address: "Address",

	/**
	 * Endpoint
	 */
	Endpoint: "Endpoint",

	/**
	 * Registration number
	 */
	RegistrationNumber: "RegistrationNumber",

	/**
	 * Local Registration number
	 */
	LocalRegistrationNumber: "LocalRegistrationNumber",

	/**
	 * EORI
	 */
	EORI: "EORI",

	/**
	 * VAT ID
	 */
	VatID: "VatID",

	/**
	 * EU ID
	 */
	EUID: "EUID",

	/**
	 * GLEIF LEI code.
	 */
	LeiCode: "LeiCode",

	/**
	 * Tax Id.
	 */
	TaxID: "TaxID"
} as const;

/**
 * The types concerning Gaia-X.
 */
export type GaiaXTypes = (typeof GaiaXTypes)[keyof typeof GaiaXTypes];
