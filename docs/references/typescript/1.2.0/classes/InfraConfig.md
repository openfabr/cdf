[@openfabr/cdf](../README.md) / [Exports](../modules.md) / InfraConfig

# Class: InfraConfig<GC, NC, CC, SC, RC\>

Concrete class that models the configuration for an infra project when using a package.
It has 5 top-level sections (general, network, components, services and relations), each of which is expected to extended by packages for their own needs.

 Usually there is no need to extend this class.

## Type parameters

| Name | Type |
| :------ | :------ |
| `GC` | extends [`GeneralConfig`](../interfaces/GeneralConfig.md) |
| `NC` | extends [`NetworkConfig`](../interfaces/NetworkConfig.md) |
| `CC` | extends [`ComponentConfig`](../interfaces/ComponentConfig.md) |
| `SC` | extends [`ServiceConfig`](../interfaces/ServiceConfig.md) |
| `RC` | extends [`RelationConfig`](../interfaces/RelationConfig.md) |

## Table of contents

### Constructors

- [constructor](InfraConfig.md#constructor)

### Properties

- [components](InfraConfig.md#components)
- [general](InfraConfig.md#general)
- [network](InfraConfig.md#network)
- [relations](InfraConfig.md#relations)
- [services](InfraConfig.md#services)

## Constructors

### constructor

• **new InfraConfig**<`GC`, `NC`, `CC`, `SC`, `RC`\>(`general`, `network`, `components`, `services`, `relations`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `GC` | extends [`GeneralConfig`](../interfaces/GeneralConfig.md) |
| `NC` | extends [`NetworkConfig`](../interfaces/NetworkConfig.md) |
| `CC` | extends [`ComponentConfig`](../interfaces/ComponentConfig.md) |
| `SC` | extends [`ServiceConfig`](../interfaces/ServiceConfig.md) |
| `RC` | extends [`RelationConfig`](../interfaces/RelationConfig.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `general` | `GC` | Top-level **general** section. |
| `network` | `NC` | Top-level **network** section. |
| `components` | [`TraitConfig`](TraitConfig.md)<`CC`\>[] | Top-level **components** section which carries a list of *trait* sub-sections. |
| `services` | [`RuntimeConfig`](RuntimeConfig.md)<`SC`\>[] | Top-level **services** section which carries a list of *runtime* sub-sections. |
| `relations` | `RC`[] | Top-level **relations** section which carries a list of *relation* sub-section. |

#### Defined in

[src/lib/config.ts:150](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/config.ts#L150)

## Properties

### components

• `Readonly` **components**: [`TraitConfig`](TraitConfig.md)<`CC`\>[]

Top-level **components** section which carries a list of *trait* sub-sections.

#### Defined in

[src/lib/config.ts:162](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/config.ts#L162)

___

### general

• `Readonly` **general**: `GC`

Top-level **general** section.

#### Defined in

[src/lib/config.ts:154](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/config.ts#L154)

___

### network

• `Readonly` **network**: `NC`

Top-level **network** section.

#### Defined in

[src/lib/config.ts:158](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/config.ts#L158)

___

### relations

• `Readonly` **relations**: `RC`[]

Top-level **relations** section which carries a list of *relation* sub-section.

#### Defined in

[src/lib/config.ts:170](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/config.ts#L170)

___

### services

• `Readonly` **services**: [`RuntimeConfig`](RuntimeConfig.md)<`SC`\>[]

Top-level **services** section which carries a list of *runtime* sub-sections.

#### Defined in

[src/lib/config.ts:166](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/config.ts#L166)
