# Interface: IOdrlLogicalConstraint

Interface for ODRL Logical Constraints.
A Logical Constraint compares two or more existing Constraints by one logical operator.
If the comparison returns a logical match, then the Logical Constraint is satisfied.

## Properties

### uid?

> `optional` **uid**: `string`

Optional unique identifier for the logical constraint.
Must be an IRI.

***

### and?

> `optional` **and**: [`IOdrlConstraint`](IOdrlConstraint.md)[]

AND operator - all constraints must be satisfied.

***

### or?

> `optional` **or**: [`IOdrlConstraint`](IOdrlConstraint.md)[]

OR operator - at least one constraint must be satisfied.

***

### xone?

> `optional` **xone**: [`IOdrlConstraint`](IOdrlConstraint.md)[]

XOR operator - exactly one constraint must be satisfied.

***

### andSequence?

> `optional` **andSequence**: [`IOdrlConstraint`](IOdrlConstraint.md)[]

AND Sequence operator - all constraints must be satisfied in order.
