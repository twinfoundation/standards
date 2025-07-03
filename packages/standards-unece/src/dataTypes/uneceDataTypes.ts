// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import { UneceContexts } from "../models/uneceContexts";
import { UneceTypes } from "../models/uneceTypes";

/**
 * Handle all the data types for UN/CEFACT.
 */
export class UneceDataTypes {
	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		DataTypeHandlerFactory.register(`${UneceContexts.ContextRoot}${UneceTypes.Document}`, () => ({
			context: UneceContexts.ContextRoot,
			type: UneceTypes.Document,
			defaultValue: {}
		}));

		DataTypeHandlerFactory.register(
			`${UneceContexts.ContextRoot}${UneceTypes.Consignment}`,
			() => ({
				context: UneceContexts.ContextRoot,
				type: UneceTypes.Consignment,
				defaultValue: {}
			})
		);
	}
}
