[@openfabr/cdf](../README.md) / [Exports](../modules.md) / RelationConfig

# Interface: RelationConfig

Interface for a *relation* segment in the configuration.
It is expected to be extended by packages to carry detailed information about a particular relation type.

## Hierarchy

- [`NameAware`](NameAware.md)

- [`TypeAware`](TypeAware.md)

- [`Connectable`](Connectable.md)

  ↳ **`RelationConfig`**

## Table of contents

### Properties

- [bidi](RelationConfig.md#bidi)
- [finish](RelationConfig.md#finish)
- [name](RelationConfig.md#name)
- [start](RelationConfig.md#start)
- [type](RelationConfig.md#type)

## Properties

### bidi

• `Readonly` **bidi**: `boolean`

#### Inherited from

[Connectable](Connectable.md).[bidi](Connectable.md#bidi)

#### Defined in

[src/lib/domain.ts:108](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/domain.ts#L108)

___

### finish

• `Readonly` **finish**: `string`

#### Inherited from

[Connectable](Connectable.md).[finish](Connectable.md#finish)

#### Defined in

[src/lib/domain.ts:107](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/domain.ts#L107)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[NameAware](NameAware.md).[name](NameAware.md#name)

#### Defined in

[src/lib/domain.ts:77](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/domain.ts#L77)

___

### start

• `Readonly` **start**: `string`

#### Inherited from

[Connectable](Connectable.md).[start](Connectable.md#start)

#### Defined in

[src/lib/domain.ts:106](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/domain.ts#L106)

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[TypeAware](TypeAware.md).[type](TypeAware.md#type)

#### Defined in

[src/lib/domain.ts:87](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/domain.ts#L87)
