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

[src/lib/metadata.ts:199](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/metadata.ts#L199)

___

### custom

• `Optional` `Readonly` **custom**: [`CustomInfo`](CustomInfo.md)

Information about optional custom (code blocks).
Missing this field implies that the package does NOT support custom code blocks.

#### Defined in

[src/lib/metadata.ts:212](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/metadata.ts#L212)

___

### network

• `Optional` `Readonly` **network**: [`NetworkInfo`](NetworkInfo.md)

Information about optional network.
Missing this field implies that the package does NOT support customisable virtual network.

#### Defined in

[src/lib/metadata.ts:195](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/metadata.ts#L195)

___

### relations

• `Readonly` **relations**: [`RelationsInfo`](RelationsInfo.md)

Information about relations.

#### Defined in

[src/lib/metadata.ts:207](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/metadata.ts#L207)

___

### schema

• `Readonly` **schema**: `string`

The reference to the json schema file for creating a valid json config when using the package.

#### Defined in

[src/lib/metadata.ts:190](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/metadata.ts#L190)

___

### services

• `Readonly` **services**: [`ServicesInfo`](ServicesInfo.md)

Information about services.

#### Defined in

[src/lib/metadata.ts:203](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/metadata.ts#L203)
