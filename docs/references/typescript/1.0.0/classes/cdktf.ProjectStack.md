[@openfabr/cdf](../README.md) / [Exports](../modules.md) / [cdktf](../modules/cdktf.md) / ProjectStack

# Class: ProjectStack<IPC, GC, NC, CC, SC, RC\>

[cdktf](../modules/cdktf.md).ProjectStack

Stack as top-level construct with CDKTF as IaC runtime.

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

- `TerraformStack`

  ↳ **`ProjectStack`**

## Table of contents

### Constructors

- [constructor](cdktf.ProjectStack.md#constructor)

### Properties

- [dependencies](cdktf.ProjectStack.md#dependencies)
- [node](cdktf.ProjectStack.md#node)
- [synthesizer](cdktf.ProjectStack.md#synthesizer)

### Methods

- [addDependency](cdktf.ProjectStack.md#adddependency)
- [addOverride](cdktf.ProjectStack.md#addoverride)
- [allProviders](cdktf.ProjectStack.md#allproviders)
- [allocateLogicalId](cdktf.ProjectStack.md#allocatelogicalid)
- [dependsOn](cdktf.ProjectStack.md#dependson)
- [ensureBackendExists](cdktf.ProjectStack.md#ensurebackendexists)
- [getLogicalId](cdktf.ProjectStack.md#getlogicalid)
- [prepareStack](cdktf.ProjectStack.md#preparestack)
- [registerIncomingCrossStackReference](cdktf.ProjectStack.md#registerincomingcrossstackreference)
- [registerOutgoingCrossStackReference](cdktf.ProjectStack.md#registeroutgoingcrossstackreference)
- [runAllValidations](cdktf.ProjectStack.md#runallvalidations)
- [toString](cdktf.ProjectStack.md#tostring)
- [toTerraform](cdktf.ProjectStack.md#toterraform)
- [isConstruct](cdktf.ProjectStack.md#isconstruct)
- [isStack](cdktf.ProjectStack.md#isstack)
- [of](cdktf.ProjectStack.md#of)

## Constructors

### constructor

• **new ProjectStack**<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>(`scope`, `id`, `props?`)

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
| `props?` | [`ProjectStackProps`](../interfaces/cdktf.ProjectStackProps.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\> |

#### Overrides

TerraformStack.constructor

#### Defined in

[src/lib/bootstrap/cdktf/stack.ts:45](https://github.com/openfabr/cdf/blob/dc6dbfc/core/typescript/src/lib/bootstrap/cdktf/stack.ts#L45)

## Properties

### dependencies

• **dependencies**: `TerraformStack`[]

#### Inherited from

TerraformStack.dependencies

#### Defined in

node_modules/cdktf/lib/terraform-stack.d.ts:20

___

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

TerraformStack.node

#### Defined in

node_modules/constructs/lib/construct.d.ts:247

___

### synthesizer

• **synthesizer**: `IStackSynthesizer`

#### Inherited from

TerraformStack.synthesizer

#### Defined in

node_modules/cdktf/lib/terraform-stack.d.ts:19

## Methods

### addDependency

▸ **addDependency**(`dependency`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dependency` | `TerraformStack` |

#### Returns

`void`

#### Inherited from

TerraformStack.addDependency

#### Defined in

node_modules/cdktf/lib/terraform-stack.d.ts:42

___

### addOverride

▸ **addOverride**(`path`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

TerraformStack.addOverride

#### Defined in

node_modules/cdktf/lib/terraform-stack.d.ts:26

___

### allProviders

▸ **allProviders**(): `TerraformProvider`[]

#### Returns

`TerraformProvider`[]

#### Inherited from

TerraformStack.allProviders

#### Defined in

node_modules/cdktf/lib/terraform-stack.d.ts:36

___

### allocateLogicalId

▸ `Protected` **allocateLogicalId**(`tfElement`): `string`

Returns the naming scheme used to allocate logical IDs. By default, uses
the `HashedAddressingScheme` but this method can be overridden to customize
this behavior.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tfElement` | `Node` \| `TerraformElement` | The element for which the logical ID is allocated. |

#### Returns

`string`

#### Inherited from

TerraformStack.allocateLogicalId

#### Defined in

node_modules/cdktf/lib/terraform-stack.d.ts:35

___

### dependsOn

▸ **dependsOn**(`stack`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stack` | `TerraformStack` |

#### Returns

`boolean`

#### Inherited from

TerraformStack.dependsOn

#### Defined in

node_modules/cdktf/lib/terraform-stack.d.ts:41

___

### ensureBackendExists

▸ **ensureBackendExists**(): `TerraformBackend`

#### Returns

`TerraformBackend`

#### Inherited from

TerraformStack.ensureBackendExists

#### Defined in

node_modules/cdktf/lib/terraform-stack.d.ts:37

___

### getLogicalId

▸ **getLogicalId**(`tfElement`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tfElement` | `Node` \| `TerraformElement` |

#### Returns

`string`

#### Inherited from

TerraformStack.getLogicalId

#### Defined in

node_modules/cdktf/lib/terraform-stack.d.ts:27

___

### prepareStack

▸ **prepareStack**(): `void`

#### Returns

`void`

#### Inherited from

TerraformStack.prepareStack

#### Defined in

node_modules/cdktf/lib/terraform-stack.d.ts:25

___

### registerIncomingCrossStackReference

▸ **registerIncomingCrossStackReference**(`fromStack`): `TerraformRemoteState`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromStack` | `TerraformStack` |

#### Returns

`TerraformRemoteState`

#### Inherited from

TerraformStack.registerIncomingCrossStackReference

#### Defined in

node_modules/cdktf/lib/terraform-stack.d.ts:40

___

### registerOutgoingCrossStackReference

▸ **registerOutgoingCrossStackReference**(`identifier`): `TerraformOutput`

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

`TerraformOutput`

#### Inherited from

TerraformStack.registerOutgoingCrossStackReference

#### Defined in

node_modules/cdktf/lib/terraform-stack.d.ts:39

___

### runAllValidations

▸ **runAllValidations**(): `void`

Run all validations on the stack.

#### Returns

`void`

#### Inherited from

TerraformStack.runAllValidations

#### Defined in

node_modules/cdktf/lib/terraform-stack.d.ts:46

___

### toString

▸ **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

TerraformStack.toString

#### Defined in

node_modules/constructs/lib/construct.d.ts:260

___

### toTerraform

▸ **toTerraform**(): `any`

#### Returns

`any`

#### Inherited from

TerraformStack.toTerraform

#### Defined in

node_modules/cdktf/lib/terraform-stack.d.ts:38

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

TerraformStack.isConstruct

#### Defined in

node_modules/constructs/lib/construct.d.ts:243

___

### isStack

▸ `Static` **isStack**(`x`): x is TerraformStack

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

x is TerraformStack

#### Inherited from

TerraformStack.isStack

#### Defined in

node_modules/cdktf/lib/terraform-stack.d.ts:22

___

### of

▸ `Static` **of**(`construct`): `TerraformStack`

#### Parameters

| Name | Type |
| :------ | :------ |
| `construct` | `IConstruct` |

#### Returns

`TerraformStack`

#### Inherited from

TerraformStack.of

#### Defined in

node_modules/cdktf/lib/terraform-stack.d.ts:23
