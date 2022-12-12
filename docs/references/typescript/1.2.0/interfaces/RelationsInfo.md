[@openfabr/cdf](../README.md) / [Exports](../modules.md) / RelationsInfo

# Interface: RelationsInfo

Interface that represents information about available relation constructs.
It relies on the typing definitions in both ComponentInfo and [ServicesInfo](ServicesInfo.md).

## Hierarchy

- [`OptionalIconAware`](OptionalIconAware.md)

- [`OptionalDescAware`](OptionalDescAware.md)

  ↳ **`RelationsInfo`**

## Table of contents

### Properties

- [description](RelationsInfo.md#description)
- [icon](RelationsInfo.md#icon)
- [types](RelationsInfo.md#types)

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

Available relations between a specific component/service and another component/service.
Both the key and value here refer to the entries defined in `components` and `services` fields.

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/lib/metadata.ts:139](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L139)
