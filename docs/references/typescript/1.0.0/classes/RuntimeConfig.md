[@openfabr/cdf](../README.md) / [Exports](../modules.md) / RuntimeConfig

# Class: RuntimeConfig<SC\>

Concrete class for a group of services sharing the same *runtime*.

 Usually there is no need to extend this class.

## Type parameters

| Name | Type |
| :------ | :------ |
| `SC` | extends [`ServiceConfig`](../interfaces/ServiceConfig.md) |

## Implements

- [`NameAware`](../interfaces/NameAware.md)
- [`TypeAware`](../interfaces/TypeAware.md)
- [`SubtypeAware`](../interfaces/SubtypeAware.md)

## Table of contents

### Constructors

- [constructor](RuntimeConfig.md#constructor)

### Properties

- [config](RuntimeConfig.md#config)
- [details](RuntimeConfig.md#details)
- [name](RuntimeConfig.md#name)
- [subtype](RuntimeConfig.md#subtype)
- [type](RuntimeConfig.md#type)

## Constructors

### constructor

• **new RuntimeConfig**<`SC`\>(`name`, `type`, `subtype`, `details`, `config?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SC` | extends [`ServiceConfig`](../interfaces/ServiceConfig.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of the runtime. |
| `type` | `string` | Type of the runtime. |
| `subtype` | `string` | Subtype of the runtime. |
| `details` | `SC`[] | A list of services sharing the same runtime. |
| `config?` | `SC` | The fallback config that applies to all services defined for the runtime. |

#### Defined in

[src/lib/config.ts:64](https://github.com/openfabr/cdf/blob/dc6dbfc/core/typescript/src/lib/config.ts#L64)

## Properties

### config

• `Optional` `Readonly` **config**: `SC`

The fallback config that applies to all services defined for the runtime.

#### Defined in

[src/lib/config.ts:84](https://github.com/openfabr/cdf/blob/dc6dbfc/core/typescript/src/lib/config.ts#L84)

___

### details

• `Readonly` **details**: `SC`[]

A list of services sharing the same runtime.

#### Defined in

[src/lib/config.ts:80](https://github.com/openfabr/cdf/blob/dc6dbfc/core/typescript/src/lib/config.ts#L80)

___

### name

• `Readonly` **name**: `string`

Name of the runtime.

#### Implementation of

[NameAware](../interfaces/NameAware.md).[name](../interfaces/NameAware.md#name)

#### Defined in

[src/lib/config.ts:68](https://github.com/openfabr/cdf/blob/dc6dbfc/core/typescript/src/lib/config.ts#L68)

___

### subtype

• `Readonly` **subtype**: `string`

Subtype of the runtime.

#### Implementation of

[SubtypeAware](../interfaces/SubtypeAware.md).[subtype](../interfaces/SubtypeAware.md#subtype)

#### Defined in

[src/lib/config.ts:76](https://github.com/openfabr/cdf/blob/dc6dbfc/core/typescript/src/lib/config.ts#L76)

___

### type

• `Readonly` **type**: `string`

Type of the runtime.

#### Implementation of

[TypeAware](../interfaces/TypeAware.md).[type](../interfaces/TypeAware.md#type)

#### Defined in

[src/lib/config.ts:72](https://github.com/openfabr/cdf/blob/dc6dbfc/core/typescript/src/lib/config.ts#L72)
