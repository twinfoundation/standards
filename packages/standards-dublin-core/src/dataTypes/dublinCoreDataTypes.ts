// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { JsonLdProcessor } from "@twin.org/data-json-ld";
import { DublinCoreContexts } from "../models/dublinCoreContexts";

/**
 * Handle all the data types for Dublin Core.
 */
export class DublinCoreDataTypes {
	/**
	 * Register the JSON-LD Redirects.
	 */
	public static registerRedirects(): void {
		JsonLdProcessor.addRedirect(
			/https?:\/\/purl.org\/dc\/terms\/?/,
			DublinCoreContexts.ContextTermsRedirect
		);
		JsonLdProcessor.addRedirect(
			/https?:\/\/purl.org\/dc\/dcmitype\/?/,
			DublinCoreContexts.ContextDcmiTypeRedirect
		);
	}
}
