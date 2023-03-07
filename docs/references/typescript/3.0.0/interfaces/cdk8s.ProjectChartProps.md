[@openfabr/cdf](../README.md) / [Exports](../modules.md) / [cdk8s](../modules/cdk8s.md) / ProjectChartProps

# Interface: ProjectChartProps<IPC, GC, NC, CC, SC, RC\>

[cdk8s](../modules/cdk8s.md).ProjectChartProps

Properties for [ProjectChart](../classes/cdk8s.ProjectChart.md).

## Type parameters

| Name | Type |
| :------ | :------ |
| `IPC` | extends [`InfraPlanConstructs`](InfraPlanConstructs.md) |
| `GC` | extends [`GeneralConfig`](GeneralConfig.md) |
| `NC` | extends [`NetworkConfig`](NetworkConfig.md) |
| `CC` | extends [`ComponentConfig`](ComponentConfig.md) |
| `SC` | extends [`ServiceConfig`](ServiceConfig.md) |
| `RC` | extends [`RelationConfig`](RelationConfig.md) |

## Hierarchy

- `ChartProps`

  ↳ **`ProjectChartProps`**

## Table of contents

### Properties

- [handler](cdk8s.ProjectChartProps.md#handler)
- [labels](cdk8s.ProjectChartProps.md#labels)
- [namespace](cdk8s.ProjectChartProps.md#namespace)
- [orchestrator](cdk8s.ProjectChartProps.md#orchestrator)

## Properties

### handler

• `Optional` **handler**: [`ResultHandler`](../classes/ResultHandler.md)

#### Defined in

[src/lib/bootstrap/cdk8s/chart.ts:30](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/bootstrap/cdk8s/chart.ts#L30)

___

### labels

• `Optional` `Readonly` **labels**: `Object`

Labels to apply to all resources in this chart.

**`Default`**

- no common labels

#### Index signature

▪ [name: `string`]: `string`

#### Inherited from

ChartProps.labels

#### Defined in

node_modules/cdk8s/lib/chart.d.ts:17

___

### namespace

• `Optional` `Readonly` **namespace**: `string`

The default namespace for all objects defined in this chart (directly or
indirectly). This namespace will only apply to objects that don't have a
`namespace` explicitly defined for them.

**`Default`**

- no namespace is synthesized (usually this implies "default")

#### Inherited from

ChartProps.namespace

#### Defined in

node_modules/cdk8s/lib/chart.d.ts:11

___

### orchestrator

• **orchestrator**: [`Orchestrator`](../classes/Orchestrator.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>

#### Defined in

[src/lib/bootstrap/cdk8s/chart.ts:29](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/bootstrap/cdk8s/chart.ts#L29)
