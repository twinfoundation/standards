// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Common vCard property types used in ODRL.
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
	Individual: "vcard:Individual"
} as const;

/**
 * Common vCard property types used in ODRL.
 */
export type VCardPropertyType = (typeof VCardPropertyType)[keyof typeof VCardPropertyType];
