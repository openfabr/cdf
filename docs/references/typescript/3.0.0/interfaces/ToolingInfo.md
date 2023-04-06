[@openfabr/cdf](../README.md) / [Exports](../modules.md) / ToolingInfo

# Interface: ToolingInfo

Interface that offers information about IaC tooling.

## Table of contents

### Properties

- [command](ToolingInfo.md#command)
- [language](ToolingInfo.md#language)
- [runtime](ToolingInfo.md#runtime)
- [vendors](ToolingInfo.md#vendors)

## Properties

### command

• `Optional` `Readonly` **command**: [`ToolingCommandInfo`](ToolingCommandInfo.md)

The information about commands available to manage infra with the package.

If not present, it is auto-guessed from both `ToolingRuntime` and `ToolingLanguage`; therefore it is recommended to always provide the info.

#### Defined in

[src/lib/metadata.ts:87](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L87)

___

### language

• `Readonly` **language**: [`ToolingLanguage`](../enums/ToolingLanguage.md)

The supported IaC language.

#### Defined in

[src/lib/metadata.ts:95](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L95)

___

### runtime

• `Readonly` **runtime**: [`ToolingRuntime`](../enums/ToolingRuntime.md)

The supported IaC runtime.

#### Defined in

[src/lib/metadata.ts:91](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L91)

___

### vendors

• `Readonly` **vendors**: [`CloudVendor`](../enums/CloudVendor.md)[]

The supported cloud vendors.
Usually a package chooses support one vendor but some choose to have multiple-vendor support.

#### Defined in

[src/lib/metadata.ts:100](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L100)
