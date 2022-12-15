[@openfabr/cdf](../README.md) / [Exports](../modules.md) / RelationsInfo

# Interface: RelationsInfo

Interface that represents information about available relation constructs, keyed by a unique identifier among all components/services/relations.
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

• `Optional` `Readonly` **description**: `string`

#### Inherited from

[OptionalDescAware](OptionalDescAware.md).[description](OptionalDescAware.md#description)

#### Defined in

[src/lib/metadata.ts:25](https://github.com/openfabr/cdf/blob/8dc07b3/core/typescript/src/lib/metadata.ts#L25)

___

### icon

• `Optional` `Readonly` **icon**: `string`

#### Inherited from

[OptionalIconAware](OptionalIconAware.md).[icon](OptionalIconAware.md#icon)

#### Defined in

[src/lib/metadata.ts:17](https://github.com/openfabr/cdf/blob/8dc07b3/core/typescript/src/lib/metadata.ts#L17)

___

### types

• `Readonly` **types**: `Object`

Available relations between a specific component/service and another component/service.
Both the `start` and `finish` points here refer to the keys defined in `components` and `services` fields.

#### Index signature

▪ [key: `string`]: [`Connectable`](Connectable.md)

#### Defined in

[src/lib/metadata.ts:144](https://github.com/openfabr/cdf/blob/8dc07b3/core/typescript/src/lib/metadata.ts#L144)
