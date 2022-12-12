[@openfabr/cdf](../README.md) / [Exports](../modules.md) / ComponentsInfo

# Interface: ComponentsInfo

Interface that represents information about available component constructs.

## Hierarchy

- [`OptionalIconAware`](OptionalIconAware.md)

- [`OptionalDescAware`](OptionalDescAware.md)

  ↳ **`ComponentsInfo`**

## Table of contents

### Properties

- [description](ComponentsInfo.md#description)
- [icon](ComponentsInfo.md#icon)
- [types](ComponentsInfo.md#types)

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

Available types and subtypes for components.

#### Index signature

▪ [key: `string`]: [`ComponentType`](ComponentType.md)

#### Defined in

[src/lib/metadata.ts:113](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L113)
