[@openfabr/cdf](../README.md) / [Exports](../modules.md) / ServicesInfo

# Interface: ServicesInfo

Interface that represents information about available service constructs.

## Hierarchy

- [`OptionalIconAware`](OptionalIconAware.md)

- [`OptionalDescAware`](OptionalDescAware.md)

  ↳ **`ServicesInfo`**

## Table of contents

### Properties

- [description](ServicesInfo.md#description)
- [icon](ServicesInfo.md#icon)
- [types](ServicesInfo.md#types)

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

[OptionalDescAware](OptionalDescAware.md).[description](OptionalDescAware.md#description)

#### Defined in

[src/lib/metadata.ts:24](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L24)

___

### icon

• `Optional` **icon**: `string`

#### Inherited from

[OptionalIconAware](OptionalIconAware.md).[icon](OptionalIconAware.md#icon)

#### Defined in

[src/lib/metadata.ts:16](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L16)

___

### types

• **types**: `Object`

Available types and subtypes for services.

#### Index signature

▪ [key: `string`]: [`ServiceType`](ServiceType.md)

#### Defined in

[src/lib/metadata.ts:125](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L125)
