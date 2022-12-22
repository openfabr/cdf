[@openfabr/cdf](../README.md) / [Exports](../modules.md) / pulumi

# Namespace: pulumi

## Table of contents

### For project creators

- [ProjectComponent](../classes/pulumi.ProjectComponent.md)
- [ProjectComponentOpts](../interfaces/pulumi.ProjectComponentOpts.md)
- [initProjectComponent](pulumi.md#initprojectcomponent)

## For project creators

• **ProjectComponent**<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>: `Object`

Component as top-level construct with pulumi as IaC runtime.

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

[src/lib/bootstrap/pulumi/component.ts:37](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/bootstrap/pulumi/component.ts#L37)

• **ProjectComponentOpts**<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>: `Object`

Properties for [ProjectComponent](../classes/pulumi.ProjectComponent.md).

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

[src/lib/bootstrap/pulumi/component.ts:20](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/bootstrap/pulumi/component.ts#L20)

### initProjectComponent

▸ **initProjectComponent**<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>(`config`, `planner`, `modules`, `name?`, `handler?`): [`ProjectComponent`](../classes/pulumi.ProjectComponent.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>

Convenient function that constructs a top-level component with pulumi as IaC runtime.

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
| `config` | [`InfraConfig`](../classes/InfraConfig.md)<`GC`, `NC`, `CC`, `SC`, `RC`\> | The project configuration. |
| `planner` | [`Planner`](../classes/Planner.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\> | The planner offered by the package. |
| `modules` | [`Custom`](../classes/Custom.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>[] | Custom code modules for the project. |
| `name?` | `string` | Optionally the name of the resulting component. |
| `handler?` | [`ResultHandler`](../classes/ResultHandler.md) | Optionally the result handler. |

#### Returns

[`ProjectComponent`](../classes/pulumi.ProjectComponent.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>

A top-level component to be provisioned in a project.

#### Defined in

[src/lib/bootstrap/pulumi/component.ts:68](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/bootstrap/pulumi/component.ts#L68)
