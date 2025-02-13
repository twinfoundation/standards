// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * A character string used to represent a workflow status.
 * https://vocabulary.uncefact.org/WorkflowStatusCodeList
 * https://github.com/uncefact/vocabulary-outputs/blob/main/_data/workflowstatuscodelist.json
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const WorkflowStatusCodes = {
	/**
	 * 1 To be done.
	 */
	1: "unece:WorkflowStatusCodeList#1",

	/**
	 * 108 Instructed to start.
	 */
	108: "unece:WorkflowStatusCodeList#108",

	/**
	 * 109 Instructed to stop.
	 */
	109: "unece:WorkflowStatusCodeList#109",

	/**
	 * 111 Inactive.
	 */
	111: "unece:WorkflowStatusCodeList#111",

	/**
	 * 112 Active.
	 */
	112: "unece:WorkflowStatusCodeList#112",

	/**
	 * 121 Complete.
	 */
	121: "unece:WorkflowStatusCodeList#121",

	/**
	 * 17 Requested.
	 */
	17: "unece:WorkflowStatusCodeList#17",

	/**
	 * 2 Done.
	 */
	2: "unece:WorkflowStatusCodeList#2",

	/**
	 * 28 Transaction expected to be executed.
	 */
	28: "unece:WorkflowStatusCodeList#28",

	/**
	 * 3 Passed on.
	 */
	3: "unece:WorkflowStatusCodeList#3",

	/**
	 * 35 Started.
	 */
	35: "unece:WorkflowStatusCodeList#35",

	/**
	 * 36 Revised.
	 */
	36: "unece:WorkflowStatusCodeList#36",

	/**
	 * 38 Assigned.
	 */
	38: "unece:WorkflowStatusCodeList#38",

	/**
	 * 39 Approved.
	 */
	39: "unece:WorkflowStatusCodeList#39",

	/**
	 * 40 Withdrawn.
	 */
	40: "unece:WorkflowStatusCodeList#40",

	/**
	 * 41 Rejected.
	 */
	41: "unece:WorkflowStatusCodeList#41",

	/**
	 * 42 Approval pending.
	 */
	42: "unece:WorkflowStatusCodeList#42",

	/**
	 * 43 Postponed.
	 */
	43: "unece:WorkflowStatusCodeList#43",

	/**
	 * 44 Replaced.
	 */
	44: "unece:WorkflowStatusCodeList#44",

	/**
	 * 70 Issued.
	 */
	70: "unece:WorkflowStatusCodeList#70",

	/**
	 * 73 Confirmed.
	 */
	73: "unece:WorkflowStatusCodeList#73",

	/**
	 * 85 Updated.
	 */
	85: "unece:WorkflowStatusCodeList#85",

	/**
	 * 95 Unchanged.
	 */
	95: "unece:WorkflowStatusCodeList#95",

	/**
	 * 97 Pending.
	 */
	97: "unece:WorkflowStatusCodeList#97"
};

/**
 * A character string used to represent a workflow status.
 * https://vocabulary.uncefact.org/WorkflowStatusCodeList
 * https://github.com/uncefact/vocabulary-outputs/blob/main/_data/workflowstatuscodelist.json
 */
export type WorkflowStatusCodes = (typeof WorkflowStatusCodes)[keyof typeof WorkflowStatusCodes];
