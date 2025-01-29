# Interface: IOdrlPartyCollection

Interface for ODRL Party Collections.
A PartyCollection identifies a collection of entities and is a subclass of Party.

## Extends

- [`IOdrlParty`](IOdrlParty.md)

## Properties

### vcard:fn?

> `optional` **vcard:fn**: `string`

#### Inherited from

[`IOdrlParty`](IOdrlParty.md).[`vcard:fn`](IOdrlParty.md#vcard:fn)

***

### vcard:hasEmail?

> `optional` **vcard:hasEmail**: `string`

#### Inherited from

[`IOdrlParty`](IOdrlParty.md).[`vcard:hasEmail`](IOdrlParty.md#vcard:hasemail)

***

### vcard:Organization?

> `optional` **vcard:Organization**: `string`

#### Inherited from

[`IOdrlParty`](IOdrlParty.md).[`vcard:Organization`](IOdrlParty.md#vcard:organization)

***

### vcard:Group?

> `optional` **vcard:Group**: `string`

#### Inherited from

[`IOdrlParty`](IOdrlParty.md).[`vcard:Group`](IOdrlParty.md#vcard:group)

***

### vcard:Individual?

> `optional` **vcard:Individual**: `string`

#### Inherited from

[`IOdrlParty`](IOdrlParty.md).[`vcard:Individual`](IOdrlParty.md#vcard:individual)

***

### uid?

> `optional` **uid**: `string`

The unique identifier for the party.
Must be an IRI.

#### Inherited from

[`IOdrlParty`](IOdrlParty.md).[`uid`](IOdrlParty.md#uid)

***

### @type?

> `optional` **@type**: `string` \| `string`[]

The type of the party.
Can be used to specify additional type information (e.g., "Party",
"vcard:Organization", "vcard:Individual").

#### Inherited from

[`IOdrlParty`](IOdrlParty.md).[`@type`](IOdrlParty.md#@type)

***

### partOf?

> `optional` **partOf**: `string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md)

Reference to the party collection this party is part of.
Used to identify a PartyCollection that a Party entity is a member of.

#### Inherited from

[`IOdrlParty`](IOdrlParty.md).[`partOf`](IOdrlParty.md#partof)

***

### assigneeOf?

> `optional` **assigneeOf**: `string`

Reference to a policy where this party is an assignee.
When assigneeOf is asserted, the Party MUST be inferred to undertake
the assignee functional role of all the Rules of that Policy.

#### Inherited from

[`IOdrlParty`](IOdrlParty.md).[`assigneeOf`](IOdrlParty.md#assigneeof)

***

### assignerOf?

> `optional` **assignerOf**: `string`

Reference to a policy where this party is an assigner.
When assignerOf is asserted, the Party MUST be inferred to undertake
the assigner functional role of all the Rules of that Policy.

#### Inherited from

[`IOdrlParty`](IOdrlParty.md).[`assignerOf`](IOdrlParty.md#assignerof)

***

### source

> **source**: `string`

Reference to the source of the party collection.
Used to identify the origin or location of the collection.

***

### refinement?

> `optional` **refinement**: [`IOdrlConstraint`](IOdrlConstraint.md)[]

Refinements applied to the party collection.
Used to specify constraints that apply to all members of the collection.
