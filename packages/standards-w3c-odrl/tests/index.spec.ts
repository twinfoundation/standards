// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { IOdrlPolicy } from "../src/models/IOdrlPolicy";
import { OdrlContexts } from "../src/models/odrlContexts";
import { ActionTypes } from "../src/models/types/actionTypes";
import { OdrlTypes } from "../src/models/types/odrlTypes";

describe("ODRL Examples from Specification", () => {
	it("Example 1: should validate basic permission example", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlTypes.Policy,
			uid: "http://example.com/policy:01",
			permission: [
				{
					target: "http://example.com/asset:9898",
					action: ActionTypes.Display,
					assignee: "http://example.com/person:88"
				}
			]
		};
		expect(policy).toBeDefined();
	});

	it("Example 2: should validate policy with multiple permissions", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlTypes.Policy,
			uid: "http://example.com/policy:02",
			permission: [
				{
					target: "http://example.com/asset:88",
					action: ActionTypes.Read,
					assignee: "http://example.com/person:89"
				},
				{
					target: "http://example.com/asset:88",
					action: ActionTypes.Write,
					assignee: "http://example.com/person:89"
				}
			]
		};
		expect(policy).toBeDefined();
	});

	it("Example 3: should validate policy with prohibition", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlTypes.Policy,
			uid: "http://example.com/policy:03",
			prohibition: [
				{
					target: "http://example.com/asset:55",
					action: ActionTypes.Share,
					assignee: "http://example.com/person:88"
				}
			]
		};
		expect(policy).toBeDefined();
	});

	it("Example 4: should validate policy with obligation", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlTypes.Policy,
			uid: "http://example.com/policy:04",
			obligation: [
				{
					target: "http://example.com/asset:55",
					action: ActionTypes.Compensate,
					assignee: "http://example.com/person:88"
				}
			]
		};
		expect(policy).toBeDefined();
	});

	it("Example 5: should validate offer policy", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlTypes.Offer,
			uid: "http://example.com/policy:05",
			permission: [
				{
					target: "http://example.com/asset:77",
					action: ActionTypes.Play,
					assigner: "http://example.com/person:99"
				}
			]
		};
		expect(policy).toBeDefined();
	});

	it("Example 6: should validate agreement policy", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlTypes.Agreement,
			uid: "http://example.com/policy:06",
			permission: [
				{
					target: "http://example.com/asset:77",
					action: ActionTypes.Play,
					assigner: "http://example.com/person:99",
					assignee: "http://example.com/person:88"
				}
			]
		};
		expect(policy).toBeDefined();
	});

	it("Example 7: should validate policy with asset collection", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlTypes.Policy,
			uid: "http://example.com/policy:07",
			permission: [
				{
					target: {
						"@type": OdrlTypes.AssetCollection,
						uid: "http://example.com/assets:99"
					},
					action: ActionTypes.Index
				}
			]
		};
		expect(policy).toBeDefined();
	});

	it("Example 8: should validate policy with count constraint", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlTypes.Policy,
			uid: "http://example.com/policy:08",
			permission: [
				{
					target: "http://example.com/asset:88",
					action: ActionTypes.Play,
					constraint: [
						{
							leftOperand: "count",
							operator: "lteq",
							rightOperand: {
								"@value": "10",
								"@type": "xsd:integer"
							}
						}
					]
				}
			]
		};
		expect(policy).toBeDefined();
	});

	it("Example 9: should validate policy with duty", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlTypes.Policy,
			uid: "http://example.com/policy:09",
			permission: [
				{
					target: "http://example.com/asset:88",
					action: ActionTypes.Play,
					duty: [
						{
							action: ActionTypes.Play,
							target: "http://example.com/payment:99"
						}
					]
				}
			]
		};
		expect(policy).toBeDefined();
	});

	it("Example 13: should validate policy with datetime constraint", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlTypes.Offer,
			uid: "http://example.com/policy:6163",
			profile: "http://example.com/odrl:profile:10",
			permission: [
				{
					target: "http://example.com/document:1234",
					assigner: "http://example.com/org:616",
					action: ActionTypes.Distribute,
					constraint: [
						{
							leftOperand: "dateTime",
							operator: "lt",
							rightOperand: {
								"@value": "2018-01-01",
								"@type": "xsd:date"
							}
						}
					]
				}
			]
		};
		expect(policy).toBeDefined();
	});

	it("Example 20: should validate agreement with payment obligation", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlTypes.Agreement,
			uid: "http://example.com/policy:42",
			profile: "http://example.com/odrl:profile:09",
			obligation: [
				{
					assigner: "http://example.com/org:43",
					assignee: "http://example.com/person:44",
					action: [
						{
							"rdf:value": {
								"@id": "odrl:compensate"
							},
							refinement: [
								{
									leftOperand: "payAmount",
									operator: "eq",
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
		expect(policy).toBeDefined();
	});
});
