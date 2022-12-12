[@openfabr/cdf](../README.md) / [Exports](../modules.md) / TraitConfig

# Class: TraitConfig<CC\>

Concrete class for a group of components sharing the same *trait*.

 Usually there is no need to extend this class.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CC` | extends [`ComponentConfig`](../interfaces/ComponentConfig.md) |

## Implements

- [`NameAware`](../interfaces/NameAware.md)
- [`TypeAware`](../interfaces/TypeAware.md)
- [`SubtypeAware`](../interfaces/SubtypeAware.md)

## Table of contents

### Constructors

- [constructor](TraitConfig.md#constructor)

### Properties

- [config](TraitConfig.md#config)
- [details](TraitConfig.md#details)
- [name](TraitConfig.md#name)
- [subtype](TraitConfig.md#subtype)
- [type](TraitConfig.md#type)

## Constructors

### constructor

• **new TraitConfig**<`CC`\>(`name`, `type`, `subtype`, `details`, `config?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CC` | extends [`ComponentConfig`](../interfaces/ComponentConfig.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of the trait. |
| `type` | `string` | Type of the trait. |
| `subtype` | `string` | Subtype of the trait. |
| `details` | `CC`[] | A list of components sharing the same trait. |
| `config?` | `CC` | The fallback config that applies to all components defined for the trait. |

#### Defined in

[src/lib/config.ts:104](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/config.ts#L104)

## Properties

### config

• `Optional` `Readonly` **config**: `CC`

The fallback config that applies to all components defined for the trait.

#### Defined in

[src/lib/config.ts:124](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/config.ts#L124)

___

### details

• `Readonly` **details**: `CC`[]

A list of components sharing the same trait.

#### Defined in

[src/lib/config.ts:120](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/config.ts#L120)

___

### name

• `Readonly` **name**: `string`

Name of the trait.

#### Implementation of

[NameAware](../interfaces/NameAware.md).[name](../interfaces/NameAware.md#name)

#### Defined in

[src/lib/config.ts:108](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/config.ts#L108)

___

### subtype

• `Readonly` **subtype**: `string`

Subtype of the trait.

#### Implementation of

[SubtypeAware](../interfaces/SubtypeAware.md).[subtype](../interfaces/SubtypeAware.md#subtype)

#### Defined in

[src/lib/config.ts:116](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/config.ts#L116)

___

### type

• `Readonly` **type**: `string`

Type of the trait.

#### Implementation of

[TypeAware](../interfaces/TypeAware.md).[type](../interfaces/TypeAware.md#type)

#### Defined in

[src/lib/config.ts:112](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/config.ts#L112)
