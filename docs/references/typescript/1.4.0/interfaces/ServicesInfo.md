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

Available types and subtypes for services, keyed by a unique identifier among all components/services/relations.

#### Index signature

▪ [key: `string`]: [`ServiceType`](ServiceType.md)

#### Defined in

[src/lib/metadata.ts:130](https://github.com/openfabr/cdf/blob/8dc07b3/core/typescript/src/lib/metadata.ts#L130)
