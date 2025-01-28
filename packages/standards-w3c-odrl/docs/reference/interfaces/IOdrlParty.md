# Interface: IOdrlParty

Interface for ODRL Parties.

## Extended by

- [`IOdrlPartyCollection`](IOdrlPartyCollection.md)

## Properties

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
