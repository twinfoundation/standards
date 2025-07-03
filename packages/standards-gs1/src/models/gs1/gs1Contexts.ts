// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The contexts of GS1.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const GS1Contexts = {
	/**
	 * The context root for the GS1 types.
	 */
	ContextRoot: "https://gs1.org/voc/"
} as const;

/**
 * The contexts of GS1.
 */
export type GS1Contexts = (typeof GS1Contexts)[keyof typeof GS1Contexts];
