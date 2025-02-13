// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * A character string used to represent a transport mode.
 * https://vocabulary.uncefact.org/TransportModeCodeList
 * https://github.com/uncefact/vocabulary-outputs/blob/main/_data/transportmodecodelist.json
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TransportModeCodes = {
	/**
	 * 0 Transport mode not specified.
	 */
	0: "unece:TransportModeCodeList#0",

	/**
	 * 1 Maritime transport.
	 */
	1: "unece:TransportModeCodeList#1",

	/**
	 * 2 Rail transport.
	 */
	2: "unece:TransportModeCodeList#2",

	/**
	 * 3 Road transport.
	 */
	3: "unece:TransportModeCodeList#3",

	/**
	 * 4 Air transport.
	 */
	4: "unece:TransportModeCodeList#4",

	/**
	 * 5 Mail.
	 */
	5: "unece:TransportModeCodeList#5",

	/**
	 * 6 Multimodal transport.
	 */
	6: "unece:TransportModeCodeList#6",

	/**
	 * 7 Fixed transport installations.
	 */
	7: "unece:TransportModeCodeList#7",

	/**
	 * 8 Inland water transport.
	 */
	8: "unece:TransportModeCodeList#8",

	/**
	 * 9 Transport mode not applicable.
	 */
	9: "unece:TransportModeCodeList#9"
};

/**
 * A character string used to represent a transport mode.
 * https://vocabulary.uncefact.org/TransportModeCodeList
 * https://github.com/uncefact/vocabulary-outputs/blob/main/_data/transportmodecodelist.json
 */
export type TransportModeCodes = (typeof TransportModeCodes)[keyof typeof TransportModeCodes];
