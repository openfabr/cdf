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

[src/lib/metadata.ts:221](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L221)

___

### custom

• `Optional` `Readonly` **custom**: [`CustomInfo`](CustomInfo.md)

Information about optional custom (code blocks).
Missing this field implies that the package does NOT support custom code blocks.

#### Defined in

[src/lib/metadata.ts:234](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L234)

___

### network

• `Optional` `Readonly` **network**: [`NetworkInfo`](NetworkInfo.md)

Information about optional network.
Missing this field implies that the package does NOT support customisable virtual network.

#### Defined in

[src/lib/metadata.ts:217](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L217)

___

### relations

• `Readonly` **relations**: [`RelationsInfo`](RelationsInfo.md)

Information about relations.

#### Defined in

[src/lib/metadata.ts:229](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L229)

___

### schema

• `Readonly` **schema**: `string`

The reference to the json schema file for creating a valid json config when using the package.

#### Defined in

[src/lib/metadata.ts:212](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L212)

___

### services

• `Readonly` **services**: [`ServicesInfo`](ServicesInfo.md)

Information about services.

#### Defined in

[src/lib/metadata.ts:225](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L225)
