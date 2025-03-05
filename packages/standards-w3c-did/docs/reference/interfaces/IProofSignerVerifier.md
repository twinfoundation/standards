# Interface: IProofSignerVerifier

Interface describing a proof signer and verifier.

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

***

### verifyProof()

> **verifyProof**(`securedDocument`, `signedProof`, `verifyKey`): `Promise`\<`boolean`\>

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
