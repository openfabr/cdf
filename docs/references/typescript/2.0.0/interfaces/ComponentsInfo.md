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

• `Optional` `Readonly` **description**: `string`

#### Inherited from

[OptionalDescAware](OptionalDescAware.md).[description](OptionalDescAware.md#description)

#### Defined in

[src/lib/metadata.ts:33](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/metadata.ts#L33)

___

### icon

• `Optional` `Readonly` **icon**: `string`

#### Inherited from

[OptionalIconAware](OptionalIconAware.md).[icon](OptionalIconAware.md#icon)

#### Defined in

[src/lib/metadata.ts:17](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/metadata.ts#L17)

___

### types

• `Readonly` **types**: `Object`

Available types and subtypes for components, keyed by a unique identifier among all components/services/relations.

#### Index signature

▪ [key: `string`]: [`ComponentType`](ComponentType.md)

#### Defined in

[src/lib/metadata.ts:138](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/metadata.ts#L138)
