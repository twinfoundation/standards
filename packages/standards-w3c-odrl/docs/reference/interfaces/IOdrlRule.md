# Interface: IOdrlRule

Base interface for ODRL Rules.

## Extended by

- [`IOdrlPermission`](IOdrlPermission.md)
- [`IOdrlProhibition`](IOdrlProhibition.md)
- [`IOdrlDuty`](IOdrlDuty.md)

## Properties

### uid?

> `optional` **uid**: `string`

Optional unique identifier for the rule.

***

### action

> **action**: [`ActionType`](../type-aliases/ActionType.md) \| [`IOdrlAction`](IOdrlAction.md) \| ActionType \| IOdrlAction[]

The action associated with the rule.

***

### target?

> `optional` **target**: `string` \| [`IOdrlAsset`](IOdrlAsset.md)

The target asset for the rule.

***

### assigner?

> `optional` **assigner**: `string` \| [`IOdrlParty`](IOdrlParty.md)

The assigner of the rule.

***

### assignee?

> `optional` **assignee**: `string` \| [`IOdrlParty`](IOdrlParty.md)

The assignee of the rule.

***

### constraint?

> `optional` **constraint**: [`IOdrlConstraint`](IOdrlConstraint.md)[]

Constraints applied to the rule.
