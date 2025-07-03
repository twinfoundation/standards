// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { GaiaXContextType } from "./gaiaXContextType";
import type { GaiaXTypes } from "./gaiaXTypes";
import type { IAddress } from "./IAddress";
import type { IRegistrationNumber } from "./IRegistrationNumber";

/**
 * A Legal Person participating in the ecosystem
 */
export interface IParticipant extends IJsonLdNodeObject {
	/**
	 * The LD context
	 */
	"@context": GaiaXContextType;

	/**
	 * The participant Id.
	 */
	id: string;

	/**
	 * JSON-LD type.
	 */
	type: typeof GaiaXTypes.Participant;

	/**
	 * The legal registration number.
	 */
	registrationNumber: IRegistrationNumber;

	/**
	 * The legal name.
	 */
	legalName: string;

	/**
	 * Legal Address
	 *
	 */
	legalAddress: IAddress;
}
