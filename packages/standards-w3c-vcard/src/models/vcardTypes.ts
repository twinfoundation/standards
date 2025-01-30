// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Common VCard property types.
 * Based on http://www.w3.org/2006/vcard/ns#
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const VCardPropertyType = {
	/**
	 * Formatted name
	 */
	FormattedName: "vcard:fn",

	/**
	 * Email address
	 */
	Email: "vcard:hasEmail",

	/**
	 * Organization type
	 */
	Organization: "vcard:Organization",

	/**
	 * Group type
	 */
	Group: "vcard:Group",

	/**
	 * Individual type
	 */
	Individual: "vcard:Individual",

	/**
	 * Address
	 */
	Address: "vcard:Address",

	/**
	 * Phone number
	 */
	Phone: "vcard:hasTelephone",

	/**
	 * URL
	 */
	Url: "vcard:hasUrl",

	/**
	 * Nickname
	 */
	Nickname: "vcard:nickname",

	/**
	 * Birthday
	 */
	Birthday: "vcard:bday",

	/**
	 * Photo
	 */
	Photo: "vcard:hasPhoto"
} as const;

/**
 * Common VCard property types.
 */
export type VCardPropertyType = (typeof VCardPropertyType)[keyof typeof VCardPropertyType];
