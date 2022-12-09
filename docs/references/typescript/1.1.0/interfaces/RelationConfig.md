[@openfabr/cdf](../README.md) / [Exports](../modules.md) / RelationConfig

# Interface: RelationConfig

Interface for a *relation* segment in the configuration.
It is expected to be extended by packages to carry detailed information about a particular relation type.

## Hierarchy

- [`NameAware`](NameAware.md)

- [`TypeAware`](TypeAware.md)

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

Indicating whether the relation is bidirectional, i.e. no directional difference between start and end points.

#### Defined in

[src/lib/config.ts:52](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/config.ts#L52)

___

### finish

• `Readonly` **finish**: `string`

The end of a relation, specified by the name of a service or component defined in the same configuration.

#### Defined in

[src/lib/config.ts:48](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/config.ts#L48)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[NameAware](NameAware.md).[name](NameAware.md#name)

#### Defined in

[src/lib/domain.ts:58](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/domain.ts#L58)

___

### start

• `Readonly` **start**: `string`

The start of a relation, specified by the name of a service or component defined in the same configuration.

#### Defined in

[src/lib/config.ts:44](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/config.ts#L44)

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[TypeAware](TypeAware.md).[type](TypeAware.md#type)

#### Defined in

[src/lib/domain.ts:68](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/domain.ts#L68)
