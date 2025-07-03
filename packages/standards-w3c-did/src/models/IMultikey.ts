// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinitionElement } from "@twin.org/data-json-ld";
import type { DidContexts } from "./didContexts";
import type { DidTypes } from "./didTypes";

/**
 * Interface describing a Multikey.
 * https://www.w3.org/TR/cid-1.0/
 */
export interface IMultikey {
	/**
	 * JSON-LD Context.
	 */
	"@context"?:
		| typeof DidContexts.ContextControllerIdentifiers
		| typeof DidContexts.ContextSecurityMultikey
		| [typeof DidContexts.ContextControllerIdentifiers, ...IJsonLdContextDefinitionElement[]]
		| [typeof DidContexts.ContextSecurityMultikey, ...IJsonLdContextDefinitionElement[]];

	/**
	 * The id of the entry.
	 */
	id?: string;

	/**
	 * The type of the entry.
	 */
	type: typeof DidTypes.Multikey;

	/**
	 * The controller for the entry.
	 */
	controller?: string;

	/**
	 * The public key for the entry.
	 */
	publicKeyMultibase: string;

	/**
	 * The secret key for the entry.
	 */
	secretKeyMultibase?: string;

	/**
	 * The date the entry expires.
	 */
	expires?: string;

	/**
	 * The date the entry was revoked.
	 */
	revoked?: string;
}
