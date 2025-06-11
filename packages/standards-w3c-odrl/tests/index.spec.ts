// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHandlerFactory, type IJsonSchema, JsonSchemaHelper } from "@twin.org/data-core";
import { JsonLdDataTypes } from "@twin.org/data-json-ld";
import { DublinCoreContexts, DublinCorePropertyType } from "@twin.org/standards-dublin-core";
import { VCardContexts, VCardPropertyType } from "@twin.org/standards-w3c-vcard";
import { OdrlDataTypes } from "../src/dataTypes/odrlDataTypes";
import type { IOdrlAction } from "../src/models/IOdrlAction";
import type { IOdrlAsset } from "../src/models/IOdrlAsset";
import type { IOdrlAssetCollection } from "../src/models/IOdrlAssetCollection";
import type { IOdrlConstraint } from "../src/models/IOdrlConstraint";
import type { IOdrlDuty } from "../src/models/IOdrlDuty";
import type { IOdrlLogicalConstraint } from "../src/models/IOdrlLogicalConstraint";
import type { IOdrlParty } from "../src/models/IOdrlParty";
import type { IOdrlPartyCollection } from "../src/models/IOdrlPartyCollection";
import type { IOdrlPolicy } from "../src/models/IOdrlPolicy";
import { OdrlContexts } from "../src/models/odrlContexts";
import { ActionType } from "../src/models/types/actionType";
import { ConflictStrategyType } from "../src/models/types/conflictStrategyType";
import { LeftOperandType } from "../src/models/types/leftOperandType";
import { OdrlTypes } from "../src/models/types/odrlTypes";
import { OperatorType } from "../src/models/types/operatorType";
import { PolicyType } from "../src/models/types/policyType";
import { RightOperandType } from "../src/models/types/rightOperandType";
import { UriActionType } from "../src/models/types/uriActionType";

describe("ODRL Examples from Specification", () => {
	it("Example 1: Set Policy with use permission", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Set,
			uid: "http://example.com/policy:1010",
			permission: [
				{
					target: "http://example.com/asset:9898.movie",
					action: ActionType.Use
				}
			]
		};

		expect(policy["@type"]).toBe(PolicyType.Set);
		expect(policy.permission?.[0].action).toBe(ActionType.Use);
		expect(policy.permission?.[0].target).toBe("http://example.com/asset:9898.movie");
	});

	it("Example 2: Offer Policy with play permission and assigner", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Offer,
			uid: "http://example.com/policy:1011",
			profile: "http://example.com/odrl:profile:01",
			permission: [
				{
					target: "http://example.com/asset:9898.movie",
					assigner: "http://example.com/party:org:abc",
					action: ActionType.Play
				}
			]
		};

		expect(policy["@type"]).toBe(PolicyType.Offer);
		expect(policy.profile).toBe("http://example.com/odrl:profile:01");
		expect(policy.permission?.[0].action).toBe(ActionType.Play);
		expect(policy.permission?.[0].assigner).toBe("http://example.com/party:org:abc");
	});

	it("Example 3: Agreement Policy with play permission and both parties", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Agreement,
			uid: "http://example.com/policy:1012",
			profile: "http://example.com/odrl:profile:01",
			permission: [
				{
					target: "http://example.com/asset:9898.movie",
					assigner: "http://example.com/party:org:abc",
					assignee: "http://example.com/party:person:billie",
					action: ActionType.Play
				}
			]
		};

		expect(policy["@type"]).toBe(PolicyType.Agreement);
		expect(policy.profile).toBe("http://example.com/odrl:profile:01");

		const permission = policy.permission?.[0];
		expect(permission).toBeDefined();
		expect(permission?.action).toBe(ActionType.Play);
		expect(permission?.assigner).toBe("http://example.com/party:org:abc");
		expect(permission?.assignee).toBe("http://example.com/party:person:billie");
		expect(permission?.target).toBe("http://example.com/asset:9898.movie");
	});

	it("Example 4: Offer Policy with display permission and target Asset", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Offer,
			uid: "http://example.com/policy:3333",
			profile: "http://example.com/odrl:profile:02",
			permission: [
				{
					target: "http://example.com/asset:3333",
					action: ActionType.Display,
					assigner: "http://example.com/party:0001"
				}
			]
		};

		expect(policy["@type"]).toBe(PolicyType.Offer);
		expect(policy.profile).toBe("http://example.com/odrl:profile:02");
		expect(policy.permission?.[0]).toEqual({
			target: "http://example.com/asset:3333",
			action: ActionType.Display,
			assigner: "http://example.com/party:0001"
		});
	});

	it("Example 5: Policy with AssetCollection target", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Policy,
			uid: "http://example.com/policy:1011",
			profile: "http://example.com/odrl:profile:03",
			permission: [
				{
					target: {
						"@type": OdrlTypes.AssetCollection,
						uid: "http://example.com/archive1011"
					},
					action: ActionType.Index,
					summary: "http://example.com/x/database"
				}
			]
		};

		expect(policy["@type"]).toBe(PolicyType.Policy);
		expect(policy.profile).toBe("http://example.com/odrl:profile:03");

		const permission = policy.permission?.[0];
		expect(permission?.target).toEqual({
			"@type": OdrlTypes.AssetCollection,
			uid: "http://example.com/archive1011"
		});
		expect(permission?.action).toBe(ActionType.Index);
		expect(permission?.summary).toBe("http://example.com/x/database");
	});

	it("Example 6: Document with ODRL partOf reference", () => {
		const asset: IOdrlAsset = {
			"@type": "dc:Document",
			uid: "http://example.com/asset:111.doc",
			partOf: "http://example.com/archive1011"
		};

		expect(asset["@type"]).toBe("dc:Document");
		expect(asset.uid).toBe("http://example.com/asset:111.doc");
		expect(asset.partOf).toBe("http://example.com/archive1011");
	});

	it("Example 7: Asset with ODRL hasPolicy reference", () => {
		const asset: IOdrlAsset = {
			"@type": "dc:MovingImage",
			uid: "http://example.com/asset:9999.movie",
			hasPolicy: "http://example.com/policy:1010"
		};

		expect(asset["@type"]).toBe("dc:MovingImage");
		expect(asset.uid).toBe("http://example.com/asset:9999.movie");
		expect(asset.hasPolicy).toBe("http://example.com/policy:1010");
	});

	it("Example 8: Agreement Policy with assigner and assignee", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Agreement,
			uid: "http://example.com/policy:8888",
			profile: "http://example.com/odrl:profile:04",
			permission: [
				{
					target: "http://example.com/music/1999.mp3",
					assigner: "http://example.com/org/sony-music",
					assignee: "http://example.com/people/billie",
					action: ActionType.Play
				}
			]
		};

		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Agreement);
		expect(policy.uid).toBe("http://example.com/policy:8888");
		expect(policy.profile).toBe("http://example.com/odrl:profile:04");

		const permission = policy.permission?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/music/1999.mp3");
		expect(permission?.assigner).toBe("http://example.com/org/sony-music");
		expect(permission?.assignee).toBe("http://example.com/people/billie");
		expect(permission?.action).toBe(ActionType.Play);
	});

	it("Example 9: Agreement Policy with complex Party objects", () => {
		const policy: IOdrlPolicy = {
			"@context": [OdrlContexts.ContextRoot, { vcard: VCardContexts.Context }],
			"@type": PolicyType.Agreement,
			uid: "http://example.com/policy:777",
			profile: "http://example.com/odrl:profile:05",
			permission: [
				{
					target: "http://example.com/looking-glass.ebook",
					assigner: {
						"@type": [OdrlTypes.Party, `vcard:${VCardPropertyType.Organization}`],
						uid: "http://example.com/org/sony-books",
						[`vcard:${VCardPropertyType.FormattedName}`]: "Sony Books LCC",
						[`vcard:${VCardPropertyType.Email}`]: "sony-contact@example.com"
					},
					assignee: {
						"@type": [OdrlTypes.PartyCollection, `vcard:${VCardPropertyType.Group}`],
						uid: "http://example.com/team/A",
						[`vcard:${VCardPropertyType.FormattedName}`]: "Team A",
						[`vcard:${VCardPropertyType.Email}`]: "teamA@example.com"
					},
					action: ActionType.Use
				}
			]
		};

		expect(policy["@context"]).toEqual([
			OdrlContexts.ContextRoot,
			{ vcard: VCardContexts.Context }
		]);
		expect(policy["@type"]).toBe(PolicyType.Agreement);
		expect(policy.profile).toBe("http://example.com/odrl:profile:05");

		const permission = policy.permission?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/looking-glass.ebook");
		expect(permission?.action).toBe(ActionType.Use);

		// Test assigner Party
		const assigner = permission?.assigner as IOdrlParty;
		expect(assigner["@type"]).toEqual([OdrlTypes.Party, `vcard:${VCardPropertyType.Organization}`]);
		expect(assigner.uid).toBe("http://example.com/org/sony-books");
		expect(assigner[`vcard:${VCardPropertyType.FormattedName}`]).toBe("Sony Books LCC");
		expect(assigner[`vcard:${VCardPropertyType.Email}`]).toBe("sony-contact@example.com");

		// Test assignee PartyCollection
		const assignee = permission?.assignee as IOdrlParty;
		expect(assignee["@type"]).toEqual([
			OdrlTypes.PartyCollection,
			`vcard:${VCardPropertyType.Group}`
		]);
		expect(assignee.uid).toBe("http://example.com/team/A");
		expect(assignee[`vcard:${VCardPropertyType.FormattedName}`]).toBe("Team A");
		expect(assignee[`vcard:${VCardPropertyType.Email}`]).toBe("teamA@example.com");
	});

	it("Example 10: Party with partOf reference to PartyCollection", () => {
		const party: IOdrlParty = {
			"@type": `vcard:${VCardPropertyType.Individual}`,
			uid: "http://example.com/person/murphy",
			[`vcard:${VCardPropertyType.FormattedName}`]: "Murphy",
			[`vcard:${VCardPropertyType.Email}`]: "murphy@example.com",
			partOf: "http://example.com/team/A"
		};

		expect(party["@type"]).toBe(`vcard:${VCardPropertyType.Individual}`);
		expect(party.uid).toBe("http://example.com/person/murphy");
		expect(party[`vcard:${VCardPropertyType.FormattedName}`]).toBe("Murphy");
		expect(party[`vcard:${VCardPropertyType.Email}`]).toBe("murphy@example.com");
		expect(party.partOf).toBe("http://example.com/team/A");

		// Verify this party is part of the team from Example 9
		const teamAId = "http://example.com/team/A";
		expect(party.partOf).toBe(teamAId);
	});

	it("Example 11: Party with assigneeOf reference to Policy", () => {
		const party: IOdrlParty = {
			"@type": `vcard:${VCardPropertyType.Individual}`,
			uid: "http://example.com/person/billie",
			[`vcard:${VCardPropertyType.FormattedName}`]: "Billie",
			[`vcard:${VCardPropertyType.Email}`]: "billie@example.com",
			assigneeOf: "http://example.com/policy:1011"
		};

		expect(party["@type"]).toBe(`vcard:${VCardPropertyType.Individual}`);
		expect(party.uid).toBe("http://example.com/person/billie");
		expect(party[`vcard:${VCardPropertyType.FormattedName}`]).toBe("Billie");
		expect(party[`vcard:${VCardPropertyType.Email}`]).toBe("billie@example.com");
		expect(party.assigneeOf).toBe("http://example.com/policy:1011");
	});

	it("Example 12: Offer Policy with play action", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Offer,
			uid: "http://example.com/policy:1012",
			profile: "http://example.com/odrl:profile:06",
			permission: [
				{
					target: "http://example.com/music:1012",
					assigner: "http://example.com/org:abc",
					action: ActionType.Play
				}
			]
		};

		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Offer);
		expect(policy.uid).toBe("http://example.com/policy:1012");
		expect(policy.profile).toBe("http://example.com/odrl:profile:06");

		const permission = policy.permission?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/music:1012");
		expect(permission?.assigner).toBe("http://example.com/org:abc");
		expect(permission?.action).toBe(ActionType.Play);

		// Verify that play is included in use (this would be defined in the profile)
		expect(ActionType.Play).toBeDefined();
	});

	it("Example 13: Offer Policy with datetime constraint", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Offer,
			uid: "http://example.com/policy:6163",
			profile: "http://example.com/odrl:profile:10",
			permission: [
				{
					target: "http://example.com/document:1234",
					assigner: "http://example.com/org:616",
					action: ActionType.Distribute,
					constraint: [
						{
							leftOperand: LeftOperandType.DateTime,
							operator: OperatorType.Lt,
							rightOperand: {
								"@value": "2018-01-01",
								"@type": "xsd:date"
							}
						}
					]
				}
			]
		};

		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Offer);
		expect(policy.uid).toBe("http://example.com/policy:6163");
		expect(policy.profile).toBe("http://example.com/odrl:profile:10");

		const permission = policy.permission?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/document:1234");
		expect(permission?.assigner).toBe("http://example.com/org:616");
		expect(permission?.action).toBe(ActionType.Distribute);

		const constraint = permission?.constraint?.[0] as IOdrlConstraint;
		expect(constraint).toBeDefined();
		expect(constraint.leftOperand).toBe(LeftOperandType.DateTime);
		expect(constraint.operator).toBe(OperatorType.Lt);
		expect(constraint.rightOperand).toEqual({
			"@value": "2018-01-01",
			"@type": "xsd:date"
		});
	});

	it("Example 14: Offer Policy with action refinement", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Offer,
			uid: "http://example.com/policy:6161",
			profile: "http://example.com/odrl:profile:10",
			permission: [
				{
					target: "http://example.com/document:1234",
					assigner: "http://example.com/org:616",
					action: [
						{
							"rdf:value": { "@id": UriActionType.OdrlPrint },
							refinement: [
								{
									leftOperand: "resolution",
									operator: OperatorType.Lteq,
									rightOperand: {
										"@value": "1200",
										"@type": "xsd:integer"
									},
									unit: "http://dbpedia.org/resource/Dots_per_inch"
								}
							]
						}
					]
				}
			]
		};

		// Test the policy structure
		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Offer);
		expect(policy.uid).toBe("http://example.com/policy:6161");
		expect(policy.profile).toBe("http://example.com/odrl:profile:10");

		// Test the permission
		const permission = policy.permission?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/document:1234");
		expect(permission?.assigner).toBe("http://example.com/org:616");

		// Test the action array
		const actions = permission?.action as (ActionType | IOdrlAction)[];
		expect(Array.isArray(actions)).toBe(true);
		const action = actions[0] as IOdrlAction;
		expect(action["rdf:value"]).toEqual({ "@id": UriActionType.OdrlPrint });

		// Test the refinement
		const refinements = action.refinement as (IOdrlConstraint | IOdrlLogicalConstraint)[];
		expect(Array.isArray(refinements)).toBe(true);
		const refinement = refinements[0] as IOdrlConstraint;
		expect(refinement.leftOperand).toBe("resolution");
		expect(refinement.operator).toBe(OperatorType.Lteq);
		expect(refinement.rightOperand).toEqual({
			"@value": "1200",
			"@type": "xsd:integer"
		});
		expect(refinement.unit).toBe("http://dbpedia.org/resource/Dots_per_inch");
	});

	it("Example 15: Offer Policy with logical constraint (xone)", () => {
		// Define the two referenced constraints first
		const constraint1: IOdrlConstraint = {
			uid: "http://example.com/p:88/C1",
			leftOperand: LeftOperandType.Media,
			operator: OperatorType.Eq,
			rightOperand: {
				"@value": "online",
				"@type": "xsd:string"
			}
		};

		const constraint2: IOdrlConstraint = {
			uid: "http://example.com/p:88/C2",
			leftOperand: LeftOperandType.Media,
			operator: OperatorType.Eq,
			rightOperand: {
				"@value": "print",
				"@type": "xsd:string"
			}
		};

		// Main policy with logical constraint
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Offer,
			uid: "http://example.com/policy:88",
			profile: "http://example.com/odrl:profile:10",
			permission: [
				{
					target: "http://example.com/book/1999",
					assigner: "http://example.com/org/paisley-park",
					action: {
						"rdf:value": { "@id": UriActionType.OdrlReproduce },
						refinement: {
							xone: {
								"@list": [
									{ "@id": "http://example.com/p:88/C1" },
									{ "@id": "http://example.com/p:88/C2" }
								]
							}
						}
					}
				}
			]
		};

		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Offer);
		expect(policy.uid).toBe("http://example.com/policy:88");
		expect(policy.profile).toBe("http://example.com/odrl:profile:10");

		const permission = policy.permission?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/book/1999");
		expect(permission?.assigner).toBe("http://example.com/org/paisley-park");

		const action = permission?.action as IOdrlAction;
		expect(action["rdf:value"]).toEqual({ "@id": UriActionType.OdrlReproduce });

		const refinement = action.refinement as IOdrlLogicalConstraint;
		expect(refinement.xone).toBeDefined();
		expect(refinement.xone?.["@list"]).toHaveLength(2);
		expect(refinement.xone?.["@list"]).toEqual([
			{ "@id": "http://example.com/p:88/C1" },
			{ "@id": "http://example.com/p:88/C2" }
		]);

		// Test the referenced constraints
		expect(constraint1.leftOperand).toBe(LeftOperandType.Media);
		expect(constraint1.operator).toBe(OperatorType.Eq);
		expect(constraint1.rightOperand).toEqual({
			"@value": "online",
			"@type": "xsd:string"
		});

		expect(constraint2.leftOperand).toBe(LeftOperandType.Media);
		expect(constraint2.operator).toBe(OperatorType.Eq);
		expect(constraint2.rightOperand).toEqual({
			"@value": "print",
			"@type": "xsd:string"
		});
	});

	it("Example 16: Offer Policy with AssetCollection refinement", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Offer,
			uid: "http://example.com/policy:4444",
			profile: "http://example.com/odrl:profile:11",
			permission: [
				{
					assigner: "http://example.com/org88",
					target: {
						"@type": OdrlTypes.AssetCollection,
						source: "http://example.com/media-catalogue",
						refinement: [
							{
								leftOperand: "runningTime",
								operator: OperatorType.Lt,
								rightOperand: {
									"@value": "60",
									"@type": "xsd:integer"
								},
								unit: "http://qudt.org/vocab/unit/MinuteTime"
							}
						]
					} as IOdrlAssetCollection,
					action: ActionType.Play
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Offer);
		expect(policy.uid).toBe("http://example.com/policy:4444");
		expect(policy.profile).toBe("http://example.com/odrl:profile:11");

		// Test permission
		const permission = policy.permission?.[0];
		expect(permission).toBeDefined();
		expect(permission?.assigner).toBe("http://example.com/org88");
		expect(permission?.action).toBe(ActionType.Play);

		// Test target AssetCollection
		const target = permission?.target as IOdrlAssetCollection;
		expect(target["@type"]).toBe(OdrlTypes.AssetCollection);
		expect(target.source).toBe("http://example.com/media-catalogue");

		// Test refinement
		const refinement = target.refinement?.[0];
		expect(refinement).toBeDefined();
		expect(refinement?.leftOperand).toBe("runningTime");
		expect(refinement?.operator).toBe(OperatorType.Lt);
		expect(refinement?.rightOperand).toEqual({
			"@value": "60",
			"@type": "xsd:integer"
		});
		expect(refinement?.unit).toBe("http://qudt.org/vocab/unit/MinuteTime");
	});

	it("Example 17: Agreement Policy with PartyCollection refinement", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Agreement,
			uid: "http://example.com/policy:4444",
			profile: "http://example.com/odrl:profile:12",
			permission: [
				{
					target: "http://example.com/myPhotos:BdayParty",
					assigner: "http://example.com/user44",
					assignee: {
						"@type": OdrlTypes.PartyCollection,
						source: "http://example.com/user44/friends",
						refinement: [
							{
								leftOperand: "foaf:age",
								operator: OperatorType.Gt,
								rightOperand: {
									"@value": "17",
									"@type": "xsd:integer"
								}
							}
						]
					} as IOdrlPartyCollection,
					action: { "@id": "ex:view" }
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Agreement);
		expect(policy.uid).toBe("http://example.com/policy:4444");
		expect(policy.profile).toBe("http://example.com/odrl:profile:12");

		// Test permission
		const permission = policy.permission?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/myPhotos:BdayParty");
		expect(permission?.assigner).toBe("http://example.com/user44");

		// Test assignee PartyCollection
		const assignee = permission?.assignee as IOdrlPartyCollection;
		expect(assignee["@type"]).toBe(OdrlTypes.PartyCollection);
		expect(assignee.source).toBe("http://example.com/user44/friends");

		// Test refinement
		const refinement = assignee.refinement?.[0] as IOdrlConstraint;
		expect(refinement).toBeDefined();
		expect(refinement.leftOperand).toBe("foaf:age");
		expect(refinement.operator).toBe(OperatorType.Gt);
		expect(refinement.rightOperand).toEqual({
			"@value": "17",
			"@type": "xsd:integer"
		});

		// Test action
		expect(permission?.action).toEqual({ "@id": "ex:view" });
	});

	it("Example 18: Offer Policy with permission constraint", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Offer,
			uid: "http://example.com/policy:9090",
			profile: "http://example.com/odrl:profile:07",
			permission: [
				{
					target: "http://example.com/game:9090",
					assigner: "http://example.com/org:xyz",
					action: ActionType.Play,
					constraint: [
						{
							leftOperand: LeftOperandType.DateTime,
							operator: OperatorType.Lteq,
							rightOperand: {
								"@value": "2017-12-31",
								"@type": "xsd:date"
							}
						}
					]
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Offer);
		expect(policy.uid).toBe("http://example.com/policy:9090");
		expect(policy.profile).toBe("http://example.com/odrl:profile:07");

		// Test permission
		const permission = policy.permission?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/game:9090");
		expect(permission?.assigner).toBe("http://example.com/org:xyz");
		expect(permission?.action).toBe(ActionType.Play);

		// Test constraint
		const constraint = permission?.constraint?.[0] as IOdrlConstraint;
		expect(constraint).toBeDefined();
		expect(constraint.leftOperand).toBe(LeftOperandType.DateTime);
		expect(constraint.operator).toBe(OperatorType.Lteq);
		expect(constraint.rightOperand).toEqual({
			"@value": "2017-12-31",
			"@type": "xsd:date"
		});
	});

	it("Example 19: Agreement Policy with Permission and Prohibition", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Agreement,
			uid: "http://example.com/policy:5555",
			profile: "http://example.com/odrl:profile:08",
			conflict: ConflictStrategyType.Perm,
			permission: [
				{
					target: "http://example.com/photoAlbum:55",
					action: ActionType.Display,
					assigner: "http://example.com/MyPix:55",
					assignee: "http://example.com/assignee:55"
				}
			],
			prohibition: [
				{
					target: "http://example.com/photoAlbum:55",
					action: ActionType.Archive,
					assigner: "http://example.com/MyPix:55",
					assignee: "http://example.com/assignee:55"
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Agreement);
		expect(policy.uid).toBe("http://example.com/policy:5555");
		expect(policy.profile).toBe("http://example.com/odrl:profile:08");
		expect(policy.conflict).toBe(ConflictStrategyType.Perm);

		// Test permission
		const permission = policy.permission?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/photoAlbum:55");
		expect(permission?.action).toBe(ActionType.Display);
		expect(permission?.assigner).toBe("http://example.com/MyPix:55");
		expect(permission?.assignee).toBe("http://example.com/assignee:55");

		// Test prohibition
		const prohibition = policy.prohibition?.[0];
		expect(prohibition).toBeDefined();
		expect(prohibition?.target).toBe("http://example.com/photoAlbum:55");
		expect(prohibition?.action).toBe(ActionType.Archive);
		expect(prohibition?.assigner).toBe("http://example.com/MyPix:55");
		expect(prohibition?.assignee).toBe("http://example.com/assignee:55");
	});

	it("Example 20: Agreement Policy with obligation", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Agreement,
			uid: "http://example.com/policy:42",
			profile: "http://example.com/odrl:profile:09",
			obligation: [
				{
					assigner: "http://example.com/org:43",
					assignee: "http://example.com/person:44",
					action: [
						{
							"rdf:value": {
								"@id": UriActionType.OdrlCompensate
							},
							refinement: [
								{
									leftOperand: LeftOperandType.PayAmount,
									operator: OperatorType.Eq,
									rightOperand: {
										"@value": "500.00",
										"@type": "xsd:decimal"
									},
									unit: "http://dbpedia.org/resource/Euro"
								}
							]
						}
					]
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Agreement);
		expect(policy.uid).toBe("http://example.com/policy:42");
		expect(policy.profile).toBe("http://example.com/odrl:profile:09");

		// Test obligation
		const obligation = policy.obligation?.[0];
		expect(obligation).toBeDefined();
		expect(obligation?.assigner).toBe("http://example.com/org:43");
		expect(obligation?.assignee).toBe("http://example.com/person:44");

		// Test action array
		const actions = obligation?.action as (ActionType | IOdrlAction)[];
		expect(Array.isArray(actions)).toBe(true);
		const action = actions[0] as IOdrlAction;
		expect(action["rdf:value"]).toEqual({ "@id": UriActionType.OdrlCompensate });

		// Test refinement array
		const refinements = action.refinement as (IOdrlConstraint | IOdrlLogicalConstraint)[];
		expect(Array.isArray(refinements)).toBe(true);
		const refinement = refinements[0] as IOdrlConstraint;
		expect(refinement.leftOperand).toBe(LeftOperandType.PayAmount);
		expect(refinement.operator).toBe(OperatorType.Eq);
		expect(refinement.rightOperand).toEqual({
			"@value": "500.00",
			"@type": "xsd:decimal"
		});
		expect(refinement.unit).toBe("http://dbpedia.org/resource/Euro");
	});

	it("Example 21: Agreement Policy with obligation consequence", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Agreement,
			uid: "http://example.com/policy:42B",
			profile: "http://example.com/odrl:profile:09",
			assigner: "http://example.com/org:43",
			assignee: "http://example.com/person:44",
			obligation: [
				{
					action: ActionType.Delete,
					target: "http://example.com/document:XZY",
					consequence: [
						{
							action: [
								{
									"rdf:value": { "@id": UriActionType.OdrlCompensate },
									refinement: [
										{
											leftOperand: LeftOperandType.PayAmount,
											operator: OperatorType.Eq,
											rightOperand: {
												"@value": "10.00",
												"@type": "xsd:decimal"
											},
											unit: "http://dbpedia.org/resource/Euro"
										}
									]
								}
							],
							compensatedParty: "http://wwf.org"
						}
					]
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Agreement);
		expect(policy.uid).toBe("http://example.com/policy:42B");
		expect(policy.profile).toBe("http://example.com/odrl:profile:09");
		expect(policy.assigner).toBe("http://example.com/org:43");
		expect(policy.assignee).toBe("http://example.com/person:44");

		// Test obligation
		const obligation = policy.obligation?.[0];
		expect(obligation).toBeDefined();
		expect(obligation?.action).toBe(ActionType.Delete);
		expect(obligation?.target).toBe("http://example.com/document:XZY");

		// Test consequence
		const consequence = obligation?.consequence?.[0] as IOdrlDuty;
		expect(consequence).toBeDefined();

		// Test consequence action
		const actions = consequence.action as (ActionType | IOdrlAction)[];
		expect(Array.isArray(actions)).toBe(true);
		const action = actions[0] as IOdrlAction;
		expect(action["rdf:value"]).toEqual({ "@id": UriActionType.OdrlCompensate });

		// Test consequence refinement
		const refinements = action.refinement as IOdrlConstraint[];
		expect(Array.isArray(refinements)).toBe(true);
		const refinement = refinements[0];
		expect(refinement.leftOperand).toBe(LeftOperandType.PayAmount);
		expect(refinement.operator).toBe(OperatorType.Eq);
		expect(refinement.rightOperand).toEqual({
			"@value": "10.00",
			"@type": "xsd:decimal"
		});
		expect(refinement.unit).toBe("http://dbpedia.org/resource/Euro");

		// Test compensated party
		expect(consequence.compensatedParty).toBe("http://wwf.org");
	});

	it("Example 22: Offer Policy with permission duty", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Offer,
			uid: "http://example.com/policy:88",
			profile: "http://example.com/odrl:profile:09",
			permission: [
				{
					assigner: "http://example.com/assigner:sony",
					target: "http://example.com/music/1999.mp3",
					action: ActionType.Play,
					duty: [
						{
							action: [
								{
									"rdf:value": { "@id": UriActionType.OdrlCompensate },
									refinement: [
										{
											leftOperand: LeftOperandType.PayAmount,
											operator: OperatorType.Eq,
											rightOperand: {
												"@value": "5.00",
												"@type": "xsd:decimal"
											},
											unit: "http://dbpedia.org/resource/Euro"
										}
									]
								}
							],
							constraint: [
								{
									leftOperand: LeftOperandType.Event,
									operator: OperatorType.Lt,
									rightOperand: { "@id": RightOperandType.PolicyUsage }
								}
							]
						}
					]
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Offer);
		expect(policy.uid).toBe("http://example.com/policy:88");
		expect(policy.profile).toBe("http://example.com/odrl:profile:09");

		// Test permission
		const permission = policy.permission?.[0];
		expect(permission).toBeDefined();
		expect(permission?.assigner).toBe("http://example.com/assigner:sony");
		expect(permission?.target).toBe("http://example.com/music/1999.mp3");
		expect(permission?.action).toBe(ActionType.Play);

		// Test duty
		const duty = permission?.duty?.[0] as IOdrlDuty;
		expect(duty).toBeDefined();

		// Test duty action
		const actions = duty.action as (ActionType | IOdrlAction)[];
		expect(Array.isArray(actions)).toBe(true);
		const action = actions[0] as IOdrlAction;
		expect(action["rdf:value"]).toEqual({ "@id": UriActionType.OdrlCompensate });

		// Test duty action refinement
		const refinements = action.refinement as IOdrlConstraint[];
		expect(Array.isArray(refinements)).toBe(true);
		const refinement = refinements[0];
		expect(refinement.leftOperand).toBe(LeftOperandType.PayAmount);
		expect(refinement.operator).toBe(OperatorType.Eq);
		expect(refinement.rightOperand).toEqual({
			"@value": "5.00",
			"@type": "xsd:decimal"
		});
		expect(refinement.unit).toBe("http://dbpedia.org/resource/Euro");

		// Test duty constraint
		const constraint = duty.constraint?.[0] as IOdrlConstraint;
		expect(constraint).toBeDefined();
		expect(constraint.leftOperand).toBe(LeftOperandType.Event);
		expect(constraint.operator).toBe(OperatorType.Lt);
		expect(constraint.rightOperand).toEqual({ "@id": RightOperandType.PolicyUsage });
	});

	it("Example 23: Agreement Policy with permission duty consequence", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Agreement,
			uid: "http://example.com/policy:66",
			profile: "http://example.com/odrl:profile:09",
			permission: [
				{
					target: "http://example.com/data:77",
					assigner: "http://example.com/org:99",
					assignee: "http://example.com/person:88",
					action: ActionType.Distribute,
					duty: [
						{
							action: ActionType.Attribute,
							attributedParty: "http://australia.gov.au/",
							consequence: [
								{
									action: ActionType.AcceptTracking,
									trackingParty: "http://example.com/dept:100"
								}
							]
						}
					]
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Agreement);
		expect(policy.uid).toBe("http://example.com/policy:66");
		expect(policy.profile).toBe("http://example.com/odrl:profile:09");

		// Test permission
		const permission = policy.permission?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/data:77");
		expect(permission?.assigner).toBe("http://example.com/org:99");
		expect(permission?.assignee).toBe("http://example.com/person:88");
		expect(permission?.action).toBe(ActionType.Distribute);

		// Test duty
		const duty = permission?.duty?.[0];
		expect(duty).toBeDefined();
		expect(duty?.action).toBe(ActionType.Attribute);
		expect(duty?.attributedParty).toBe("http://australia.gov.au/");

		// Test consequence
		const consequence = duty?.consequence?.[0];
		expect(consequence).toBeDefined();
		expect(consequence?.action).toBe(ActionType.AcceptTracking);
		expect(consequence?.trackingParty).toBe("http://example.com/dept:100");
	});

	it("Example 24: Agreement Policy with prohibition remedy", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Agreement,
			uid: "http://example.com/policy:33CC",
			profile: "http://example.com/odrl:profile:09",
			prohibition: [
				{
					target: "http://example.com/data:77",
					assigner: "http://example.com/person:88",
					assignee: "http://example.com/org:99",
					action: ActionType.Index,
					remedy: [
						{
							action: ActionType.Anonymize,
							target: "http://example.com/data:77"
						}
					]
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Agreement);
		expect(policy.uid).toBe("http://example.com/policy:33CC");
		expect(policy.profile).toBe("http://example.com/odrl:profile:09");

		// Test prohibition
		const prohibition = policy.prohibition?.[0];
		expect(prohibition).toBeDefined();
		expect(prohibition?.target).toBe("http://example.com/data:77");
		expect(prohibition?.assigner).toBe("http://example.com/person:88");
		expect(prohibition?.assignee).toBe("http://example.com/org:99");
		expect(prohibition?.action).toBe(ActionType.Index);

		// Test remedy
		const remedy = prohibition?.remedy?.[0];
		expect(remedy).toBeDefined();
		expect(remedy?.action).toBe(ActionType.Anonymize);
		expect(remedy?.target).toBe("http://example.com/data:77");
	});

	it("Example 25: Atomic Policy with single permission", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Policy,
			uid: "http://example.com/policy:7777",
			profile: "http://example.com/odrl:profile:20",
			permission: [
				{
					target: "http://example.com/music/1999.mp3",
					assigner: "http://example.com/org/sony-music",
					action: ActionType.Play
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Policy);
		expect(policy.uid).toBe("http://example.com/policy:7777");
		expect(policy.profile).toBe("http://example.com/odrl:profile:20");

		// Test atomic permission rule
		const permission = policy.permission?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/music/1999.mp3");
		expect(permission?.assigner).toBe("http://example.com/org/sony-music");
		expect(permission?.action).toBe(ActionType.Play);

		// Verify rule is atomic (single target, assigner, and action)
		expect(policy.permission?.length).toBe(1);
		expect(Array.isArray(permission?.target)).toBeFalsy();
		expect(Array.isArray(permission?.assigner)).toBeFalsy();
		expect(Array.isArray(permission?.action)).toBeFalsy();
	});

	it("Example 26: Policy with multiple targets and actions", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Policy,
			uid: "http://example.com/policy:8888",
			profile: "http://example.com/odrl:profile:20",
			permission: [
				{
					target: ["http://example.com/music/1999.mp3", "http://example.com/music/PurpleRain.mp3"],
					assigner: "http://example.com/org/sony-music",
					action: [ActionType.Play, ActionType.Stream]
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Policy);
		expect(policy.uid).toBe("http://example.com/policy:8888");
		expect(policy.profile).toBe("http://example.com/odrl:profile:20");

		// Test compound permission rule
		const permission = policy.permission?.[0];
		expect(permission).toBeDefined();

		// Test multiple targets
		expect(Array.isArray(permission?.target)).toBe(true);
		const targets = permission?.target as string[];
		expect(targets).toHaveLength(2);
		expect(targets[0]).toBe("http://example.com/music/1999.mp3");
		expect(targets[1]).toBe("http://example.com/music/PurpleRain.mp3");

		// Test single assigner
		expect(permission?.assigner).toBe("http://example.com/org/sony-music");

		// Test multiple actions
		expect(Array.isArray(permission?.action)).toBe(true);
		const actions = permission?.action as ActionType[];
		expect(actions).toHaveLength(2);
		expect(actions[0]).toBe(ActionType.Play);
		expect(actions[1]).toBe(ActionType.Stream);
	});

	it("Example 27: Policy with decomposed atomic permissions", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Policy,
			uid: "http://example.com/policy:8888",
			profile: "http://example.com/odrl:profile:20",
			permission: [
				{
					target: "http://example.com/music/1999.mp3",
					assigner: "http://example.com/org/sony-music",
					action: ActionType.Play
				},
				{
					target: "http://example.com/music/1999.mp3",
					assigner: "http://example.com/org/sony-music",
					action: ActionType.Stream
				},
				{
					target: "http://example.com/music/PurpleRain.mp3",
					assigner: "http://example.com/org/sony-music",
					action: ActionType.Play
				},
				{
					target: "http://example.com/music/PurpleRain.mp3",
					assigner: "http://example.com/org/sony-music",
					action: ActionType.Stream
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Policy);
		expect(policy.uid).toBe("http://example.com/policy:8888");
		expect(policy.profile).toBe("http://example.com/odrl:profile:20");

		// Test that we have four atomic permissions
		expect(policy.permission).toHaveLength(4);

		// Test each permission is atomic (single target and action)
		for (const permission of policy.permission ?? []) {
			expect(permission.assigner).toBe("http://example.com/org/sony-music");
			expect(typeof permission.target).toBe("string");
			expect(typeof permission.action).toBe("string");
		}

		// Test specific combinations
		const permissions = policy.permission ?? [];

		// First permission: 1999.mp3 + play
		expect(permissions[0].target).toBe("http://example.com/music/1999.mp3");
		expect(permissions[0].action).toBe(ActionType.Play);

		// Second permission: 1999.mp3 + stream
		expect(permissions[1].target).toBe("http://example.com/music/1999.mp3");
		expect(permissions[1].action).toBe(ActionType.Stream);

		// Third permission: PurpleRain.mp3 + play
		expect(permissions[2].target).toBe("http://example.com/music/PurpleRain.mp3");
		expect(permissions[2].action).toBe(ActionType.Play);

		// Fourth permission: PurpleRain.mp3 + stream
		expect(permissions[3].target).toBe("http://example.com/music/PurpleRain.mp3");
		expect(permissions[3].action).toBe(ActionType.Stream);
	});

	it("Example 28: Compact Policy with shared properties", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Policy,
			uid: "http://example.com/policy:8888",
			profile: "http://example.com/odrl:profile:21",
			target: "http://example.com/music/1999.mp3",
			assigner: "http://example.com/org/sony-music",
			action: ActionType.Play,
			permission: [
				{
					assignee: "http://example.com/people/billie"
				},
				{
					assignee: "http://example.com/people/murphy"
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Policy);
		expect(policy.uid).toBe("http://example.com/policy:8888");
		expect(policy.profile).toBe("http://example.com/odrl:profile:21");

		// Test shared properties at policy level
		expect(policy.target).toBe("http://example.com/music/1999.mp3");
		expect(policy.assigner).toBe("http://example.com/org/sony-music");
		expect(policy.action).toBe(ActionType.Play);

		// Test individual permissions
		const permissions = policy.permission ?? [];
		expect(permissions).toHaveLength(2);
		expect(permissions[0].assignee).toBe("http://example.com/people/billie");
		expect(permissions[1].assignee).toBe("http://example.com/people/murphy");
	});

	it("Example 29: Policy with expanded shared properties", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Policy,
			uid: "http://example.com/policy:8888",
			profile: "http://example.com/odrl:profile:21",
			permission: [
				{
					assignee: "http://example.com/people/billie",
					target: "http://example.com/music/1999.mp3",
					assigner: "http://example.com/org/sony-music",
					action: ActionType.Play
				},
				{
					assignee: "http://example.com/people/murphy",
					target: "http://example.com/music/1999.mp3",
					assigner: "http://example.com/org/sony-music",
					action: ActionType.Play
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Policy);
		expect(policy.uid).toBe("http://example.com/policy:8888");
		expect(policy.profile).toBe("http://example.com/odrl:profile:21");

		// Test expanded permissions
		const permissions = policy.permission ?? [];
		expect(permissions).toHaveLength(2);

		// Test that each permission has all properties expanded
		for (const permission of permissions) {
			expect(permission.target).toBe("http://example.com/music/1999.mp3");
			expect(permission.assigner).toBe("http://example.com/org/sony-music");
			expect(permission.action).toBe(ActionType.Play);
		}

		// Test individual assignees
		expect(permissions[0].assignee).toBe("http://example.com/people/billie");
		expect(permissions[1].assignee).toBe("http://example.com/people/murphy");
	});

	it("Example 30: Policy with Dublin Core metadata", () => {
		const policy: IOdrlPolicy = {
			"@context": [OdrlContexts.ContextRoot, { dc: DublinCoreContexts.ContextTermsRedirect }],
			"@type": PolicyType.Policy,
			uid: "http://example.com/policy:8888",
			profile: "http://example.com/odrl:profile:22",
			[`dc:${DublinCorePropertyType.Creator}`]: "Billie Enterprises LLC",
			[`dc:${DublinCorePropertyType.Description}`]: "This policy covers...",
			[`dc:${DublinCorePropertyType.Issued}`]: "2017-01-01T12:00",
			[`dc:${DublinCorePropertyType.Coverage}`]: {
				"@id": "https://www.iso.org/obp/ui/#iso:code:3166:AU-QLD"
			},
			[`dc:${DublinCorePropertyType.Replaces}`]: { "@id": "http://example.com/policy:8887" },
			permission: [{}]
		};

		// Test basic policy structure
		expect(policy["@context"]).toEqual([
			OdrlContexts.ContextRoot,
			{ dc: DublinCoreContexts.ContextTermsRedirect }
		]);
		expect(policy["@type"]).toBe(PolicyType.Policy);
		expect(policy.uid).toBe("http://example.com/policy:8888");
		expect(policy.profile).toBe("http://example.com/odrl:profile:22");

		// Test Dublin Core metadata
		expect(policy[`dc:${DublinCorePropertyType.Creator}`]).toBe("Billie Enterprises LLC");
		expect(policy[`dc:${DublinCorePropertyType.Description}`]).toBe("This policy covers...");
		expect(policy[`dc:${DublinCorePropertyType.Issued}`]).toBe("2017-01-01T12:00");
		expect(policy[`dc:${DublinCorePropertyType.Coverage}`]).toEqual({
			"@id": "https://www.iso.org/obp/ui/#iso:code:3166:AU-QLD"
		});
		expect(policy[`dc:${DublinCorePropertyType.Replaces}`]).toEqual({
			"@id": "http://example.com/policy:8887"
		});

		// Test that permission array exists (even if empty)
		expect(Array.isArray(policy.permission)).toBe(true);
		expect(policy.permission).toHaveLength(1);
	});

	it("Example 31: Parent Policy with obligation for inheritance", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Policy,
			uid: "http://example.com/policy:default",
			profile: "http://example.com/odrl:profile:30",
			assigner: "http://example.com/org-01",
			obligation: [
				{
					target: "http://example.com/asset:terms-and-conditions",
					action: ActionType.ReviewPolicy
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Policy);
		expect(policy.uid).toBe("http://example.com/policy:default");
		expect(policy.profile).toBe("http://example.com/odrl:profile:30");

		// Test shared assigner at policy level
		expect(policy.assigner).toBe("http://example.com/org-01");

		// Test obligation
		const obligation = policy.obligation?.[0];
		expect(obligation).toBeDefined();
		expect(obligation?.target).toBe("http://example.com/asset:terms-and-conditions");
		expect(obligation?.action).toBe(ActionType.ReviewPolicy);
	});

	it("Example 32: Child Agreement Policy inheriting from parent Policy", () => {
		const childPolicy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Agreement,
			uid: "http://example.com/policy:4444",
			profile: "http://example.com/odrl:profile:30",
			inheritFrom: "http://example.com/policy:default",
			assignee: "http://example.com/user:0001",
			permission: [
				{
					target: "http://example.com/asset:5555",
					action: ActionType.Display
				}
			]
		};

		// Test policy structure
		expect(childPolicy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(childPolicy["@type"]).toBe(PolicyType.Agreement);
		expect(childPolicy.uid).toBe("http://example.com/policy:4444");
		expect(childPolicy.profile).toBe("http://example.com/odrl:profile:30");

		// Test inheritance
		expect(childPolicy.inheritFrom).toBe("http://example.com/policy:default");

		// Test assignee at policy level
		expect(childPolicy.assignee).toBe("http://example.com/user:0001");

		// Test permission
		const permission = childPolicy.permission?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/asset:5555");
		expect(permission?.action).toBe(ActionType.Display);
	});

	it("Example 33: Agreement Policy after inheritance expansion", () => {
		const expandedPolicy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Agreement,
			uid: "http://example.com/policy:4444",
			profile: "http://example.com/odrl:profile:30",
			inheritFrom: "http://example.com/policy:default",
			permission: [
				{
					target: "http://example.com/asset:5555",
					action: ActionType.Display,
					assigner: "http://example.com/org-01",
					assignee: "http://example.com/user:0001"
				}
			],
			obligation: [
				{
					target: "http://example.com/asset:terms-and-conditions",
					action: ActionType.ReviewPolicy,
					assigner: "http://example.com/org-01",
					assignee: "http://example.com/user:0001"
				}
			]
		};

		// Test policy structure
		expect(expandedPolicy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(expandedPolicy["@type"]).toBe(PolicyType.Agreement);
		expect(expandedPolicy.uid).toBe("http://example.com/policy:4444");
		expect(expandedPolicy.profile).toBe("http://example.com/odrl:profile:30");
		expect(expandedPolicy.inheritFrom).toBe("http://example.com/policy:default");

		// Test expanded permission
		const permission = expandedPolicy.permission?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/asset:5555");
		expect(permission?.action).toBe(ActionType.Display);
		expect(permission?.assigner).toBe("http://example.com/org-01");
		expect(permission?.assignee).toBe("http://example.com/user:0001");

		// Test inherited and expanded obligation
		const obligation = expandedPolicy.obligation?.[0];
		expect(obligation).toBeDefined();
		expect(obligation?.target).toBe("http://example.com/asset:terms-and-conditions");
		expect(obligation?.action).toBe(ActionType.ReviewPolicy);
		expect(obligation?.assigner).toBe("http://example.com/org-01");
		expect(obligation?.assignee).toBe("http://example.com/user:0001");

		// Verify all rules have both assigner and assignee
		const allRules = [...(expandedPolicy.permission ?? []), ...(expandedPolicy.obligation ?? [])];
		for (const rule of allRules) {
			expect(rule.assigner).toBe("http://example.com/org-01");
			expect(rule.assignee).toBe("http://example.com/user:0001");
		}
	});

	it("Example 34: Policy with conflict strategy preference", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Policy,
			uid: "http://example.com/policy:0001",
			profile: "http://example.com/odrl:profile:40",
			conflict: ConflictStrategyType.Perm,
			permission: [
				{
					target: "http://example.com/asset:1212",
					action: ActionType.Use,
					assigner: "http://example.com/owner:181"
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Policy);
		expect(policy.uid).toBe("http://example.com/policy:0001");
		expect(policy.profile).toBe("http://example.com/odrl:profile:40");

		// Test conflict strategy
		expect(policy.conflict).toBe(ConflictStrategyType.Perm);

		// Test permission
		const permission = policy.permission?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/asset:1212");
		expect(permission?.action).toBe(ActionType.Use);
		expect(permission?.assigner).toBe("http://example.com/owner:181");
	});

	it("Example 35: Policy with permission and prohibition", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.ContextRoot,
			"@type": PolicyType.Policy,
			uid: "http://example.com/policy:0002",
			profile: "http://example.com/odrl:profile:40",
			conflict: ConflictStrategyType.Perm,
			permission: [
				{
					target: "http://example.com/asset:1212",
					action: ActionType.Display,
					assigner: "http://example.com/owner:182"
				}
			],
			prohibition: [
				{
					target: "http://example.com/asset:1212",
					action: ActionType.Print
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.ContextRoot);
		expect(policy["@type"]).toBe(PolicyType.Policy);
		expect(policy.uid).toBe("http://example.com/policy:0002");
		expect(policy.profile).toBe("http://example.com/odrl:profile:40");

		// Test conflict strategy
		expect(policy.conflict).toBe(ConflictStrategyType.Perm);

		// Test permission
		const permission = policy.permission?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/asset:1212");
		expect(permission?.action).toBe(ActionType.Display);
		expect(permission?.assigner).toBe("http://example.com/owner:182");

		// Test prohibition
		const prohibition = policy.prohibition?.[0];
		expect(prohibition).toBeDefined();
		expect(prohibition?.target).toBe("http://example.com/asset:1212");
		expect(prohibition?.action).toBe(ActionType.Print);

		// Test that permission and prohibition target the same asset
		expect(permission?.target).toBe(prohibition?.target);
	});
});

describe("OdrlDataTypes Validation", () => {
	beforeAll(async () => {
		// Register JSON-LD and ODRL data types
		JsonLdDataTypes.registerTypes();
		OdrlDataTypes.registerRedirects();
		OdrlDataTypes.registerTypes();
	});

	it("should register all ODRL types correctly", async () => {
		const testTypes = [
			OdrlTypes.Policy,
			OdrlTypes.Set,
			OdrlTypes.Offer,
			OdrlTypes.Agreement,
			OdrlTypes.Asset,
			OdrlTypes.AssetCollection,
			OdrlTypes.Rule,
			OdrlTypes.Permission,
			OdrlTypes.Constraint,
			OdrlTypes.LogicalConstraint,
			OdrlTypes.Action,
			OdrlTypes.Party,
			OdrlTypes.PartyCollection,
			OdrlTypes.Duty,
			OdrlTypes.Prohibition,
			OdrlTypes.PolicyMetadata,
			OdrlTypes.ContextType
		];

		for (const type of testTypes) {
			const typeKey = `${OdrlContexts.ContextRoot}${type}`;
			const handler = DataTypeHandlerFactory.get(typeKey);

			expect(handler).toBeDefined();
			expect(handler.context).toBe(OdrlContexts.ContextRoot);
			expect(handler.type).toBe(type);
			expect(handler.jsonSchema).toBeDefined();
			expect(typeof handler.jsonSchema).toBe("function");
		}
	});

	it("should have proper redirect configuration", () => {
		expect(() => {
			OdrlDataTypes.registerRedirects();
		}).not.toThrow();
	});

	it("should validate valid ODRL objects", async () => {
		const testCases = [
			{
				type: OdrlTypes.Policy,
				data: {
					"@context": OdrlContexts.ContextRoot,
					"@type": PolicyType.Set,
					uid: "http://example.com/policy:test"
				}
			},
			{
				type: OdrlTypes.Asset,
				data: {
					"@type": OdrlTypes.Asset,
					uid: "http://example.com/asset:test"
				}
			},
			{
				type: OdrlTypes.Permission,
				data: {
					target: "http://example.com/asset:test",
					action: ActionType.Use
				}
			}
		];

		for (const testCase of testCases) {
			const typeKey = `${OdrlContexts.ContextRoot}${testCase.type}`;
			const handler = DataTypeHandlerFactory.get(typeKey);

			expect(handler).toBeDefined();
			expect(handler?.jsonSchema).toBeDefined();

			const schema = await handler?.jsonSchema?.();
			expect(schema).toBeDefined();
			expect(typeof schema).toBe("object");
		}
	});

	it("should have schemas for all registered ODRL types", async () => {
		const testTypes = [
			OdrlTypes.Policy,
			OdrlTypes.Asset,
			OdrlTypes.Permission,
			OdrlTypes.Constraint,
			OdrlTypes.Action,
			OdrlTypes.Party,
			OdrlTypes.Duty,
			OdrlTypes.Prohibition
		];

		for (const type of testTypes) {
			const typeKey = `${OdrlContexts.ContextRoot}${type}`;
			const handler = DataTypeHandlerFactory.get(typeKey);

			expect(handler).toBeDefined();
			expect(handler?.jsonSchema).toBeDefined();

			const schema = await handler?.jsonSchema?.();
			expect(schema).toBeDefined();
			expect(schema?.type).toBeDefined();
		}
	});

	it("should fail validation for invalid ODRL objects", async () => {
		const testCases = [
			{
				type: OdrlTypes.Policy,
				description: "Policy type registration"
			},
			{
				type: OdrlTypes.Asset,
				description: "Asset type registration"
			},
			{
				type: OdrlTypes.Permission,
				description: "Permission type registration"
			}
		];

		for (const testCase of testCases) {
			const typeKey = `${OdrlContexts.ContextRoot}${testCase.type}`;
			const handler = DataTypeHandlerFactory.get(typeKey);

			expect(handler).toBeDefined();
			expect(handler?.jsonSchema).toBeDefined();
			expect(typeof handler?.jsonSchema).toBe("function");

			const schema = await handler?.jsonSchema?.();
			expect(schema).toBeDefined();
			expect(typeof schema).toBe("object");

			expect(schema).toHaveProperty("type");
		}
	});

	it("should be able to validate context variants", async () => {
		const testCases = [
			{
				data: "https://www.w3.org/ns/odrl/2/",
				expect: true
			},
			{
				data: "https://foo",
				expect: false
			},
			{
				data: ["https://www.w3.org/ns/odrl/2/"],
				expect: false
			},
			{
				data: ["https://foo"],
				expect: false
			},
			{
				data: ["https://www.w3.org/ns/odrl/2/", "https://www.w3.org/ns/odrl/2/"],
				expect: false
			},
			{
				data: ["https://foo", "https://www.w3.org/ns/odrl/2/", "https://www.w3.org/ns/odrl/2/"],
				expect: false
			},
			{
				data: ["https://foo", "https://foo"],
				expect: false
			},
			{
				data: ["https://foo", "https://foo2"],
				expect: false
			},
			{
				data: ["https://foo", "https://www.w3.org/ns/odrl/2/"],
				expect: true
			},
			{
				data: ["https://foo", "https://foo", "https://www.w3.org/ns/odrl/2/"],
				expect: false
			},
			{
				data: ["https://foo", "https://www.w3.org/ns/odrl/2/", "https://foo"],
				expect: false
			},
			{
				data: ["https://foo", "https://www.w3.org/ns/odrl/2/", "https://foo2"],
				expect: true
			}
		];

		const schema: IJsonSchema = {
			type: "object",
			properties: {
				"@context": {
					anyOf: [
						{
							type: "string",
							const: "https://www.w3.org/ns/odrl/2/"
						},
						{
							type: "array",
							minItems: 2,
							prefixItems: [
								{
									$ref: "https://schema.twindev.org/json-ld/JsonLdContextDefinitionElement"
								}
							],
							items: true,
							minContains: 1,
							maxContains: 1,
							contains: {
								const: "https://www.w3.org/ns/odrl/2/"
							},
							uniqueItems: true
						}
					]
				}
			}
		};

		for (const testCase of testCases) {
			console.log({ "@context": testCase.data });
			const result = await JsonSchemaHelper.validate(schema, { "@context": testCase.data });
			expect(result.result).toBe(testCase.expect);
		}
	});
});
