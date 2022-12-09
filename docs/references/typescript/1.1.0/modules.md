[@openfabr/cdf](README.md) / Exports

# @openfabr/cdf

## Table of contents

### Namespaces

- [awscdk](modules/awscdk.md)
- [cdktf](modules/cdktf.md)

### For both project creators and package authors

- [CloudVendor](enums/CloudVendor.md)
- [ToolingLanguage](enums/ToolingLanguage.md)
- [ToolingRuntime](enums/ToolingRuntime.md)
- [InfraConfig](classes/InfraConfig.md)
- [InfraPlan](classes/InfraPlan.md)
- [RuntimeConfig](classes/RuntimeConfig.md)
- [TraitConfig](classes/TraitConfig.md)
- [ComponentConfig](interfaces/ComponentConfig.md)
- [ConfigError](interfaces/ConfigError.md)
- [GeneralConfig](interfaces/GeneralConfig.md)
- [ImplError](interfaces/ImplError.md)
- [MessageAware](interfaces/MessageAware.md)
- [NameAware](interfaces/NameAware.md)
- [NetworkConfig](interfaces/NetworkConfig.md)
- [PlanError](interfaces/PlanError.md)
- [RelationConfig](interfaces/RelationConfig.md)
- [ServiceConfig](interfaces/ServiceConfig.md)
- [SubtypeAware](interfaces/SubtypeAware.md)
- [TypeAware](interfaces/TypeAware.md)
- [InfraPlanOutputs](modules.md#infraplanoutputs)

### For project creators

- [Custom](classes/Custom.md)
- [Orchestrator](classes/Orchestrator.md)

### For package authors

- [Planner](classes/Planner.md)
- [InfraPlanConstructs](interfaces/InfraPlanConstructs.md)

## For both project creators and package authors

• **CloudVendor**: `Object`

A list of cloud vendors.
The purpose of defining them is to regulate their names throughout the framework and all packages.

#### Defined in

[src/lib/domain.ts:15](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/domain.ts#L15)

• **ToolingLanguage**: `Object`

A list of IaC languages.
The purpose of defining them is to regulate their names throughout the framework and all packages.

#### Defined in

[src/lib/domain.ts:42](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/domain.ts#L42)

• **ToolingRuntime**: `Object`

A list of IaC runtime.
The purpose of defining them is to regulate their names throughout the framework and all packages.

#### Defined in

[src/lib/domain.ts:29](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/domain.ts#L29)

• **InfraConfig**<`GC`, `NC`, `CC`, `SC`, `RC`\>: `Object`

Concrete class that models the configuration for an infra project when using a package.
It has 5 top-level sections (general, network, components, services and relations), each of which is expected to extended by packages for their own needs.

 Usually there is no need to extend this class.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `GC` | extends [`GeneralConfig`](interfaces/GeneralConfig.md) |
| `NC` | extends [`NetworkConfig`](interfaces/NetworkConfig.md) |
| `CC` | extends [`ComponentConfig`](interfaces/ComponentConfig.md) |
| `SC` | extends [`ServiceConfig`](interfaces/ServiceConfig.md) |
| `RC` | extends [`RelationConfig`](interfaces/RelationConfig.md) |

#### Defined in

[src/lib/config.ts:143](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/config.ts#L143)

• **InfraPlan**<`IPC`\>: `Object`

Concrete class that carries both the generated infra baseline and all the outputs as a result.

 Usually there is no need to extend this class.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `IPC` | extends [`InfraPlanConstructs`](interfaces/InfraPlanConstructs.md) |

#### Defined in

[src/lib/package.ts:43](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/package.ts#L43)

• **RuntimeConfig**<`SC`\>: `Object`

Concrete class for a group of services sharing the same *runtime*.

 Usually there is no need to extend this class.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SC` | extends [`ServiceConfig`](interfaces/ServiceConfig.md) |

#### Defined in

[src/lib/config.ts:61](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/config.ts#L61)

• **TraitConfig**<`CC`\>: `Object`

Concrete class for a group of components sharing the same *trait*.

 Usually there is no need to extend this class.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CC` | extends [`ComponentConfig`](interfaces/ComponentConfig.md) |

#### Defined in

[src/lib/config.ts:101](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/config.ts#L101)

• **ComponentConfig**: `Object`

Interface for a *component* segment in the configuration.
It is expected to be extended by packages to carry detailed information about a particular component type.

#### Defined in

[src/lib/config.ts:134](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/config.ts#L134)

• **ConfigError**: `Object`

Interface that offers a configuration *error* type which optionally indicates which field is the offending one.
It is expected to be implemented.

#### Defined in

[src/lib/domain.ts:97](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/domain.ts#L97)

• **GeneralConfig**: `Object`

Interface for the top-level *general* section of the configuration.
It can be extended by any packages if intended to.

#### Defined in

[src/lib/config.ts:15](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/config.ts#L15)

• **ImplError**: `Object`

Interface that offers an implementation *error* type.
It is expected to be implemented.

#### Defined in

[src/lib/domain.ts:107](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/domain.ts#L107)

• **MessageAware**: `Object`

Interface that offers a message field.
It is expected to be implemented.

#### Defined in

[src/lib/domain.ts:87](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/domain.ts#L87)

• **NameAware**: `Object`

Interface that offers a URL-friendly name field.
It is expected to be implemented.

#### Defined in

[src/lib/domain.ts:57](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/domain.ts#L57)

• **NetworkConfig**: `Object`

Interface for the top-level *network* section of the configuration.
It can be extended by any packages if intended to.

#### Defined in

[src/lib/config.ts:23](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/config.ts#L23)

• **PlanError**: `Object`

Interface that offers an planning *error* type.
It is expected to be implemented.

#### Defined in

[src/lib/domain.ts:115](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/domain.ts#L115)

• **RelationConfig**: `Object`

Interface for a *relation* segment in the configuration.
It is expected to be extended by packages to carry detailed information about a particular relation type.

#### Defined in

[src/lib/config.ts:40](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/config.ts#L40)

• **ServiceConfig**: `Object`

Interface for a *service* segment in the configuration.
It is expected to be extended by packages to carry detailed information about a particular service type.

#### Defined in

[src/lib/config.ts:93](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/config.ts#L93)

• **SubtypeAware**: `Object`

Interface that offers a subtype field
It is expected to be implemented, usually with [TypeAware](interfaces/TypeAware.md) together.

#### Defined in

[src/lib/domain.ts:77](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/domain.ts#L77)

• **TypeAware**: `Object`

Interface that offers a type field.
It is expected to be implemented.

#### Defined in

[src/lib/domain.ts:67](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/domain.ts#L67)

### InfraPlanOutputs

Ƭ **InfraPlanOutputs**: `Map`<`string`, `any`\>

Short-hand type representing outputs from the infra baseline generated by a package.
It is commonly used for information (such as displaying) purposes.

It should be used as-is. The `map` structure with `any` value offers flexibility.

#### Defined in

[src/lib/package.ts:35](https://github.com/openfabr/cdf/blob/ea0e7b7/core/typescript/src/lib/package.ts#L35)
