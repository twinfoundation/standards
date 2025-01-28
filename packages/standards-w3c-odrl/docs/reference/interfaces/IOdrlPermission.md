# Interface: IOdrlPermission

Interface for Permission Rules.
A Permission allows an action to be exercised on an Asset
if all constraints are satisfied and if all duties are fulfilled.

## Extends

- [`IOdrlRule`](IOdrlRule.md)

## Properties

### duty?

> `optional` **duty**: [`IOdrlDuty`](IOdrlDuty.md)[]

The duties that must be fulfilled before the permission can be exercised.
A Permission MAY have none, one, or more duty property values.

***

### uid?

> `optional` **uid**: `string`

Optional unique identifier for the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`uid`](IOdrlRule.md#uid)

***

### action

> **action**: [`ActionType`](../type-aliases/ActionType.md) \| [`IOdrlAction`](IOdrlAction.md) \| ActionType \| IOdrlAction[]

The action associated with the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`action`](IOdrlRule.md#action)

***

### target?

> `optional` **target**: `string` \| [`IOdrlAsset`](IOdrlAsset.md)

The target asset for the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`target`](IOdrlRule.md#target)

***

### assigner?

> `optional` **assigner**: `string` \| [`IOdrlParty`](IOdrlParty.md)

The assigner of the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`assigner`](IOdrlRule.md#assigner)

***

### assignee?

> `optional` **assignee**: `string` \| [`IOdrlParty`](IOdrlParty.md)

The assignee of the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`assignee`](IOdrlRule.md#assignee)

***

### constraint?

> `optional` **constraint**: [`IOdrlConstraint`](IOdrlConstraint.md)[]

Constraints applied to the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`constraint`](IOdrlRule.md#constraint)
