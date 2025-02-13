# Interface: IDidVerifiableCredential

Interface describing a verifiable credential.
https://www.w3.org/TR/vc-data-model-2.0

## Properties

### @context

> **@context**: `"https://www.w3.org/ns/credentials/v2"` \| \[`"https://www.w3.org/ns/credentials/v2"`, `IJsonLdContextDefinitionElement`\]

The context for the verifiable credential.

***

### id?

> `optional` **id**: `string`

The identifier for the verifiable credential.

***

### type

> **type**: `string` \| `string`[]

The types of the data stored in the verifiable credential.

***

### credentialSubject

> **credentialSubject**: `IJsonLdNodeObject` \| `IJsonLdNodeObject`[]

The data for the verifiable credential.

***

### credentialStatus?

> `optional` **credentialStatus**: [`IDidCredentialStatus`](IDidCredentialStatus.md)

Used to discover information about the current status of the
verifiable credential, such as whether it is suspended or revoked.

***

### issuer?

> `optional` **issuer**: `string`

The issuing identity.

***

### issuanceDate?

> `optional` **issuanceDate**: `string`

The date the verifiable credential was issued.

***

### validFrom?

> `optional` **validFrom**: `string`

The date the verifiable credential is valid from.

***

### validUntil?

> `optional` **validUntil**: `string`

The date the verifiable credential is valid until.

***

### evidence?

> `optional` **evidence**: `IJsonLdNodeObject` \| `IJsonLdNodeObject`[]

Evidence associated with the Credential.

***

### proof?

> `optional` **proof**: [`IDidProof`](IDidProof.md) \| [`IDidProof`](IDidProof.md)[]

Proofs that the verifiable credential is valid.
Optional if a different proof method is used, such as JWT.
