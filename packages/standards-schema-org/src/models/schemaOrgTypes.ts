// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types of schema.org data.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SchemaOrgTypes = {
	/**
	 * Represents text storage.
	 */
	Text: "Text",

	/**
	 * Represents integer number values.
	 */
	Integer: "Integer",

	/**
	 * Represents floating point numbers.
	 */
	Float: "Float",

	/**
	 * Represents a boolean.
	 */
	Boolean: "Boolean",

	/**
	 * Represents a url.
	 */
	URL: "URL",

	/**
	 * Represents a date as an ISO format string.
	 */
	Date: "Date",

	/**
	 * Represents a date time as an ISO format string.
	 */
	DateTime: "DateTime",

	/**
	 * Represents a time as an ISO format string.
	 */
	Time: "Time",

	/**
	 * Represents a url which points to an image.
	 */
	Image: "image",

	/**
	 * Represents a location.
	 */
	GeoCoordinates: "GeoCoordinates",

	/**
	 * Represents a structured value.
	 */
	StructuredValue: "StructuredValue",

	/**
	 * Represents an item list.
	 */
	ItemList: "ItemList",

	/**
	 * Represents an item list element.
	 */
	ItemListElement: "itemListElement",

	/**
	 * Represents a next item (can be used as a cursor).
	 */
	NextItem: "nextItem"
} as const;

/**
 * The types of schema.org data.
 */
export type SchemaOrgTypes = (typeof SchemaOrgTypes)[keyof typeof SchemaOrgTypes];
