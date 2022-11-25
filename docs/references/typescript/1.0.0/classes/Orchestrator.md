[@openfabr/cdf](../README.md) / [Exports](../modules.md) / Orchestrator

# Class: Orchestrator<IPC, GC, NC, CC, SC, RC\>

Concrete class that orchestrates an infra provisioning run.
It takes a project configuration, coupled with a package to generate baseline infra, and then augments it with custom code supplied by the project.

It should be used as-is. *In rare occasions it can be extended to influence how the infra provisioning pipeline works - with caution.*

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

- [constructor](Orchestrator.md#constructor)

### Properties

- [customModules](Orchestrator.md#custommodules)
- [infraConfig](Orchestrator.md#infraconfig)
- [packagePlanner](Orchestrator.md#packageplanner)

### Methods

- [runIn](Orchestrator.md#runin)

## Constructors

### constructor

• **new Orchestrator**<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>(`infraConfig`, `packagePlanner`, `customModules`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `IPC` | extends [`InfraPlanConstructs`](../interfaces/InfraPlanConstructs.md) |
| `GC` | extends [`GeneralConfig`](../interfaces/GeneralConfig.md) |
| `NC` | extends [`NetworkConfig`](../interfaces/NetworkConfig.md) |
| `CC` | extends [`ComponentConfig`](../interfaces/ComponentConfig.md) |
| `SC` | extends [`ServiceConfig`](../interfaces/ServiceConfig.md) |
| `RC` | extends [`RelationConfig`](../interfaces/RelationConfig.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `infraConfig` | [`InfraConfig`](InfraConfig.md)<`GC`, `NC`, `CC`, `SC`, `RC`\> | The project configuration in full. |
| `packagePlanner` | [`Planner`](Planner.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\> | The planner offered by the package. |
| `customModules` | [`Custom`](Custom.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>[] | Custom code modules for the project. |

#### Defined in

[src/lib/orchestrator.ts:43](https://github.com/openfabr/cdf/blob/dc6dbfc/core/typescript/src/lib/orchestrator.ts#L43)

## Properties

### customModules

• `Readonly` **customModules**: [`Custom`](Custom.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>[]

Custom code modules for the project.

#### Defined in

[src/lib/orchestrator.ts:46](https://github.com/openfabr/cdf/blob/dc6dbfc/core/typescript/src/lib/orchestrator.ts#L46)

___

### infraConfig

• `Readonly` **infraConfig**: [`InfraConfig`](InfraConfig.md)<`GC`, `NC`, `CC`, `SC`, `RC`\>

The project configuration in full.

#### Defined in

[src/lib/orchestrator.ts:44](https://github.com/openfabr/cdf/blob/dc6dbfc/core/typescript/src/lib/orchestrator.ts#L44)

___

### packagePlanner

• `Readonly` **packagePlanner**: [`Planner`](Planner.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>

The planner offered by the package.

#### Defined in

[src/lib/orchestrator.ts:45](https://github.com/openfabr/cdf/blob/dc6dbfc/core/typescript/src/lib/orchestrator.ts#L45)

## Methods

### runIn

▸ **runIn**(`scope`): `Result`<[`InfraPlanOutputs`](../modules.md#infraplanoutputs), [`PlanError`](../interfaces/PlanError.md)\>

Running the infra provisioning.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | `any` | Depending on the IaC runtime, it can be a stack object defined in AWS CDK and CDKTF, or absent for other runtime without the construct-based structure. |

#### Returns

`Result`<[`InfraPlanOutputs`](../modules.md#infraplanoutputs), [`PlanError`](../interfaces/PlanError.md)\>

Result that encapsulates either outputs [InfraPlanOutputs](../modules.md#infraplanoutputs) if successful, or error [PlanError](../interfaces/PlanError.md) if failed.

#### Defined in

[src/lib/orchestrator.ts:56](https://github.com/openfabr/cdf/blob/dc6dbfc/core/typescript/src/lib/orchestrator.ts#L56)
