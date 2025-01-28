# Interface: IOdrlPartyCollection

Interface for ODRL Party Collections.
A PartyCollection identifies a collection of entities and is a subclass of Party.

## Extends

- [`IOdrlParty`](IOdrlParty.md)

## Properties

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

### source?

> `optional` **source**: `string`

Reference to the source of the party collection.
Used to identify the origin or location of the collection.

***

### refinement?

> `optional` **refinement**: [`IOdrlConstraint`](IOdrlConstraint.md)[]

Refinements applied to the party collection.
Used to specify constraints that apply to all members of the collection.
