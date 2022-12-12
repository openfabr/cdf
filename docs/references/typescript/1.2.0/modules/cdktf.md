[@openfabr/cdf](../README.md) / [Exports](../modules.md) / cdktf

# Namespace: cdktf

## Table of contents

### For project creators

- [ProjectStack](../classes/cdktf.ProjectStack.md)
- [ProjectStackProps](../interfaces/cdktf.ProjectStackProps.md)
- [initProjectStack](cdktf.md#initprojectstack)

## For project creators

• **ProjectStack**<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>: `Object`

Stack as top-level construct with CDKTF as IaC runtime.

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

[src/lib/bootstrap/cdktf/stack.ts:37](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/bootstrap/cdktf/stack.ts#L37)

• **ProjectStackProps**<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>: `Object`

Properties for [ProjectStack](../classes/cdktf.ProjectStack.md).

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

[src/lib/bootstrap/cdktf/stack.ts:21](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/bootstrap/cdktf/stack.ts#L21)

### initProjectStack

▸ **initProjectStack**<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>(`scope`, `config`, `planner`, `modules`, `name?`): [`ProjectStack`](../classes/cdktf.ProjectStack.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>

Convenient function that constructs a top-level stack with CDKTF as IaC runtime.

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
| `scope` | `App` | Parent construct, usually an `App` instance in CDKTF. |
| `config` | [`InfraConfig`](../classes/InfraConfig.md)<`GC`, `NC`, `CC`, `SC`, `RC`\> | The project configuration. |
| `planner` | [`Planner`](../classes/Planner.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\> | The planner offered by the package. |
| `modules` | [`Custom`](../classes/Custom.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>[] | Custom code modules for the project. |
| `name?` | `string` | Optionally the name of the resulting stack. |

#### Returns

[`ProjectStack`](../classes/cdktf.ProjectStack.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>

A top-level stack to be provisioned in a project.

#### Defined in

[src/lib/bootstrap/cdktf/stack.ts:68](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/bootstrap/cdktf/stack.ts#L68)
