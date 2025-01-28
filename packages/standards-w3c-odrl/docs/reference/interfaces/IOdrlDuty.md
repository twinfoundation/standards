# Interface: IOdrlDuty

Interface for Duty Rules.
A Duty is the obligation to exercise an action, with all refinements satisfied.
A Duty is fulfilled if all constraints are satisfied and if its action has been exercised.

## Extends

- [`IOdrlRule`](IOdrlRule.md)

## Properties

### consequence?

> `optional` **consequence**: [`IOdrlDuty`](IOdrlDuty.md)[]

The consequences if the duty is not fulfilled.
Only applicable when the Duty is referenced by a Rule with duty or obligation
properties.

***

### remedy?

> `optional` **remedy**: [`IOdrlDuty`](IOdrlDuty.md)[]

The remedies that may be fulfilled to cure the violation.

***

### uid?

> `optional` **uid**: `string`

Optional unique identifier for the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`uid`](IOdrlRule.md#uid)

***

### action

> **action**: [`ActionType`](../type-aliases/ActionType.md) \| [`IOdrlAction`](IOdrlAction.md)

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
