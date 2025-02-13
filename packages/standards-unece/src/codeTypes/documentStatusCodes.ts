// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * A character string used to represent or replace a document status.
 * https://vocabulary.uncefact.org/DocumentStatusCodeList
 * https://github.com/uncefact/vocabulary-outputs/blob/main/_data/documentstatuscodelist.json
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DocumentStatusCodes = {
	/**
	 * 1 Accepted.
	 */
	1: "unece:DocumentStatusCodeList#1",

	/**
	 * 10 Document currently valid.
	 */
	10: "unece:DocumentStatusCodeList#10",

	/**
	 * 11 Document not available.
	 */
	11: "unece:DocumentStatusCodeList#11",

	/**
	 * 12 Document exhausted by declaration and attached.
	 */
	12: "unece:DocumentStatusCodeList#12",

	/**
	 * 13 Document not exhausted by declaration and attached.
	 */
	13: "unece:DocumentStatusCodeList#13",

	/**
	 * 14 Document exhausted by declaration and previously lodged.
	 */
	14: "unece:DocumentStatusCodeList#14",

	/**
	 * 15 Document not exhausted by declaration and previously lodged.
	 */
	15: "unece:DocumentStatusCodeList#15",

	/**
	 * 16 Document not attached.
	 */
	16: "unece:DocumentStatusCodeList#16",

	/**
	 * 17 Document with the goods.
	 */
	17: "unece:DocumentStatusCodeList#17",

	/**
	 * 18 Document attached, to be returned after endorsement.
	 */
	18: "unece:DocumentStatusCodeList#18",

	/**
	 * 19 Document applied for.
	 */
	19: "unece:DocumentStatusCodeList#19",

	/**
	 * 2 Accompanying goods.
	 */
	2: "unece:DocumentStatusCodeList#2",

	/**
	 * 20 Received for shipment.
	 */
	20: "unece:DocumentStatusCodeList#20",

	/**
	 * 21 Shipped on board.
	 */
	21: "unece:DocumentStatusCodeList#21",

	/**
	 * 22 Status 0.
	 */
	22: "unece:DocumentStatusCodeList#22",

	/**
	 * 23 Status 1.
	 */
	23: "unece:DocumentStatusCodeList#23",

	/**
	 * 24 Status 2.
	 */
	24: "unece:DocumentStatusCodeList#24",

	/**
	 * 25 Message under development.
	 */
	25: "unece:DocumentStatusCodeList#25",

	/**
	 * 26 Document not freighted.
	 */
	26: "unece:DocumentStatusCodeList#26",

	/**
	 * 27 Document freighted.
	 */
	27: "unece:DocumentStatusCodeList#27",

	/**
	 * 28 Archived.
	 */
	28: "unece:DocumentStatusCodeList#28",

	/**
	 * 29 Provisional.
	 */
	29: "unece:DocumentStatusCodeList#29",

	/**
	 * 3 Conditionally accepted.
	 */
	3: "unece:DocumentStatusCodeList#3",

	/**
	 * 30 Documents enclosed in the first transmission.
	 */
	30: "unece:DocumentStatusCodeList#30",

	/**
	 * 31 Documents enclosed in the second transmission.
	 */
	31: "unece:DocumentStatusCodeList#31",

	/**
	 * 32 Document not required, waiver issued.
	 */
	32: "unece:DocumentStatusCodeList#32",

	/**
	 * 33 Already on file with receiver of this message.
	 */
	33: "unece:DocumentStatusCodeList#33",

	/**
	 * 34 Retained by sender of this message, or by sender's agent or representative.
	 */
	34: "unece:DocumentStatusCodeList#34",

	/**
	 * 35 Document incomplete.
	 */
	35: "unece:DocumentStatusCodeList#35",

	/**
	 * 36 Document previously submitted.
	 */
	36: "unece:DocumentStatusCodeList#36",

	/**
	 * 37 Document complete.
	 */
	37: "unece:DocumentStatusCodeList#37",

	/**
	 * 38 Final.
	 */
	38: "unece:DocumentStatusCodeList#38",

	/**
	 * 39 On hold.
	 */
	39: "unece:DocumentStatusCodeList#39",

	/**
	 * 4 To arrive by separate EDI message.
	 */
	4: "unece:DocumentStatusCodeList#4",

	/**
	 * 40 Validity suspended.
	 */
	40: "unece:DocumentStatusCodeList#40",

	/**
	 * 41 Validity revoked.
	 */
	41: "unece:DocumentStatusCodeList#41",

	/**
	 * 42 In error.
	 */
	42: "unece:DocumentStatusCodeList#42",

	/**
	 * 43 Received.
	 */
	43: "unece:DocumentStatusCodeList#43",

	/**
	 * 44 Accepted with warnings.
	 */
	44: "unece:DocumentStatusCodeList#44",

	/**
	 * 5 Information only.
	 */
	5: "unece:DocumentStatusCodeList#5",

	/**
	 * 6 To arrive by manual means.
	 */
	6: "unece:DocumentStatusCodeList#6",

	/**
	 * 7 To be raised and sent.
	 */
	7: "unece:DocumentStatusCodeList#7",

	/**
	 * 8 Rejected.
	 */
	8: "unece:DocumentStatusCodeList#8",

	/**
	 * 9 To be printed.
	 */
	9: "unece:DocumentStatusCodeList#9"
};

/**
 * A character string used to represent or replace a document status.
 * https://vocabulary.uncefact.org/DocumentStatusCodeList
 * https://github.com/uncefact/vocabulary-outputs/blob/main/_data/documentstatuscodelist.json
 */
export type DocumentStatusCodes = (typeof DocumentStatusCodes)[keyof typeof DocumentStatusCodes];
