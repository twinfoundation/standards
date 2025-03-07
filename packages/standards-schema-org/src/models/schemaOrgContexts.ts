// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The contexts of schema.org data.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SchemaOrgContexts = {
	/**
	 * Context Root.
	 */
	ContextRoot: "https://schema.org"
} as const;

/**
 * The contexts of schema.org data.
 */
export type SchemaOrgContexts = (typeof SchemaOrgContexts)[keyof typeof SchemaOrgContexts];
