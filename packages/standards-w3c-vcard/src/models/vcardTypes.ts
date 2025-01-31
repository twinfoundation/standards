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
	FormattedName: "fn",

	/**
	 * Email address
	 */
	Email: "hasEmail",

	/**
	 * Organization type
	 */
	Organization: "Organization",

	/**
	 * Group type
	 */
	Group: "Group",

	/**
	 * Individual type
	 */
	Individual: "Individual",

	/**
	 * Address
	 */
	Address: "Address",

	/**
	 * Phone number
	 */
	Phone: "hasTelephone",

	/**
	 * URL
	 */
	Url: "hasUrl",

	/**
	 * Nickname
	 */
	Nickname: "nickname",

	/**
	 * Birthday
	 */
	Birthday: "bday",

	/**
	 * Photo
	 */
	Photo: "hasPhoto"
} as const;

/**
 * Common VCard property types.
 */
export type VCardPropertyType = (typeof VCardPropertyType)[keyof typeof VCardPropertyType];
