[@openfabr/cdf](../README.md) / [Exports](../modules.md) / ConstructsInfo

# Interface: ConstructsInfo

Interface that represents information about custom (code blocks) construct.
Most notably it includes a reference to the code template.

## Table of contents

### Properties

- [components](ConstructsInfo.md#components)
- [custom](ConstructsInfo.md#custom)
- [network](ConstructsInfo.md#network)
- [relations](ConstructsInfo.md#relations)
- [schema](ConstructsInfo.md#schema)
- [services](ConstructsInfo.md#services)

## Properties

### components

• `Readonly` **components**: [`ComponentsInfo`](ComponentsInfo.md)

Information about components.

#### Defined in

[src/lib/metadata.ts:178](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/metadata.ts#L178)

___

### custom

• `Readonly` **custom**: [`CustomInfo`](CustomInfo.md)

Information about custom (code blocks).

#### Defined in

[src/lib/metadata.ts:190](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/metadata.ts#L190)

___

### network

• `Readonly` **network**: [`NetworkInfo`](NetworkInfo.md)

Information about network.

#### Defined in

[src/lib/metadata.ts:174](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/metadata.ts#L174)

___

### relations

• `Readonly` **relations**: [`RelationsInfo`](RelationsInfo.md)

Information about relations.

#### Defined in

[src/lib/metadata.ts:186](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/metadata.ts#L186)

___

### schema

• `Readonly` **schema**: `string`

The reference to the json schema file for creating a valid json config when using the package.

#### Defined in

[src/lib/metadata.ts:170](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/metadata.ts#L170)

___

### services

• `Readonly` **services**: [`ServicesInfo`](ServicesInfo.md)

Information about services.

#### Defined in

[src/lib/metadata.ts:182](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/metadata.ts#L182)
