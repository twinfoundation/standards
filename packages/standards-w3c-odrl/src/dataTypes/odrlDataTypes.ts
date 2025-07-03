// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import type { IJsonSchema } from "@twin.org/data-core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import { OdrlContexts } from "../models/odrlContexts";
import { OdrlTypes } from "../models/types/odrlTypes";
import OdrlActionSchema from "../schemas/OdrlAction.json";
import OdrlAgreementSchema from "../schemas/OdrlAgreement.json";
import OdrlAssetSchema from "../schemas/OdrlAsset.json";
import OdrlAssetCollectionSchema from "../schemas/OdrlAssetCollection.json";
import OdrlConstraintSchema from "../schemas/OdrlConstraint.json";
import OdrlContextTypeSchema from "../schemas/OdrlContextType.json";
import OdrlDutySchema from "../schemas/OdrlDuty.json";
import OdrlLogicalConstraintSchema from "../schemas/OdrlLogicalConstraint.json";
import OdrlOfferSchema from "../schemas/OdrlOffer.json";
import OdrlPartySchema from "../schemas/OdrlParty.json";
import OdrlPartyCollectionSchema from "../schemas/OdrlPartyCollection.json";
import OdrlPermissionSchema from "../schemas/OdrlPermission.json";
import OdrlPolicySchema from "../schemas/OdrlPolicy.json";
import OdrlPolicyMetadataSchema from "../schemas/OdrlPolicyMetadata.json";
import OdrlProhibitionSchema from "../schemas/OdrlProhibition.json";
import OdrlRuleSchema from "../schemas/OdrlRule.json";
import OdrlSetSchema from "../schemas/OdrlSet.json";

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
			jsonSchema: async () => OdrlPolicySchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Asset}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Asset,
			jsonSchema: async () => OdrlAssetSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(
			`${OdrlContexts.ContextRoot}${OdrlTypes.AssetCollection}`,
			() => ({
				context: OdrlContexts.ContextRoot,
				type: OdrlTypes.AssetCollection,
				jsonSchema: async () => OdrlAssetCollectionSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Party}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Party,
			jsonSchema: async () => OdrlPartySchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(
			`${OdrlContexts.ContextRoot}${OdrlTypes.PartyCollection}`,
			() => ({
				context: OdrlContexts.ContextRoot,
				type: OdrlTypes.PartyCollection,
				jsonSchema: async () => OdrlPartyCollectionSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Action}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Action,
			jsonSchema: async () => OdrlActionSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Permission}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Permission,
			jsonSchema: async () => OdrlPermissionSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Prohibition}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Prohibition,
			jsonSchema: async () => OdrlProhibitionSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Duty}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Duty,
			jsonSchema: async () => OdrlDutySchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Constraint}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Constraint,
			jsonSchema: async () => OdrlConstraintSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(
			`${OdrlContexts.ContextRoot}${OdrlTypes.LogicalConstraint}`,
			() => ({
				context: OdrlContexts.ContextRoot,
				type: OdrlTypes.LogicalConstraint,
				jsonSchema: async () => OdrlLogicalConstraintSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${OdrlContexts.ContextRoot}${OdrlTypes.PolicyMetadata}`,
			() => ({
				context: OdrlContexts.ContextRoot,
				type: OdrlTypes.PolicyMetadata,
				jsonSchema: async () => OdrlPolicyMetadataSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Set}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Set,
			jsonSchema: async () => OdrlSetSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Offer}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Offer,
			jsonSchema: async () => OdrlOfferSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Agreement}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Agreement,
			jsonSchema: async () => OdrlAgreementSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.Rule}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Rule,
			jsonSchema: async () => OdrlRuleSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.ContextRoot}${OdrlTypes.ContextType}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.ContextType,
			jsonSchema: async () => OdrlContextTypeSchema as IJsonSchema
		}));
	}
}
