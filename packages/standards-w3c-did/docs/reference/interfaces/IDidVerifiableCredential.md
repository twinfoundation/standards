# Interface: IDidVerifiableCredential

Interface describing a verifiable credential.
https://www.w3.org/TR/vc-data-model-2.0

## Properties

### @context

> **@context**: `"https://www.w3.org/2018/credentials/v1"` \| `"https://www.w3.org/ns/credentials/v2"` \| \[`"https://www.w3.org/ns/credentials/v2"`, `...IJsonLdContextDefinitionElement[]`\] \| \[`"https://www.w3.org/2018/credentials/v1"`, `...IJsonLdContextDefinitionElement[]`\]

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

### credentialSubject?

> `optional` **credentialSubject**: `IJsonLdNodeObject` \| `IJsonLdNodeObject`[]

The data for the verifiable credential.

***

### credentialStatus?

> `optional` **credentialStatus**: [`IDidCredentialStatus`](IDidCredentialStatus.md) \| [`IDidCredentialStatus`](IDidCredentialStatus.md)[]

Used to discover information about the current status of the
verifiable credential, such as whether it is suspended or revoked.

***

### credentialSchema?

> `optional` **credentialSchema**: [`IDidCredentialSchema`](IDidCredentialSchema.md) \| [`IDidCredentialSchema`](IDidCredentialSchema.md)[]

Annotate type definitions or lock them to specific versions of the vocabulary.

***

### issuer?

> `optional` **issuer**: `string` \| \{ `id`: `string`; `name`: `string` \| [`IDidLabel`](IDidLabel.md)[]; `description`: `string` \| [`IDidLabel`](IDidLabel.md)[]; \}

The issuing identity.

***

### issuanceDate?

> `optional` **issuanceDate**: `string`

The date the verifiable credential was issued.

***

### name?

> `optional` **name**: `string` \| [`IDidLabel`](IDidLabel.md)[]

The name of the credential.

***

### description?

> `optional` **description**: `string` \| [`IDidLabel`](IDidLabel.md)[]

The description of the credential.

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

> `optional` **proof**: [`IDataIntegrityProof`](IDataIntegrityProof.md) \| [`IJsonWebSignature2020Proof`](IJsonWebSignature2020Proof.md) \| ([`IDataIntegrityProof`](IDataIntegrityProof.md) \| [`IJsonWebSignature2020Proof`](IJsonWebSignature2020Proof.md))[]

Proofs that the verifiable credential is valid.
Optional if a different proof method is used, such as JWT.
