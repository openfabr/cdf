[@openfabr/cdf](../README.md) / [Exports](../modules.md) / cdk8s

# Namespace: cdk8s

## Table of contents

### For project creators

- [ProjectChart](../classes/cdk8s.ProjectChart.md)
- [ProjectChartProps](../interfaces/cdk8s.ProjectChartProps.md)
- [initProjectChart](cdk8s.md#initprojectchart)

## For project creators

• **ProjectChart**<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>: `Object`

Chart as top-level construct with cdk8s as IaC runtime.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `IPC` | extends [`InfraPlanConstructs`](../interfaces/InfraPlanConstructs.md) |
| `GC` | extends [`GeneralConfig`](../interfaces/GeneralConfig.md) |
| `NC` | extends [`NetworkConfig`](../interfaces/NetworkConfig.md) |
| `CC` | extends [`ComponentConfig`](../interfaces/ComponentConfig.md) |
| `SC` | extends [`ServiceConfig`](../interfaces/ServiceConfig.md) |
| `RC` | extends [`RelationConfig`](../interfaces/RelationConfig.md) |

#### Defined in

[src/lib/bootstrap/cdk8s/chart.ts:38](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/bootstrap/cdk8s/chart.ts#L38)

• **ProjectChartProps**<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>: `Object`

Properties for [ProjectChart](../classes/cdk8s.ProjectChart.md).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `IPC` | extends [`InfraPlanConstructs`](../interfaces/InfraPlanConstructs.md) |
| `GC` | extends [`GeneralConfig`](../interfaces/GeneralConfig.md) |
| `NC` | extends [`NetworkConfig`](../interfaces/NetworkConfig.md) |
| `CC` | extends [`ComponentConfig`](../interfaces/ComponentConfig.md) |
| `SC` | extends [`ServiceConfig`](../interfaces/ServiceConfig.md) |
| `RC` | extends [`RelationConfig`](../interfaces/RelationConfig.md) |

#### Defined in

[src/lib/bootstrap/cdk8s/chart.ts:21](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/bootstrap/cdk8s/chart.ts#L21)

### initProjectChart

▸ **initProjectChart**<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>(`scope`, `config`, `planner`, `modules`, `name?`, `handler?`): [`ProjectChart`](../classes/cdk8s.ProjectChart.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>

Convenient function that constructs a top-level chart with cdk8s as IaC runtime.

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
| `scope` | `App` | Parent construct, usually an `App` instance in cdk8s. |
| `config` | [`InfraConfig`](../classes/InfraConfig.md)<`GC`, `NC`, `CC`, `SC`, `RC`\> | The project configuration. |
| `planner` | [`Planner`](../classes/Planner.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\> | The planner offered by the package. |
| `modules` | [`Custom`](../classes/Custom.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>[] | Custom code modules for the project. |
| `name?` | `string` | Optionally the name of the resulting chart. |
| `handler?` | [`ResultHandler`](../classes/ResultHandler.md) | Optionally the result handler. |

#### Returns

[`ProjectChart`](../classes/cdk8s.ProjectChart.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>

A top-level chart to be provisioned in a project.

#### Defined in

[src/lib/bootstrap/cdk8s/chart.ts:71](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/bootstrap/cdk8s/chart.ts#L71)
