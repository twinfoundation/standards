# Interface: IOdrlPolicyMetadata

Interface for ODRL Policy Metadata using Dublin Core terms.
While these aren't explicitly defined in the ODRL spec, they are valid and useful metadata properties that follow Dublin Core standards.

## Properties

### dc:creator?

> `optional` **dc:creator**: `string` \| `string`[]

The individual, agent, or organisation that authored the Policy.

***

### dc:description?

> `optional` **dc:description**: `string` \| `string`[]

A human-readable representation or summary of the Policy.

***

### dc:issued?

> `optional` **dc:issued**: `string`

The date (and time) the Policy was first issued.

***

### dc:modified?

> `optional` **dc:modified**: `string`

The date (and time) the Policy was updated.

***

### dc:coverage?

> `optional` **dc:coverage**: `string` \| `string`[]

The jurisdiction under which the Policy is relevant.

***

### dc:replaces?

> `optional` **dc:replaces**: `string`

The identifier of a Policy that this Policy supersedes.

***

### dc:isReplacedBy?

> `optional` **dc:isReplacedBy**: `string`

The identifier of a Policy that supersedes this Policy.
