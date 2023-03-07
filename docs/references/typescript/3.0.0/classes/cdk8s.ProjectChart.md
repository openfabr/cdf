[@openfabr/cdf](../README.md) / [Exports](../modules.md) / [cdk8s](../modules/cdk8s.md) / ProjectChart

# Class: ProjectChart<IPC, GC, NC, CC, SC, RC\>

[cdk8s](../modules/cdk8s.md).ProjectChart

Chart as top-level construct with cdk8s as IaC runtime.

## Type parameters

| Name | Type |
| :------ | :------ |
| `IPC` | extends [`InfraPlanConstructs`](../interfaces/InfraPlanConstructs.md) |
| `GC` | extends [`GeneralConfig`](../interfaces/GeneralConfig.md) |
| `NC` | extends [`NetworkConfig`](../interfaces/NetworkConfig.md) |
| `CC` | extends [`ComponentConfig`](../interfaces/ComponentConfig.md) |
| `SC` | extends [`ServiceConfig`](../interfaces/ServiceConfig.md) |
| `RC` | extends [`RelationConfig`](../interfaces/RelationConfig.md) |

## Hierarchy

- `Chart`

  ↳ **`ProjectChart`**

## Table of contents

### Constructors

- [constructor](cdk8s.ProjectChart.md#constructor)

### Properties

- [namespace](cdk8s.ProjectChart.md#namespace)
- [node](cdk8s.ProjectChart.md#node)

### Accessors

- [labels](cdk8s.ProjectChart.md#labels)

### Methods

- [addDependency](cdk8s.ProjectChart.md#adddependency)
- [generateObjectName](cdk8s.ProjectChart.md#generateobjectname)
- [toJson](cdk8s.ProjectChart.md#tojson)
- [toString](cdk8s.ProjectChart.md#tostring)
- [isChart](cdk8s.ProjectChart.md#ischart)
- [isConstruct](cdk8s.ProjectChart.md#isconstruct)
- [of](cdk8s.ProjectChart.md#of)

## Constructors

### constructor

• **new ProjectChart**<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>(`scope`, `id`, `props`)

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

| Name | Type |
| :------ | :------ |
| `scope` | `Construct` |
| `id` | `string` |
| `props` | [`ProjectChartProps`](../interfaces/cdk8s.ProjectChartProps.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\> |

#### Overrides

Chart.constructor

#### Defined in

[src/lib/bootstrap/cdk8s/chart.ts:46](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/bootstrap/cdk8s/chart.ts#L46)

## Properties

### namespace

• `Optional` `Readonly` **namespace**: `string`

The default namespace for all objects in this chart.

#### Inherited from

Chart.namespace

#### Defined in

node_modules/cdk8s/lib/chart.d.ts:36

___

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

Chart.node

#### Defined in

node_modules/constructs/lib/construct.d.ts:247

## Accessors

### labels

• `get` **labels**(): `Object`

Labels applied to all resources in this chart.

This is an immutable copy.

#### Returns

`Object`

#### Inherited from

Chart.labels

#### Defined in

node_modules/cdk8s/lib/chart.d.ts:47

## Methods

### addDependency

▸ **addDependency**(...`dependencies`): `void`

Create a dependency between this Chart and other constructs.
These can be other ApiObjects, Charts, or custom.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...dependencies` | `IConstruct`[] | the dependencies to add. |

#### Returns

`void`

#### Inherited from

Chart.addDependency

#### Defined in

node_modules/cdk8s/lib/chart.d.ts:77

___

### generateObjectName

▸ **generateObjectName**(`apiObject`): `string`

Generates a app-unique name for an object given it's construct node path.

Different resource types may have different constraints on names
(`metadata.name`). The previous version of the name generator was
compatible with DNS_SUBDOMAIN but not with DNS_LABEL.

For example, `Deployment` names must comply with DNS_SUBDOMAIN while
`Service` names must comply with DNS_LABEL.

Since there is no formal specification for this, the default name
generation scheme for kubernetes objects in cdk8s was changed to DNS_LABEL,
since it’s the common denominator for all kubernetes resources
(supposedly).

You can override this method if you wish to customize object names at the
chart level.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiObject` | `ApiObject` | The API object to generate a name for. |

#### Returns

`string`

#### Inherited from

Chart.generateObjectName

#### Defined in

node_modules/cdk8s/lib/chart.d.ts:70

___

### toJson

▸ **toJson**(): `any`[]

Renders this chart to a set of Kubernetes JSON resources.

#### Returns

`any`[]

array of resource manifests

#### Inherited from

Chart.toJson

#### Defined in

node_modules/cdk8s/lib/chart.d.ts:82

___

### toString

▸ **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

Chart.toString

#### Defined in

node_modules/constructs/lib/construct.d.ts:260

___

### isChart

▸ `Static` **isChart**(`x`): x is Chart

Return whether the given object is a Chart.

We do attribute detection since we can't reliably use 'instanceof'.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

x is Chart

#### Inherited from

Chart.isChart

#### Defined in

node_modules/cdk8s/lib/chart.d.ts:27

___

### isConstruct

▸ `Static` **isConstruct**(`x`): x is Construct

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `any` | Any object |

#### Returns

x is Construct

true if `x` is an object created from a class which extends `Construct`.

#### Inherited from

Chart.isConstruct

#### Defined in

node_modules/constructs/lib/construct.d.ts:243

___

### of

▸ `Static` **of**(`c`): `Chart`

Finds the chart in which a node is defined.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | `IConstruct` | a construct node |

#### Returns

`Chart`

#### Inherited from

Chart.of

#### Defined in

node_modules/cdk8s/lib/chart.d.ts:32
