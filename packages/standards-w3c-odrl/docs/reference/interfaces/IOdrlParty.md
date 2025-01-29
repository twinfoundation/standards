# Interface: IOdrlParty

Interface for ODRL Parties.

## Extends

- [`IVCardProperties`](../type-aliases/IVCardProperties.md)

## Extended by

- [`IOdrlPartyCollection`](IOdrlPartyCollection.md)

## Properties

### vcard:fn?

> `optional` **vcard:fn**: `string`

#### Inherited from

`IVCardProperties.vcard:fn`

***

### vcard:hasEmail?

> `optional` **vcard:hasEmail**: `string`

#### Inherited from

`IVCardProperties.vcard:hasEmail`

***

### vcard:Organization?

> `optional` **vcard:Organization**: `string`

#### Inherited from

`IVCardProperties.vcard:Organization`

***

### vcard:Group?

> `optional` **vcard:Group**: `string`

#### Inherited from

`IVCardProperties.vcard:Group`

***

### vcard:Individual?

> `optional` **vcard:Individual**: `string`

#### Inherited from

`IVCardProperties.vcard:Individual`

***

### uid?

> `optional` **uid**: `string`

The unique identifier for the party.
Must be an IRI.

***

### @type?

> `optional` **@type**: `string` \| `string`[]

The type of the party.
Can be used to specify additional type information (e.g., "Party",
"vcard:Organization", "vcard:Individual").

***

### partOf?

> `optional` **partOf**: `string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md)

Reference to the party collection this party is part of.
Used to identify a PartyCollection that a Party entity is a member of.

***

### assigneeOf?

> `optional` **assigneeOf**: `string`

Reference to a policy where this party is an assignee.
When assigneeOf is asserted, the Party MUST be inferred to undertake
the assignee functional role of all the Rules of that Policy.

***

### assignerOf?

> `optional` **assignerOf**: `string`

Reference to a policy where this party is an assigner.
When assignerOf is asserted, the Party MUST be inferred to undertake
the assigner functional role of all the Rules of that Policy.
