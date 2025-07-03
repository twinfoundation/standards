// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types of UNECE contexts.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceContexts = {
	/**
	 * Context Root.
	 */
	ContextRoot: "https://vocabulary.uncefact.org/"
} as const;

/**
 * The types of UNECE contexts.
 */
export type UneceContexts = (typeof UneceContexts)[keyof typeof UneceContexts];
