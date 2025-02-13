// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * A character string used to represent a responsible government agency.
 * https://vocabulary.uncefact.org/ResponsibleGovernmentAgencyCodeList
 * https://github.com/uncefact/vocabulary-outputs/blob/main/_data/responsiblegovernmentagencycodelist.json
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ResponsibleGovernmentAgencyCodes = {
	/**
	 * 1 Agriculture.
	 */
	1: "unece:ResponsibleGovernmentAgencyCodeList#1",

	/**
	 * 10 Live animals.
	 */
	10: "unece:ResponsibleGovernmentAgencyCodeList#10",

	/**
	 * 11 Port authority.
	 */
	11: "unece:ResponsibleGovernmentAgencyCodeList#11",

	/**
	 * 12 Public health.
	 */
	12: "unece:ResponsibleGovernmentAgencyCodeList#12",

	/**
	 * 13 Transportation.
	 */
	13: "unece:ResponsibleGovernmentAgencyCodeList#13",

	/**
	 * 14 Port state control.
	 */
	14: "unece:ResponsibleGovernmentAgencyCodeList#14",

	/**
	 * 15 Fisheries.
	 */
	15: "unece:ResponsibleGovernmentAgencyCodeList#15",

	/**
	 * 16 Mineral resources.
	 */
	16: "unece:ResponsibleGovernmentAgencyCodeList#16",

	/**
	 * 17 Environment.
	 */
	17: "unece:ResponsibleGovernmentAgencyCodeList#17",

	/**
	 * 18 Nuclear safety.
	 */
	18: "unece:ResponsibleGovernmentAgencyCodeList#18",

	/**
	 * 19 Natural Resources.
	 */
	19: "unece:ResponsibleGovernmentAgencyCodeList#19",

	/**
	 * 2 Ammunition.
	 */
	2: "unece:ResponsibleGovernmentAgencyCodeList#2",

	/**
	 * 3 Commerce.
	 */
	3: "unece:ResponsibleGovernmentAgencyCodeList#3",

	/**
	 * 4 Coastguard.
	 */
	4: "unece:ResponsibleGovernmentAgencyCodeList#4",

	/**
	 * 5 Customs.
	 */
	5: "unece:ResponsibleGovernmentAgencyCodeList#5",

	/**
	 * 6 Food and drug.
	 */
	6: "unece:ResponsibleGovernmentAgencyCodeList#6",

	/**
	 * 7 Health certificate.
	 */
	7: "unece:ResponsibleGovernmentAgencyCodeList#7",

	/**
	 * 8 Harbour police.
	 */
	8: "unece:ResponsibleGovernmentAgencyCodeList#8",

	/**
	 * 9 Immigration.
	 */
	9: "unece:ResponsibleGovernmentAgencyCodeList#9"
};

/**
 * A character string used to represent a responsible government agency.
 * https://vocabulary.uncefact.org/ResponsibleGovernmentAgencyCodeList
 * https://github.com/uncefact/vocabulary-outputs/blob/main/_data/responsiblegovernmentagencycodelist.json
 */
export type ResponsibleGovernmentAgencyCodes = (typeof ResponsibleGovernmentAgencyCodes)[keyof typeof ResponsibleGovernmentAgencyCodes];
