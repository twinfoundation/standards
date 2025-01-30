# Interface: IOdrlPolicy

Interface representing an ODRL Policy.

## Extends

- [`IOdrlPolicyMetadata`](IOdrlPolicyMetadata.md)

## Properties

### @context

> **@context**: `"https://www.w3.org/ns/odrl.jsonld"` \| `IJsonLdContextDefinition` \| \[`"https://www.w3.org/ns/odrl.jsonld"`, `IJsonLdContextDefinition`\]

The context for the policy.
Must include "https://www.w3.org/ns/odrl.jsonld"

***

### @type

> **@type**: [`PolicyType`](../type-aliases/PolicyType.md)

The type of policy.
Must be one of: "Set", "Offer", "Agreement"

***

### uid

> **uid**: `string`

The unique identifier for the policy.
Must be an IRI.

***

### profile?

> `optional` **profile**: `string` \| `string`[]

The profile(s) this policy conforms to.
IRIs identifying the ODRL Profile(s).

***

### assigner?

> `optional` **assigner**: `string` \| [`IOdrlParty`](IOdrlParty.md)

The assigner of the policy.
Applies to all rules unless overridden at rule level.

***

### assignee?

> `optional` **assignee**: `string` \| [`IOdrlParty`](IOdrlParty.md)

The assignee of the policy.
Applies to all rules unless overridden at rule level.

***

### target?

> `optional` **target**: `string` \| [`IOdrlAsset`](IOdrlAsset.md) \| (`string` \| [`IOdrlAsset`](IOdrlAsset.md))[]

The target asset for the rule.

***

### action?

> `optional` **action**: [`ActionType`](../type-aliases/ActionType.md) \| [`IOdrlAction`](IOdrlAction.md) \| ActionType \| IOdrlAction[]

The action associated with the rule.

***

### inheritFrom?

> `optional` **inheritFrom**: `string` \| `string`[]

The parent policy(ies) this policy inherits from.
IRIs identifying the parent Policy(ies).

***

### conflict?

> `optional` **conflict**: [`ConflictStrategyType`](../type-aliases/ConflictStrategyType.md)

The conflict resolution strategy.
- perm: Permissions override Prohibitions
- prohibit: Prohibitions override Permissions
- invalid: Policy is void if conflicts exist (default)

***

### permission?

> `optional` **permission**: [`IOdrlPermission`](IOdrlPermission.md)[]

The permissions in the policy.
At least one of permission, prohibition, or obligation must be present.

***

### prohibition?

> `optional` **prohibition**: [`IOdrlProhibition`](IOdrlProhibition.md)[]

The prohibitions in the policy.
At least one of permission, prohibition, or obligation must be present.

***

### obligation?

> `optional` **obligation**: [`IOdrlDuty`](IOdrlDuty.md)[]

The obligations in the policy.
At least one of permission, prohibition, or obligation must be present.

***

### dc:creator?

> `optional` **dc:creator**: `string` \| `string`[]

The individual, agent, or organisation that authored the Policy.
Note: String values may not be normalized and should not be used for direct comparison.

#### Inherited from

[`IOdrlPolicyMetadata`](IOdrlPolicyMetadata.md).[`dc:creator`](IOdrlPolicyMetadata.md#dc:creator)

***

### dc:description?

> `optional` **dc:description**: `string` \| `string`[]

A human-readable representation or summary of the Policy.
Note: String values may not be normalized and should not be used for direct comparison.

#### Inherited from

[`IOdrlPolicyMetadata`](IOdrlPolicyMetadata.md).[`dc:description`](IOdrlPolicyMetadata.md#dc:description)

***

### dc:issued?

> `optional` **dc:issued**: `string`

The date (and time) the Policy was first issued.
Note: String values may not be normalized and should not be used for direct comparison.

#### Inherited from

[`IOdrlPolicyMetadata`](IOdrlPolicyMetadata.md).[`dc:issued`](IOdrlPolicyMetadata.md#dc:issued)

***

### dc:modified?

> `optional` **dc:modified**: `string`

The date (and time) the Policy was updated.
Note: String values may not be normalized and should not be used for direct comparison.

#### Inherited from

[`IOdrlPolicyMetadata`](IOdrlPolicyMetadata.md).[`dc:modified`](IOdrlPolicyMetadata.md#dc:modified)

***

### dc:publisher?

> `optional` **dc:publisher**: `string`

The publisher of the Policy.
Note: String values may not be normalized and should not be used for direct comparison.

#### Inherited from

[`IOdrlPolicyMetadata`](IOdrlPolicyMetadata.md).[`dc:publisher`](IOdrlPolicyMetadata.md#dc:publisher)

***

### dc:subject?

> `optional` **dc:subject**: `string` \| `string`[]

The subject of the Policy.
Note: String values may not be normalized and should not be used for direct comparison.

#### Inherited from

[`IOdrlPolicyMetadata`](IOdrlPolicyMetadata.md).[`dc:subject`](IOdrlPolicyMetadata.md#dc:subject)

***

### dc:coverage?

> `optional` **dc:coverage**: `string` \| \{ `@id`: `string`; \}

The jurisdiction under which the Policy is relevant.
Note: When using string values, they may not be normalized and should not be used for direct comparison.
Using "@id" references is preferred for comparison purposes.

#### Inherited from

[`IOdrlPolicyMetadata`](IOdrlPolicyMetadata.md).[`dc:coverage`](IOdrlPolicyMetadata.md#dc:coverage)

***

### dc:replaces?

> `optional` **dc:replaces**: `string` \| \{ `@id`: `string`; \}

The identifier of a Policy that this Policy supersedes.
Using "@id" references is preferred for comparison purposes.

#### Inherited from

[`IOdrlPolicyMetadata`](IOdrlPolicyMetadata.md).[`dc:replaces`](IOdrlPolicyMetadata.md#dc:replaces)

***

### dc:isReplacedBy?

> `optional` **dc:isReplacedBy**: `string` \| \{ `@id`: `string`; \}

The identifier of a Policy that supersedes this Policy.
Using "@id" references is preferred for comparison purposes.

#### Inherited from

[`IOdrlPolicyMetadata`](IOdrlPolicyMetadata.md).[`dc:isReplacedBy`](IOdrlPolicyMetadata.md#dc:isreplacedby)
