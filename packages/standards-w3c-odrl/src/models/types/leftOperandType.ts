// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for ODRL Data Types.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const LeftOperandType = {
	/**
	 * Absolute Position type.
	 */
	AbsolutePosition: "absolutePosition",

	/**
	 * Absolute Spatial Position type.
	 */
	AbsoluteSpatialPosition: "absoluteSpatialPosition",

	/**
	 * Absolute Temporal Position type.
	 */
	AbsoluteTemporalPosition: "absoluteTemporalPosition",

	/**
	 * Absolute Size type.
	 */
	AbsoluteSize: "absoluteSize",

	/**
	 * Count type.
	 */
	Count: "count",

	/**
	 * DateTime type.
	 */
	DateTime: "dateTime",

	/**
	 * Delay Period type.
	 */
	DelayPeriod: "delayPeriod",

	/**
	 * Delivery Channel type.
	 */
	DeliveryChannel: "deliveryChannel",

	/**
	 * Elapsed Time type.
	 */
	ElapsedTime: "elapsedTime",

	/**
	 * Event type.
	 */
	Event: "event",

	/**
	 * File Format type.
	 */
	FileFormat: "fileFormat",

	/**
	 * Industry type.
	 */
	Industry: "industry",

	/**
	 * Language type.
	 */
	Language: "language",

	/**
	 * Media type.
	 */
	Media: "media",

	/**
	 * Metered Time type.
	 */
	MeteredTime: "meteredTime",

	/**
	 * Pay Amount type.
	 */
	PayAmount: "payAmount",

	/**
	 * Percentage type.
	 */
	Percentage: "percentage",

	/**
	 * Product type.
	 */
	Product: "product",

	/**
	 * Purpose type.
	 */
	Purpose: "purpose",

	/**
	 * Recipient type.
	 */
	Recipient: "recipient",

	/**
	 * Relative Position type.
	 */
	RelativePosition: "relativePosition",

	/**
	 * Relative Spatial Position type.
	 */
	RelativeSpatialPosition: "relativeSpatialPosition",

	/**
	 * Relative Temporal Position type.
	 */
	RelativeTemporalPosition: "relativeTemporalPosition",

	/**
	 * Relative Size type.
	 */
	RelativeSize: "relativeSize",

	/**
	 * Resolution type.
	 */
	Resolution: "resolution",

	/**
	 * Spatial type.
	 */
	Spatial: "spatial",

	/**
	 * Spatial Coordinates type.
	 */
	SpatialCoordinates: "spatialCoordinates",

	/**
	 * System Device type.
	 */
	SystemDevice: "systemDevice",

	/**
	 * Time Interval type.
	 */
	TimeInterval: "timeInterval",

	/**
	 * Unit of Count type.
	 */
	UnitOfCount: "unitOfCount",

	/**
	 * Version type.
	 */
	Version: "version",

	/**
	 * Virtual Location type.
	 */
	VirtualLocation: "virtualLocation"
} as const;

/**
 * The types for ODRL Data Types.
 */
export type LeftOperandType = (typeof LeftOperandType)[keyof typeof LeftOperandType];
