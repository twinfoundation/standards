// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Url, Validation } from "@twin.org/core";
import { DataTypeHandlerFactory, type IJsonSchema } from "@twin.org/data-core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import { SchemaOrgContexts } from "../models/schemaOrgContexts";
import { SchemaOrgTypes } from "../models/schemaOrgTypes";
import GeoCoordinatesSchema from "../schemas/GeoCoordinates.json";
import { SchemaOrgValidation } from "../utils/schemaOrgValidation";

/**
 * Handle all the data types for schema.org.
 */
export class SchemaOrgDataTypes {
	/**
	 * Register the JSON-LD Redirects.
	 */
	public static registerRedirects(): void {
		JsonLdProcessor.addRedirect(
			/https?:\/\/schema.org\/?/,
			"https://schema.org/docs/jsonldcontext.jsonld"
		);
	}

	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		DataTypeHandlerFactory.register(
			`${SchemaOrgContexts.ContextRoot}${SchemaOrgTypes.Text}`,
			() => ({
				context: SchemaOrgContexts.ContextRoot,
				type: SchemaOrgTypes.Text,
				defaultValue: "",
				jsonSchema: async () => ({
					type: "string"
				}),
				validate: async (propertyName, value, failures, container) =>
					Validation.string(propertyName, value, failures)
			})
		);

		DataTypeHandlerFactory.register(
			`${SchemaOrgContexts.ContextRoot}${SchemaOrgTypes.Integer}`,
			() => ({
				context: SchemaOrgContexts.ContextRoot,
				type: SchemaOrgTypes.Integer,
				defaultValue: 0,
				jsonSchema: async () => ({
					type: "integer"
				}),
				validate: async (propertyName, value, failures, container) =>
					Validation.integer(propertyName, value, failures)
			})
		);

		DataTypeHandlerFactory.register(
			`${SchemaOrgContexts.ContextRoot}${SchemaOrgTypes.Float}`,
			() => ({
				context: SchemaOrgContexts.ContextRoot,
				type: SchemaOrgTypes.Float,
				defaultValue: 0,
				jsonSchema: async () => ({
					type: "number"
				}),
				validate: async (propertyName, value, failures, container) =>
					Validation.number(propertyName, value, failures)
			})
		);

		DataTypeHandlerFactory.register(
			`${SchemaOrgContexts.ContextRoot}${SchemaOrgTypes.Boolean}`,
			() => ({
				context: SchemaOrgContexts.ContextRoot,
				type: SchemaOrgTypes.Boolean,
				defaultValue: true,
				jsonSchema: async () => ({
					type: "boolean"
				}),
				validate: async (propertyName, value, failures, container) =>
					Validation.boolean(propertyName, value, failures)
			})
		);

		DataTypeHandlerFactory.register(
			`${SchemaOrgContexts.ContextRoot}${SchemaOrgTypes.URL}`,
			() => ({
				context: SchemaOrgContexts.ContextRoot,
				type: SchemaOrgTypes.URL,
				defaultValue: "",
				jsonSchema: async () => ({
					type: "string",
					format: "uri"
				}),
				validate: async (propertyName, value, failures, container) =>
					Url.validate(propertyName, value, failures)
			})
		);

		DataTypeHandlerFactory.register(
			`${SchemaOrgContexts.ContextRoot}${SchemaOrgTypes.Date}`,
			() => ({
				context: SchemaOrgContexts.ContextRoot,
				type: SchemaOrgTypes.Date,
				defaultValue: new Date(),
				jsonSchema: async () => ({
					type: "string",
					format: "date"
				}),
				validate: async (propertyName, value, failures, container) =>
					Validation.dateString(propertyName, value, failures)
			})
		);

		DataTypeHandlerFactory.register(
			`${SchemaOrgContexts.ContextRoot}${SchemaOrgTypes.DateTime}`,
			() => ({
				context: SchemaOrgContexts.ContextRoot,
				type: SchemaOrgTypes.DateTime,
				defaultValue: new Date(),
				jsonSchema: async () => ({
					type: "string",
					format: "date-time"
				}),
				validate: async (propertyName, value, failures, container) =>
					Validation.dateTimeString(propertyName, value, failures)
			})
		);

		DataTypeHandlerFactory.register(
			`${SchemaOrgContexts.ContextRoot}${SchemaOrgTypes.Time}`,
			() => ({
				context: SchemaOrgContexts.ContextRoot,
				type: SchemaOrgTypes.Time,
				defaultValue: new Date(),
				jsonSchema: async () => ({
					type: "string",
					format: "time"
				}),
				validate: async (propertyName, value, failures, container) =>
					Validation.timeString(propertyName, value, failures)
			})
		);

		DataTypeHandlerFactory.register(
			`${SchemaOrgContexts.ContextRoot}${SchemaOrgTypes.Image}`,
			() => ({
				context: SchemaOrgContexts.ContextRoot,
				type: SchemaOrgTypes.Image,
				defaultValue: "",
				jsonSchema: async () => ({
					type: "string",
					format: "uri"
				}),
				validate: async (propertyName, value, failures, container) =>
					Url.validate(propertyName, value, failures)
			})
		);

		DataTypeHandlerFactory.register(
			`${SchemaOrgContexts.ContextRoot}${SchemaOrgTypes.GeoCoordinates}`,
			() => ({
				context: SchemaOrgContexts.ContextRoot,
				type: SchemaOrgTypes.GeoCoordinates,
				defaultValue: { longitude: 0, latitude: 0 },
				jsonSchema: async () => GeoCoordinatesSchema as IJsonSchema,
				validate: async (propertyName, value, failures, container) =>
					SchemaOrgValidation.geoCoordinates(propertyName, value, failures)
			})
		);
	}
}
