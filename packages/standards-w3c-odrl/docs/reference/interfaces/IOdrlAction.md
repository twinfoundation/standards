# Interface: IOdrlAction

Interface for ODRL Actions.

## Properties

### rdf:value?

> `optional` **rdf:value**: `object`

The value/identifier of the action.

#### @id

> **@id**: `string`

***

### refinement?

> `optional` **refinement**: [`IOdrlConstraint`](IOdrlConstraint.md)[]

Refinements applied to the action.

***

### includedIn?

> `optional` **includedIn**: [`ActionType`](../type-aliases/ActionType.md)

Reference to the action this action is included in.

***

### implies?

> `optional` **implies**: [`ActionType`](../type-aliases/ActionType.md)[]

References to actions this action implies.
