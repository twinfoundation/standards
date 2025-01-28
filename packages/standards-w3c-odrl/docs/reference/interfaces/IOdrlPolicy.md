# Interface: IOdrlPolicy

Interface representing an ODRL Policy.

## Properties

### @context

> **@context**: `string` \| `string`[]

The context for the policy.
Must include "http://www.w3.org/ns/odrl.jsonld"

***

### @type

> **@type**: `string`

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

### inheritFrom?

> `optional` **inheritFrom**: `string` \| `string`[]

The parent policy(ies) this policy inherits from.
IRIs identifying the parent Policy(ies).

***

### conflict?

> `optional` **conflict**: [`ConflictStrategyType`](../type-aliases/ConflictStrategyType.md)

The conflict resolution strategy.

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
