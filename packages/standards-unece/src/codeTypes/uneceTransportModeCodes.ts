// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* eslint-disable max-len */

/* This file is auto-generated with the importJson script, do not edit manually. */

/**
 * A character string used to represent a transport mode.
 * https://vocabulary.uncefact.org/TransportModeCodeList
 * https://github.com/uncefact/vocabulary-outputs/blob/main/_data/transportmodecodelist.json
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceTransportModeCodes = {
	/**
	 * Transport mode not specified: 0.
	 */
	TransportModeNotSpecified: "unece:TransportModeCodeList#0",

	/**
	 * Maritime transport: 1.
	 */
	MaritimeTransport: "unece:TransportModeCodeList#1",

	/**
	 * Rail transport: 2.
	 */
	RailTransport: "unece:TransportModeCodeList#2",

	/**
	 * Road transport: 3.
	 */
	RoadTransport: "unece:TransportModeCodeList#3",

	/**
	 * Air transport: 4.
	 */
	AirTransport: "unece:TransportModeCodeList#4",

	/**
	 * Mail: 5.
	 */
	Mail: "unece:TransportModeCodeList#5",

	/**
	 * Multimodal transport: 6.
	 */
	MultimodalTransport: "unece:TransportModeCodeList#6",

	/**
	 * Fixed transport installations: 7.
	 */
	FixedTransportInstallations: "unece:TransportModeCodeList#7",

	/**
	 * Inland water transport: 8.
	 */
	InlandWaterTransport: "unece:TransportModeCodeList#8",

	/**
	 * Transport mode not applicable: 9.
	 */
	TransportModeNotApplicable: "unece:TransportModeCodeList#9"
};

/**
 * A character string used to represent a transport mode.
 * https://vocabulary.uncefact.org/TransportModeCodeList
 * https://github.com/uncefact/vocabulary-outputs/blob/main/_data/transportmodecodelist.json
 */
export type UneceTransportModeCodes = (typeof UneceTransportModeCodes)[keyof typeof UneceTransportModeCodes];
