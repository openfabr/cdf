[@openfabr/cdf](README.md) / Exports

# @openfabr/cdf

## Table of contents

### Namespaces

- [awscdk](modules/awscdk.md)
- [cdk8s](modules/cdk8s.md)
- [cdktf](modules/cdktf.md)
- [pulumi](modules/pulumi.md)

### For both project creators and package authors

- [CloudVendor](enums/CloudVendor.md)
- [ToolingLanguage](enums/ToolingLanguage.md)
- [ToolingRuntime](enums/ToolingRuntime.md)
- [InfraConfig](classes/InfraConfig.md)
- [InfraPlan](classes/InfraPlan.md)
- [RuntimeConfig](classes/RuntimeConfig.md)
- [TraitConfig](classes/TraitConfig.md)
- [ComponentConfig](interfaces/ComponentConfig.md)
- [ComponentType](interfaces/ComponentType.md)
- [ComponentsInfo](interfaces/ComponentsInfo.md)
- [ConfigError](interfaces/ConfigError.md)
- [Connectable](interfaces/Connectable.md)
- [ConstructsInfo](interfaces/ConstructsInfo.md)
- [CustomInfo](interfaces/CustomInfo.md)
- [GeneralConfig](interfaces/GeneralConfig.md)
- [ImplError](interfaces/ImplError.md)
- [MessageAware](interfaces/MessageAware.md)
- [NameAware](interfaces/NameAware.md)
- [NetworkConfig](interfaces/NetworkConfig.md)
- [NetworkInfo](interfaces/NetworkInfo.md)
- [OptionalIconAware](interfaces/OptionalIconAware.md)
- [PackageManifest](interfaces/PackageManifest.md)
- [PlanError](interfaces/PlanError.md)
- [RelationConfig](interfaces/RelationConfig.md)
- [RelationType](interfaces/RelationType.md)
- [RelationsInfo](interfaces/RelationsInfo.md)
- [ServiceConfig](interfaces/ServiceConfig.md)
- [ServiceType](interfaces/ServiceType.md)
- [ServicesInfo](interfaces/ServicesInfo.md)
- [SubtypeAware](interfaces/SubtypeAware.md)
- [SupportInfo](interfaces/SupportInfo.md)
- [ToolingInfo](interfaces/ToolingInfo.md)
- [TypeAware](interfaces/TypeAware.md)
- [InfraPlanOutputs](modules.md#infraplanoutputs)

### For project creators

- [Custom](classes/Custom.md)
- [Orchestrator](classes/Orchestrator.md)

### For package authors

- [Planner](classes/Planner.md)
- [ResultHandler](classes/ResultHandler.md)
- [InfraPlanConstructs](interfaces/InfraPlanConstructs.md)

### Interfaces

- [OptionalDescAware](interfaces/OptionalDescAware.md)
- [OptionalLabelAware](interfaces/OptionalLabelAware.md)

### for both project creators and package authors

- [ToolingCommandInfo](interfaces/ToolingCommandInfo.md)

## For both project creators and package authors

• **CloudVendor**: `Object`

A list of cloud vendors.
The purpose of defining them is to regulate their names throughout the framework and all packages.

#### Defined in

[src/lib/domain.ts:15](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/domain.ts#L15)

• **ToolingLanguage**: `Object`

A list of IaC languages.
The purpose of defining them is to regulate their names throughout the framework and all packages.

#### Defined in

[src/lib/domain.ts:81](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/domain.ts#L81)

• **ToolingRuntime**: `Object`

A list of IaC runtime.
The purpose of defining them is to regulate their names throughout the framework and all packages.

#### Defined in

[src/lib/domain.ts:52](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/domain.ts#L52)

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

[src/lib/config.ts:130](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/config.ts#L130)

• **InfraPlan**<`IPC`\>: `Object`

Concrete class that carries both the generated infra baseline and all the outputs as a result.

 Usually there is no need to extend this class.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `IPC` | extends [`InfraPlanConstructs`](interfaces/InfraPlanConstructs.md) |

#### Defined in

[src/lib/package.ts:43](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/package.ts#L43)

• **RuntimeConfig**<`SC`\>: `Object`

Concrete class for a group of services sharing the same *runtime*.

 Usually there is no need to extend this class.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SC` | extends [`ServiceConfig`](interfaces/ServiceConfig.md) |

#### Defined in

[src/lib/config.ts:48](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/config.ts#L48)

• **TraitConfig**<`CC`\>: `Object`

Concrete class for a group of components sharing the same *trait*.

 Usually there is no need to extend this class.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CC` | extends [`ComponentConfig`](interfaces/ComponentConfig.md) |

#### Defined in

[src/lib/config.ts:88](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/config.ts#L88)

• **ComponentConfig**: `Object`

Interface for a *component* segment in the configuration.
It is expected to be extended by packages to carry detailed information about a particular component type.

#### Defined in

[src/lib/config.ts:121](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/config.ts#L121)

• **ComponentType**: `Object`

Interface that represents a typing classification for components.

#### Defined in

[src/lib/metadata.ts:108](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L108)

• **ComponentsInfo**: `Object`

Interface that represents information about available component constructs.

#### Defined in

[src/lib/metadata.ts:156](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L156)

• **ConfigError**: `Object`

Interface that offers a configuration *error* type which optionally indicates which field is the offending one.
It is expected to be implemented.

#### Defined in

[src/lib/domain.ts:169](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/domain.ts#L169)

• **Connectable**: `Object`

Interface that models a connection starts from one point and finishes at another, with indication whether the connection is bidirectional.

#### Defined in

[src/lib/domain.ts:147](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/domain.ts#L147)

• **ConstructsInfo**: `Object`

Interface that represents information about custom (code blocks) construct.
Most notably it includes a reference to the code template.

#### Defined in

[src/lib/metadata.ts:208](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L208)

• **CustomInfo**: `Object`

Interface that represents information about custom (code blocks) construct.
Most notably it includes a reference to the code template.

#### Defined in

[src/lib/metadata.ts:195](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L195)

• **GeneralConfig**: `Object`

Interface for the top-level *general* section of the configuration.
It can be extended by any packages if intended to.

#### Defined in

[src/lib/config.ts:15](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/config.ts#L15)

• **ImplError**: `Object`

Interface that offers an implementation *error* type.
It is expected to be implemented.

#### Defined in

[src/lib/domain.ts:179](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/domain.ts#L179)

• **MessageAware**: `Object`

Interface that offers a message field.
It is expected to be implemented.

#### Defined in

[src/lib/domain.ts:159](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/domain.ts#L159)

• **NameAware**: `Object`

Interface that offers a URL-friendly name field.
It is expected to be implemented.

#### Defined in

[src/lib/domain.ts:118](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/domain.ts#L118)

• **NetworkConfig**: `Object`

Interface for the top-level *network* section of the configuration.
It can be extended by any packages if intended to.

#### Defined in

[src/lib/config.ts:23](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/config.ts#L23)

• **NetworkInfo**: `Object`

Interface that represents information about network construct.

#### Defined in

[src/lib/metadata.ts:149](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L149)

• **OptionalIconAware**: `Object`

Interface that offers an optional icon field.
This is normally a valid URL pointing to the icon file publicly available on the web; alternative formats such as Font Awesome can be supported later.

#### Defined in

[src/lib/metadata.ts:16](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L16)

• **PackageManifest**: `Object`

Interface for modelling a package manifest json file that provides informations about the package.
Crucially it also carries two references respectively to a) a json schema file for validating json config files and b) a template file for custom code blocks.

#### Defined in

[src/lib/metadata.ts:243](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L243)

• **PlanError**: `Object`

Interface that offers an planning *error* type.
It is expected to be implemented.

#### Defined in

[src/lib/domain.ts:187](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/domain.ts#L187)

• **RelationConfig**: `Object`

Interface for a *relation* segment in the configuration.
It is expected to be extended by packages to carry detailed information about a particular relation type.

#### Defined in

[src/lib/config.ts:40](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/config.ts#L40)

• **RelationType**: `Object`

Interface that represents a typing classification for relations.

#### Defined in

[src/lib/metadata.ts:138](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L138)

• **RelationsInfo**: `Object`

Interface that represents information about available relation constructs, keyed by a unique identifier among all components/services/relations.
It relies on the typing definitions in both ComponentInfo and [ServicesInfo](interfaces/ServicesInfo.md).

#### Defined in

[src/lib/metadata.ts:181](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L181)

• **ServiceConfig**: `Object`

Interface for a *service* segment in the configuration.
It is expected to be extended by packages to carry detailed information about a particular service type.

#### Defined in

[src/lib/config.ts:80](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/config.ts#L80)

• **ServiceType**: `Object`

Interface that represents a typing classification for services.
In particular, it contains a field for deployment instructions for the type of services defined.

#### Defined in

[src/lib/metadata.ts:120](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L120)

• **ServicesInfo**: `Object`

Interface that represents information about available service constructs.

#### Defined in

[src/lib/metadata.ts:168](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L168)

• **SubtypeAware**: `Object`

Interface that offers a subtype field.
It is expected to be implemented, usually with [TypeAware](interfaces/TypeAware.md) together.

#### Defined in

[src/lib/domain.ts:138](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/domain.ts#L138)

• **SupportInfo**: `Object`

Interface that offers support information about the package.

#### Defined in

[src/lib/metadata.ts:41](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L41)

• **ToolingInfo**: `Object`

Interface that offers information about IaC tooling.

#### Defined in

[src/lib/metadata.ts:81](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L81)

• **TypeAware**: `Object`

Interface that offers a type field.
It is expected to be implemented.

#### Defined in

[src/lib/domain.ts:128](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/domain.ts#L128)

### InfraPlanOutputs

Ƭ **InfraPlanOutputs**: `Map`<`string`, `any`\>

Short-hand type representing outputs from the infra baseline generated by a package.
It is commonly used for information (such as displaying) purposes.

It should be used as-is. The `map` structure with `any` value offers flexibility.

#### Defined in

[src/lib/package.ts:35](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/package.ts#L35)
