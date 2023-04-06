[@openfabr/cdf](../README.md) / [Exports](../modules.md) / ToolingCommandInfo

# Interface: ToolingCommandInfo

Interface that offers command information about the underlying tooling in the package.

## Table of contents

### Properties

- [destroy](ToolingCommandInfo.md#destroy)
- [others](ToolingCommandInfo.md#others)
- [provision](ToolingCommandInfo.md#provision)

## Properties

### destroy

• `Readonly` **destroy**: `string`

The destroy command, such as 'cdktf destroy' for a typical CDK for Terraform based package.

#### Defined in

[src/lib/metadata.ts:69](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L69)

___

### others

• `Optional` `Readonly` **others**: `Object`

The optional list of other available commands made available by a package.

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/lib/metadata.ts:73](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L73)

___

### provision

• `Readonly` **provision**: `string`

The provision command, such as 'cdk deploy' for a typical AWS CDK based package.

#### Defined in

[src/lib/metadata.ts:65](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L65)
