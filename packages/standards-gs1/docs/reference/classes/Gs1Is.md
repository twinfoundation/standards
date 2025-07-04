# Class: Gs1Is

Is checks for GS1 data.

## Constructors

### Constructor

> **new Gs1Is**(): `Gs1Is`

#### Returns

`Gs1Is`

## Methods

### isEpcHex()

> `static` **isEpcHex**(`value`): `boolean`

Is the value an EPC identifier.

#### Parameters

##### value

`string`

The value to test.

#### Returns

`boolean`

True if the value is an epc.

***

### isGeoUri()

> `static` **isGeoUri**(`value`): `boolean`

Is the value a valid geo uri https://en.wikipedia.org/wiki/Geo_URI_scheme.

#### Parameters

##### value

`string`

The value to check.

#### Returns

`boolean`

True if the value matches a geo uri.
