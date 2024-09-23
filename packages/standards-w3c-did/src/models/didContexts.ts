// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The contexts for DIDs.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DidContexts = {
	/**
	 * The context root for DID VC v1.
	 */
	ContextV1: "https://www.w3.org/2018/credentials/v1",

	/**
	 * The context root for DID VC v2.
	 */
	ContextV2: "https://www.w3.org/ns/credentials/v2"
} as const;

/**
 * The contexts for DIDs.
 */
export type DidContexts = (typeof DidContexts)[keyof typeof DidContexts];
