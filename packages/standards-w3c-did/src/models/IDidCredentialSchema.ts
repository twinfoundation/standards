// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Interface describing a DID credential schema.
 */
export interface IDidCredentialSchema {
	/**
	 * The URI id.
	 */
	id: string;

	/**
	 * The credential schema type.
	 */
	type: string;
}
