# Interface: IRegistrationNumber

Registration Number as defined by the Gaia-X ontology.
https://docs.gaia-x.eu/ontology/development/classes/RegistrationNumber/

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinition` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{[`key`: `string`]: `string`; \}

## Properties

### type

> **type**: `"RegistrationNumber"` \| `"LocalRegistrationNumber"` \| `"EORI"` \| `"VatID"` \| `"EUID"` \| `"LeiCode"` \| `"TaxID"`

JSON-LD Type.

***

### local?

> `optional` **local**: `string`

Local Registration.

***

### countryCode?

> `optional` **countryCode**: `string`

Country code. See https://docs.gaia-x.eu/ontology/development/enums/CountryNameAlpha2/

***

### subdivisionCountryCode?

> `optional` **subdivisionCountryCode**: `string`

Subdivision country code.
See https://docs.gaia-x.eu/ontology/development/enums/RegionCode/

***

### vatID?

> `optional` **vatID**: `string`

The VAT identification number.

***

### leiCode?

> `optional` **leiCode**: `string`

Unique LEI number as defined by GLEIF.

***

### eori?

> `optional` **eori**: `string`

The Economic Operators Registration and Identification number (EORI).

***

### country?

> `optional` **country**: `string`

The country where the EORI is registered written in plain english

***

### euid?

> `optional` **euid**: `string`

The European Unique Identifier (EUID) for business located in the European Ec.

***

### taxId?

> `optional` **taxId**: `string`

The company tax ID.
