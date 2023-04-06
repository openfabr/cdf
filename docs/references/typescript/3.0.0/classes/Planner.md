[@openfabr/cdf](../README.md) / [Exports](../modules.md) / Planner

# Class: Planner<IPC, GC, NC, CC, SC, RC\>

Abstract class to be extended by packages to generate infra baseline.

## Type parameters

| Name | Type |
| :------ | :------ |
| `IPC` | extends [`InfraPlanConstructs`](../interfaces/InfraPlanConstructs.md) |
| `GC` | extends [`GeneralConfig`](../interfaces/GeneralConfig.md) |
| `NC` | extends [`NetworkConfig`](../interfaces/NetworkConfig.md) |
| `CC` | extends [`ComponentConfig`](../interfaces/ComponentConfig.md) |
| `SC` | extends [`ServiceConfig`](../interfaces/ServiceConfig.md) |
| `RC` | extends [`RelationConfig`](../interfaces/RelationConfig.md) |

## Table of contents

### Constructors

- [constructor](Planner.md#constructor)

### Methods

- [runWith](Planner.md#runwith)

## Constructors

### constructor

• **new Planner**<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `IPC` | extends [`InfraPlanConstructs`](../interfaces/InfraPlanConstructs.md) |
| `GC` | extends [`GeneralConfig`](../interfaces/GeneralConfig.md) |
| `NC` | extends [`NetworkConfig`](../interfaces/NetworkConfig.md) |
| `CC` | extends [`ComponentConfig`](../interfaces/ComponentConfig.md) |
| `SC` | extends [`ServiceConfig`](../interfaces/ServiceConfig.md) |
| `RC` | extends [`RelationConfig`](../interfaces/RelationConfig.md) |

## Methods

### runWith

▸ `Abstract` **runWith**(`config`, `scope`): `Result`<[`InfraPlan`](InfraPlan.md)<`IPC`\>, [`PlanError`](../interfaces/PlanError.md)\>

Provisioning infra according to the configuration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`InfraConfig`](InfraConfig.md)<`GC`, `NC`, `CC`, `SC`, `RC`\> | The project configuration in full. |
| `scope` | `any` | Optional parent construct. |

#### Returns

`Result`<[`InfraPlan`](InfraPlan.md)<`IPC`\>, [`PlanError`](../interfaces/PlanError.md)\>

Result that encapsulates either the infra baseline [InfraPlan](InfraPlan.md) if successful, or error [PlanError](../interfaces/PlanError.md) if failed.

#### Defined in

[src/lib/package.ts:70](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/package.ts#L70)
