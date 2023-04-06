[@openfabr/cdf](../README.md) / [Exports](../modules.md) / [pulumi](../modules/pulumi.md) / ProjectComponentOpts

# Interface: ProjectComponentOpts<IPC, GC, NC, CC, SC, RC\>

[pulumi](../modules/pulumi.md).ProjectComponentOpts

Properties for [ProjectComponent](../classes/pulumi.ProjectComponent.md).

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

- `ComponentResourceOptions`

  ↳ **`ProjectComponentOpts`**

## Table of contents

### Properties

- [aliases](pulumi.ProjectComponentOpts.md#aliases)
- [customTimeouts](pulumi.ProjectComponentOpts.md#customtimeouts)
- [deletedWith](pulumi.ProjectComponentOpts.md#deletedwith)
- [dependsOn](pulumi.ProjectComponentOpts.md#dependson)
- [handler](pulumi.ProjectComponentOpts.md#handler)
- [id](pulumi.ProjectComponentOpts.md#id)
- [ignoreChanges](pulumi.ProjectComponentOpts.md#ignorechanges)
- [orchestrator](pulumi.ProjectComponentOpts.md#orchestrator)
- [parent](pulumi.ProjectComponentOpts.md#parent)
- [pluginDownloadURL](pulumi.ProjectComponentOpts.md#plugindownloadurl)
- [protect](pulumi.ProjectComponentOpts.md#protect)
- [provider](pulumi.ProjectComponentOpts.md#provider)
- [providers](pulumi.ProjectComponentOpts.md#providers)
- [replaceOnChanges](pulumi.ProjectComponentOpts.md#replaceonchanges)
- [retainOnDelete](pulumi.ProjectComponentOpts.md#retainondelete)
- [transformations](pulumi.ProjectComponentOpts.md#transformations)
- [urn](pulumi.ProjectComponentOpts.md#urn)
- [version](pulumi.ProjectComponentOpts.md#version)

## Properties

### aliases

• `Optional` **aliases**: `Input`<`string` \| `Alias`\>[]

An optional list of aliases to treat this resource as matching.

#### Inherited from

ComponentResourceOptions.aliases

#### Defined in

node_modules/@pulumi/pulumi/resource.d.ts:144

___

### customTimeouts

• `Optional` **customTimeouts**: `CustomTimeouts`

An optional customTimeouts configuration block.

#### Inherited from

ComponentResourceOptions.customTimeouts

#### Defined in

node_modules/@pulumi/pulumi/resource.d.ts:156

___

### deletedWith

• `Optional` **deletedWith**: `Resource`

If set, the providers Delete method will not be called for this resource
if specified is being deleted as well.

#### Inherited from

ComponentResourceOptions.deletedWith

#### Defined in

node_modules/@pulumi/pulumi/resource.d.ts:181

___

### dependsOn

• `Optional` **dependsOn**: `Input`<`Resource`\> \| `Input`<`Input`<`Resource`\>[]\>

An optional additional explicit dependencies on other resources.

#### Inherited from

ComponentResourceOptions.dependsOn

#### Defined in

node_modules/@pulumi/pulumi/resource.d.ts:120

___

### handler

• `Optional` **handler**: [`ResultHandler`](../classes/ResultHandler.md)

#### Defined in

[src/lib/bootstrap/pulumi/component.ts:29](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/bootstrap/pulumi/component.ts#L29)

___

### id

• `Optional` **id**: `Input`<`string`\>

An optional existing ID to load, rather than create.

#### Inherited from

ComponentResourceOptions.id

#### Defined in

node_modules/@pulumi/pulumi/resource.d.ts:112

___

### ignoreChanges

• `Optional` **ignoreChanges**: `string`[]

Ignore changes to any of the specified properties.

#### Inherited from

ComponentResourceOptions.ignoreChanges

#### Defined in

node_modules/@pulumi/pulumi/resource.d.ts:128

___

### orchestrator

• **orchestrator**: [`Orchestrator`](../classes/Orchestrator.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>

#### Defined in

[src/lib/bootstrap/pulumi/component.ts:28](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/bootstrap/pulumi/component.ts#L28)

___

### parent

• `Optional` **parent**: `Resource`

An optional parent resource to which this resource belongs.

#### Inherited from

ComponentResourceOptions.parent

#### Defined in

node_modules/@pulumi/pulumi/resource.d.ts:116

___

### pluginDownloadURL

• `Optional` **pluginDownloadURL**: `string`

An option to specify the URL from which to download this resources
associated plugin. This version overrides the URL information inferred
from the current package and should rarely be used.

#### Inherited from

ComponentResourceOptions.pluginDownloadURL

#### Defined in

node_modules/@pulumi/pulumi/resource.d.ts:172

___

### protect

• `Optional` **protect**: `boolean`

When set to true, protect ensures this resource cannot be deleted.

#### Inherited from

ComponentResourceOptions.protect

#### Defined in

node_modules/@pulumi/pulumi/resource.d.ts:124

___

### provider

• `Optional` **provider**: `ProviderResource`

An optional provider to use for this resource's CRUD operations. If no provider is supplied,
the default provider for the resource's package will be used. The default provider is pulled
from the parent's provider bag (see also ComponentResourceOptions.providers).

If this is a [ComponentResourceOptions] do not provide both [provider] and [providers]

#### Inherited from

ComponentResourceOptions.provider

#### Defined in

node_modules/@pulumi/pulumi/resource.d.ts:152

___

### providers

• `Optional` **providers**: `Record`<`string`, `ProviderResource`\> \| `ProviderResource`[]

An optional set of providers to use for child resources. Either keyed by package name (e.g.
"aws"), or just provided as an array.  In the latter case, the package name will be retrieved
from the provider itself.

Note: only a list should be used. Mapping keys are not respected.

#### Inherited from

ComponentResourceOptions.providers

#### Defined in

node_modules/@pulumi/pulumi/resource.d.ts:280

___

### replaceOnChanges

• `Optional` **replaceOnChanges**: `string`[]

Changes to any of these property paths will force a replacement.  If this list includes `"*"`, changes to any
properties will force a replacement.  Initialization errors from previous deployments will require replacement
instead of update only if `"*"` is passed.

#### Inherited from

ComponentResourceOptions.replaceOnChanges

#### Defined in

node_modules/@pulumi/pulumi/resource.d.ts:134

___

### retainOnDelete

• `Optional` **retainOnDelete**: `boolean`

If set to True, the providers Delete method will not be called for this resource.

#### Inherited from

ComponentResourceOptions.retainOnDelete

#### Defined in

node_modules/@pulumi/pulumi/resource.d.ts:176

___

### transformations

• `Optional` **transformations**: `ResourceTransformation`[]

Optional list of transformations to apply to this resource during construction. The
transformations are applied in order, and are applied prior to transformation applied to
parents walking from the resource up to the stack.

#### Inherited from

ComponentResourceOptions.transformations

#### Defined in

node_modules/@pulumi/pulumi/resource.d.ts:162

___

### urn

• `Optional` **urn**: `string`

The URN of a previously-registered resource of this type to read from the engine.

#### Inherited from

ComponentResourceOptions.urn

#### Defined in

node_modules/@pulumi/pulumi/resource.d.ts:166

___

### version

• `Optional` **version**: `string`

An optional version, corresponding to the version of the provider plugin that should be used when operating on
this resource. This version overrides the version information inferred from the current package and should
rarely be used.

#### Inherited from

ComponentResourceOptions.version

#### Defined in

node_modules/@pulumi/pulumi/resource.d.ts:140
