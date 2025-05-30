// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Validation } from "@twin.org/core";
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import { OdrlContexts } from "../models/odrlContexts";
import { OdrlTypes } from "../models/types/odrlTypes";

/**
 * Handle all the data types for ODRL.
 */
export class OdrlDataTypes {
	/**
	 * Register the JSON-LD Redirects.
	 */
	public static registerRedirects(): void {
		JsonLdProcessor.addRedirect(
			/https?:\/\/www\.w3\.org\/ns\/odrl\/?/,
			"https://www.w3.org/ns/odrl.jsonld"
		);
	}

	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Policy}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Policy,
			defaultValue: {},
			jsonSchema: async () => ({
				type: "object"
			}),
			validate: async (propertyName, value, failures, container) =>
				Validation.object(propertyName, value, failures)
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Asset}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Asset,
			defaultValue: {},
			jsonSchema: async () => ({
				type: "object"
			}),
			validate: async (propertyName, value, failures, container) =>
				Validation.object(propertyName, value, failures)
		}));

		DataTypeHandlerFactory.register(
			`${OdrlContexts.ContextRoot}${OdrlTypes.AssetCollection}`,
			() => ({
				context: OdrlContexts.ContextRoot,
				type: OdrlTypes.AssetCollection,
				defaultValue: {},
				jsonSchema: async () => ({
					type: "object"
				}),
				validate: async (propertyName, value, failures, container) =>
					Validation.object(propertyName, value, failures)
			})
		);

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Party}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Party,
			defaultValue: {},
			jsonSchema: async () => ({
				type: "object"
			}),
			validate: async (propertyName, value, failures, container) =>
				Validation.object(propertyName, value, failures)
		}));

		DataTypeHandlerFactory.register(
			`${OdrlContexts.ContextRoot}${OdrlTypes.PartyCollection}`,
			() => ({
				context: OdrlContexts.ContextRoot,
				type: OdrlTypes.PartyCollection,
				defaultValue: {},
				jsonSchema: async () => ({
					type: "object"
				}),
				validate: async (propertyName, value, failures, container) =>
					Validation.object(propertyName, value, failures)
			})
		);

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Action}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Action,
			defaultValue: {},
			jsonSchema: async () => ({
				type: "object"
			}),
			validate: async (propertyName, value, failures, container) =>
				Validation.object(propertyName, value, failures)
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Permission}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Permission,
			defaultValue: {},
			jsonSchema: async () => ({
				type: "object"
			}),
			validate: async (propertyName, value, failures, container) =>
				Validation.object(propertyName, value, failures)
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Prohibition}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Prohibition,
			defaultValue: {},
			jsonSchema: async () => ({
				type: "object"
			}),
			validate: async (propertyName, value, failures, container) =>
				Validation.object(propertyName, value, failures)
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Duty}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Duty,
			defaultValue: {},
			jsonSchema: async () => ({
				type: "object"
			}),
			validate: async (propertyName, value, failures, container) =>
				Validation.object(propertyName, value, failures)
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Constraint}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Constraint,
			defaultValue: {},
			jsonSchema: async () => ({
				type: "object"
			}),
			validate: async (propertyName, value, failures, container) =>
				Validation.object(propertyName, value, failures)
		}));

		DataTypeHandlerFactory.register(
			`${OdrlContexts.ContextRoot}${OdrlTypes.LogicalConstraint}`,
			() => ({
				context: OdrlContexts.ContextRoot,
				type: OdrlTypes.LogicalConstraint,
				defaultValue: {},
				jsonSchema: async () => ({
					type: "object"
				}),
				validate: async (propertyName, value, failures, container) =>
					Validation.object(propertyName, value, failures)
			})
		);

		DataTypeHandlerFactory.register(
			`${OdrlContexts.ContextRoot}${OdrlTypes.PolicyMetadata}`,
			() => ({
				context: OdrlContexts.ContextRoot,
				type: OdrlTypes.PolicyMetadata,
				defaultValue: {},
				jsonSchema: async () => ({
					type: "object"
				}),
				validate: async (propertyName, value, failures, container) =>
					Validation.object(propertyName, value, failures)
			})
		);

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Set}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Set,
			defaultValue: {},
			jsonSchema: async () => ({
				type: "object"
			}),
			validate: async (propertyName, value, failures, container) =>
				Validation.object(propertyName, value, failures)
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Offer}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Offer,
			defaultValue: {},
			jsonSchema: async () => ({
				type: "object"
			}),
			validate: async (propertyName, value, failures, container) =>
				Validation.object(propertyName, value, failures)
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Agreement}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Agreement,
			defaultValue: {},
			jsonSchema: async () => ({
				type: "object"
			}),
			validate: async (propertyName, value, failures, container) =>
				Validation.object(propertyName, value, failures)
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Rule}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Rule,
			defaultValue: {},
			jsonSchema: async () => ({
				type: "object"
			}),
			validate: async (propertyName, value, failures, container) =>
				Validation.object(propertyName, value, failures)
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Contexts}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Contexts,
			defaultValue: {},
			jsonSchema: async () => ({
				type: "object"
			}),
			validate: async (propertyName, value, failures, container) =>
				Validation.object(propertyName, value, failures)
		}));
	}
}
