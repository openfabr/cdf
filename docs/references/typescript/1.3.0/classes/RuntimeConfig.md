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

[src/lib/config.ts:51](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/config.ts#L51)

## Properties

### config

• `Optional` `Readonly` **config**: `SC`

The fallback config that applies to all services defined for the runtime.

#### Defined in

[src/lib/config.ts:71](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/config.ts#L71)

___

### details

• `Readonly` **details**: `SC`[]

A list of services sharing the same runtime.

#### Defined in

[src/lib/config.ts:67](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/config.ts#L67)

___

### name

• `Readonly` **name**: `string`

Name of the runtime.

#### Implementation of

[NameAware](../interfaces/NameAware.md).[name](../interfaces/NameAware.md#name)

#### Defined in

[src/lib/config.ts:55](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/config.ts#L55)

___

### subtype

• `Readonly` **subtype**: `string`

Subtype of the runtime.

#### Implementation of

[SubtypeAware](../interfaces/SubtypeAware.md).[subtype](../interfaces/SubtypeAware.md#subtype)

#### Defined in

[src/lib/config.ts:63](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/config.ts#L63)

___

### type

• `Readonly` **type**: `string`

Type of the runtime.

#### Implementation of

[TypeAware](../interfaces/TypeAware.md).[type](../interfaces/TypeAware.md#type)

#### Defined in

[src/lib/config.ts:59](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/config.ts#L59)
