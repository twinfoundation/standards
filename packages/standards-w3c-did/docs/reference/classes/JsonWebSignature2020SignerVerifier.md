# Class: JsonWebSignature2020SignerVerifier

Helper methods for creating and verifying proofs.

## Implements

- [`IProofSignerVerifier`](../interfaces/IProofSignerVerifier.md)

## Constructors

### new JsonWebSignature2020SignerVerifier()

> **new JsonWebSignature2020SignerVerifier**(): [`JsonWebSignature2020SignerVerifier`](JsonWebSignature2020SignerVerifier.md)

#### Returns

[`JsonWebSignature2020SignerVerifier`](JsonWebSignature2020SignerVerifier.md)

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### createProof()

> **createProof**(`unsecuredDocument`, `unsignedProof`, `signKey`): `Promise`\<`IJsonLdNodeObject`\>

Create a proof for the given data.

#### Parameters

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

#### Implementation of

[`IProofSignerVerifier`](../interfaces/IProofSignerVerifier.md).[`createProof`](../interfaces/IProofSignerVerifier.md#createproof)

***

### verifyProof()

> **verifyProof**(`securedDocument`, `signedProof`, `verifyKey`): `Promise`\<`boolean`\>

Verify a proof for the given data in format.

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

#### Implementation of

[`IProofSignerVerifier`](../interfaces/IProofSignerVerifier.md).[`verifyProof`](../interfaces/IProofSignerVerifier.md#verifyproof)

***

### createHash()

> **createHash**(`unsecuredDocument`, `unsignedProof`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Create a hash for the given data.

#### Parameters

##### unsecuredDocument

`IJsonLdNodeObject`

The data to create the proof for.

##### unsignedProof

`IJsonLdNodeObject`

The unsigned proof.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The created hash.

#### Implementation of

[`IProofSignerVerifier`](../interfaces/IProofSignerVerifier.md).[`createHash`](../interfaces/IProofSignerVerifier.md#createhash)
