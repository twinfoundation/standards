// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { VCardPropertyType } from "./types/vcardTypes";

/**
 * Interface for VCard properties in ODRL Parties.
 * Allows any VCard property type to be used as a key with a string value.
 */
export type IVCardProperties = {
	[key in VCardPropertyType]?: string;
};
