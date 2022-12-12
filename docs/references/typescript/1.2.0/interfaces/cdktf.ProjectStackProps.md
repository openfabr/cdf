[@openfabr/cdf](../README.md) / [Exports](../modules.md) / [cdktf](../modules/cdktf.md) / ProjectStackProps

# Interface: ProjectStackProps<IPC, GC, NC, CC, SC, RC\>

[cdktf](../modules/cdktf.md).ProjectStackProps

Properties for [ProjectStack](../classes/cdktf.ProjectStack.md).

## Type parameters

| Name | Type |
| :------ | :------ |
| `IPC` | extends [`InfraPlanConstructs`](InfraPlanConstructs.md) |
| `GC` | extends [`GeneralConfig`](GeneralConfig.md) |
| `NC` | extends [`NetworkConfig`](NetworkConfig.md) |
| `CC` | extends [`ComponentConfig`](ComponentConfig.md) |
| `SC` | extends [`ServiceConfig`](ServiceConfig.md) |
| `RC` | extends [`RelationConfig`](RelationConfig.md) |

## Table of contents

### Properties

- [orchestrator](cdktf.ProjectStackProps.md#orchestrator)

## Properties

### orchestrator

• **orchestrator**: [`Orchestrator`](../classes/Orchestrator.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>

#### Defined in

[src/lib/bootstrap/cdktf/stack.ts:29](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/bootstrap/cdktf/stack.ts#L29)
