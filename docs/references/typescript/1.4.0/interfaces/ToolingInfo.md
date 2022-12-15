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

• `Readonly` **command**: `string`

The shell command to run deployment with the package.

#### Defined in

[src/lib/metadata.ts:57](https://github.com/openfabr/cdf/blob/8dc07b3/core/typescript/src/lib/metadata.ts#L57)

___

### language

• `Readonly` **language**: [`ToolingLanguage`](../enums/ToolingLanguage.md)

The supported IaC language.

#### Defined in

[src/lib/metadata.ts:65](https://github.com/openfabr/cdf/blob/8dc07b3/core/typescript/src/lib/metadata.ts#L65)

___

### runtime

• `Readonly` **runtime**: [`ToolingRuntime`](../enums/ToolingRuntime.md)

The supported IaC runtime.

#### Defined in

[src/lib/metadata.ts:61](https://github.com/openfabr/cdf/blob/8dc07b3/core/typescript/src/lib/metadata.ts#L61)

___

### vendors

• `Readonly` **vendors**: [`CloudVendor`](../enums/CloudVendor.md)[]

The supported cloud vendors.
Usually a package chooses support one vendor but some choose to have multiple-vendor support.

#### Defined in

[src/lib/metadata.ts:70](https://github.com/openfabr/cdf/blob/8dc07b3/core/typescript/src/lib/metadata.ts#L70)
