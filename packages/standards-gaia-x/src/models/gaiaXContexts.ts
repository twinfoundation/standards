// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The LD Contexts concerning Gaia-X.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const GaiaXContexts = {
	/**
	 * The Gaia-X LD Context
	 */
	ContextRoot: "https://w3id.org/gaia-x/development"
} as const;

/**
 * The LD Contexts concerning Gaia-X.
 */
export type GaiaXContexts = (typeof GaiaXContexts)[keyof typeof GaiaXContexts];
