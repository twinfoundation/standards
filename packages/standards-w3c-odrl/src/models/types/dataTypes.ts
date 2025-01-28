// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for ODRL Data Types.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DataType = {
	/**
	 * String type.
	 */
	String: "xsd:string",

	/**
	 * Boolean type.
	 */
	Boolean: "xsd:boolean",

	/**
	 * Integer type.
	 */
	Integer: "xsd:integer",

	/**
	 * Decimal type.
	 */
	Decimal: "xsd:decimal",

	/**
	 * Double type.
	 */
	Double: "xsd:double",

	/**
	 * Date type.
	 */
	Date: "xsd:date",

	/**
	 * DateTime type.
	 */
	DateTime: "xsd:dateTime"
} as const;

/**
 * The types for ODRL Data Types.
 */
export type DataType = (typeof DataType)[keyof typeof DataType];
