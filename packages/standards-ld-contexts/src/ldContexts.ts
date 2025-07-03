// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { GeneralError, Is } from "@twin.org/core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import dcmitype from "./ldContexts/dublin-core-dcmitype.json";
import dcTerms from "./ldContexts/dublin-core-terms.json";
import federatedCatalogueTerms from "./ldContexts/federated-catalogue-terms.json";
import gaiaXDevelopment from "./ldContexts/gaia-x-development.json";
import odrl from "./ldContexts/odrl.json";
import schemaOrg from "./ldContexts/schema.org.json";
import unCefact from "./ldContexts/un-cefact-vocab.json";
import vc from "./ldContexts/vc-data-model-v2.json";
import jws from "./ldContexts/w3id-jws-2020-v1.json";

/**
 * Map of all the ld contexts by their URL.
 */
export const LD_CONTEXTS: { [id: string]: unknown } = {
	// schema.org
	"https://schema.org": schemaOrg,
	"http://schema.org": schemaOrg,
	"https://schema.org/docs/jsonldcontext.jsonld": schemaOrg,

	// Gaia-X
	"https://w3id.org/gaia-x/development": gaiaXDevelopment,
	"https://w3id.org/gaia-x/development#": gaiaXDevelopment,

	// ODRL
	"http://www.w3.org/ns/odrl.jsonld": odrl,

	// W3C Credentials
	"https://www.w3.org/ns/credentials/v2": vc,
	"https://w3id.org/security/suites/jws-2020/v1": jws,

	// UN/CEFACT
	"https://vocabulary.uncefact.org": unCefact,

	// Dublin Core
	"http://purl.org/dc/terms/": dcTerms,
	"http://purl.org/dc/dcmitype/": dcmitype,
	"https://schema.twindev.org/dublin-core/terms.jsonld": dcTerms,
	"https://schema.twindev.org/dublin-core/dcmitype.jsonld": dcmitype,

	// Federated Catalogue
	"https://schema.twindev.org/federated-catalogue/types.jsonld": federatedCatalogueTerms
};

/**
 * Add all the contexts to the document cache.
 */
export async function addAllContextsToDocumentCache(): Promise<void> {
	for (const url in LD_CONTEXTS) {
		await JsonLdProcessor.documentCacheAdd(url, LD_CONTEXTS[url]);
	}
}

/**
 * Add a context to the document cache.
 * @param url The URL of the context to add to the cache.
 */
export async function addContextToDocumentCache(url: string): Promise<void> {
	if (Is.empty(LD_CONTEXTS[url])) {
		throw new GeneralError("ldContext", "missing", { url });
	}
	await JsonLdProcessor.documentCacheAdd(url, LD_CONTEXTS[url]);
}
