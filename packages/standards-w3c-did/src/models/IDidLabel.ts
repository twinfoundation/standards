// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Interface describing a DID Label.
 */
export interface IDidLabel {
	/**
	 * The value for the label.
	 */
	"@value": string;

	/**
	 * The language for the label.
	 */
	"@language": string;

	/**
	 * The direction of the label.
	 */
	"@direction"?: string;
}
