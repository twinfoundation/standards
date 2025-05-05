// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The contexts for Dublin Core.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DublinCoreContexts = {
	/**
	 * The context root for Dublin Core Terms.
	 * @see https://www.dublincore.org/specifications/dublin-core/dcmi-terms/
	 */
	ContextTerms: "http://purl.org/dc/terms/",
	/**
	 * The context root for Dublin Core Metadata types.
	 * @see https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#section-7
	 */
	ContextTypes: "http://purl.org/dc/dcmitype/",
	/**
	 * Redirection URLs
	 */
	ContextTermsRedirect: "https://schema.twindev.org/dublin-core/types.jsonld",
	ContextTypesRedirect: "https://schema.twindev.org/dublin-core/types.jsonld"
} as const;

/**
 * The contexts for Dublin Core.
 */
export type DublinCoreContexts = (typeof DublinCoreContexts)[keyof typeof DublinCoreContexts];
