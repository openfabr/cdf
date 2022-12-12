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

• **components**: [`ComponentsInfo`](ComponentsInfo.md)

Information about components.

#### Defined in

[src/lib/metadata.ts:170](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L170)

___

### custom

• **custom**: [`CustomInfo`](CustomInfo.md)

Information about custom (code blocks).

#### Defined in

[src/lib/metadata.ts:182](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L182)

___

### network

• **network**: [`NetworkInfo`](NetworkInfo.md)

Information about network.

#### Defined in

[src/lib/metadata.ts:166](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L166)

___

### relations

• **relations**: [`RelationsInfo`](RelationsInfo.md)

Information about relations.

#### Defined in

[src/lib/metadata.ts:178](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L178)

___

### schema

• **schema**: `string`

The reference to the json schema file for creating a valid json config when using the package.

#### Defined in

[src/lib/metadata.ts:162](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L162)

___

### services

• **services**: [`ServicesInfo`](ServicesInfo.md)

Information about services.

#### Defined in

[src/lib/metadata.ts:174](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L174)
