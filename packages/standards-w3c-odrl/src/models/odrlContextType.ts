// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { IJsonLdContextDefinitionElement } from "@twin.org/data-json-ld";
import type { OdrlContexts } from "./odrlContexts";

/**
 * The ODRL JSON-LD context type.
 */
export type OdrlContextType =
	| typeof OdrlContexts.Context
	| [typeof OdrlContexts.Context, ...IJsonLdContextDefinitionElement[]]
	| [
			...IJsonLdContextDefinitionElement[],
			typeof OdrlContexts.Context,
			IJsonLdContextDefinitionElement
	  ]
	| [
			IJsonLdContextDefinitionElement,
			typeof OdrlContexts.Context,
			...IJsonLdContextDefinitionElement[]
	  ];
