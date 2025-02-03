// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The contexts for ODRL.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const OdrlContexts = {
	/**
	 * The context root for ODRL.
	 */
	Context: "https://www.w3.org/ns/odrl.jsonld",
	/**
	 * The context root for ODRL vocabulary.
	 */
	ContextVocabulary: "https://www.w3.org/ns/odrl/2/",
	/**
	 * The context root for Dublin Core Terms.
	 */
	ContextDcTerms: "https://purl.org/dc/terms/",

	/**
	 * The context root for RDF.
	 */
	ContextRdf: "https://www.w3.org/1999/02/22-rdf-syntax-ns#",

	/**
	 * The context root for XSD.
	 */
	ContextXsd: "https://www.w3.org/2001/XMLSchema#"
} as const;

/**
 * The contexts for ODRL.
 */
export type OdrlContexts = (typeof OdrlContexts)[keyof typeof OdrlContexts];
