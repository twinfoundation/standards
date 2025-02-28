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
	GaiaXLdContext: "https://w3id.org/gaia-x/development",

	/**
	 * The W3id security LD Context
	 */
	W3IdSecurityJwsLdContext: "https://w3id.org/security/suites/jws-2020/v1"
} as const;

/**
 * The LD Contexts concerning Gaia-X.
 */
export type GaiaXContexts = (typeof GaiaXContexts)[keyof typeof GaiaXContexts];
