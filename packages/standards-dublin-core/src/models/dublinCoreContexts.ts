// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The contexts for Dublin Core.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DublinCoreContexts = {
	/**
	 * The context root for Dublin Core Terms.
	 * @see http://purl.org/dc/terms/
	 */
	Context: "http://purl.org/dc/terms/"
} as const;

/**
 * The contexts for Dublin Core.
 */
export type DublinCoreContexts = (typeof DublinCoreContexts)[keyof typeof DublinCoreContexts];
