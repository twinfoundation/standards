# Class: ProofHelper

Helper methods for creating and verifying proofs.

## Constructors

### new ProofHelper()

> **new ProofHelper**(): [`ProofHelper`](ProofHelper.md)

#### Returns

[`ProofHelper`](ProofHelper.md)

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### createSignerVerifier()

> `static` **createSignerVerifier**(`proofType`): [`IProofSignerVerifier`](../interfaces/IProofSignerVerifier.md)

Create a signer verifier.

#### Parameters

##### proofType

[`ProofTypes`](../type-aliases/ProofTypes.md)

The type of proof to create.

#### Returns

[`IProofSignerVerifier`](../interfaces/IProofSignerVerifier.md)

The created signer verifier.

#### Throws

GeneralError if the proof type is not supported.

***

### createProof()

> `static` **createProof**(`proofType`, `unsecuredDocument`, `unsignedProof`, `signKey`): `Promise`\<`IJsonLdNodeObject`\>

Create a proof for the given data.

#### Parameters

##### proofType

[`ProofTypes`](../type-aliases/ProofTypes.md)

The type of proof to create.

##### unsecuredDocument

`IJsonLdNodeObject`

The data to create the proof for.

##### unsignedProof

`IJsonLdNodeObject`

The proof options.

##### signKey

`IJwk`

The key to sign the proof with.

#### Returns

`Promise`\<`IJsonLdNodeObject`\>

The created proof.

***

### verifyProof()

> `static` **verifyProof**(`securedDocument`, `signedProof`, `verifyKey`): `Promise`\<`boolean`\>

Verify a proof for the given data.

#### Parameters

##### securedDocument

`IJsonLdNodeObject`

The credential to verify.

##### signedProof

`IJsonLdNodeObject`

The proof to verify.

##### verifyKey

`IJwk`

The public key to verify the proof with.

#### Returns

`Promise`\<`boolean`\>

True if the credential was verified.
