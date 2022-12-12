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

• **command**: `string`

The shell command to run deployment with the package.

#### Defined in

[src/lib/metadata.ts:56](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L56)

___

### language

• **language**: [`ToolingLanguage`](../enums/ToolingLanguage.md)

The supported IaC language.

#### Defined in

[src/lib/metadata.ts:64](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L64)

___

### runtime

• **runtime**: [`ToolingRuntime`](../enums/ToolingRuntime.md)

The supported IaC runtime.

#### Defined in

[src/lib/metadata.ts:60](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L60)

___

### vendors

• **vendors**: [`CloudVendor`](../enums/CloudVendor.md)[]

The supported cloud vendors.
Usually a package chooses support one vendor but some choose to have multiple-vendor support.

#### Defined in

[src/lib/metadata.ts:69](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L69)
