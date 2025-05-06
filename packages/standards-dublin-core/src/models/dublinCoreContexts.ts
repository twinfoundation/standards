// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The contexts for Dublin Core.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DublinCoreContexts = {
	/**
	 * The LD context for Dublin Core Terms vocabulary.
	 * @see https://www.dublincore.org/specifications/dublin-core/dcmi-terms/
	 */
	ContextTerms: "http://purl.org/dc/terms/",

	/**
	 * The LD context for Dublin Core DCMI Types vocabulary.
	 * @see https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#section-7
	 */
	ContextDcmiType: "http://purl.org/dc/dcmitype/",

	/**
	 * Redirection URL for terms
	 */
	ContextTermsRedirect: "https://schema.twindev.org/dublin-core/terms.jsonld",

	/**
	 * Redirection URLs
	 */
	ContextDcmiTypeRedirect: "https://schema.twindev.org/dublin-core/dcmitype.jsonld"
} as const;

/**
 * The contexts for Dublin Core.
 */
export type DublinCoreContexts = (typeof DublinCoreContexts)[keyof typeof DublinCoreContexts];
