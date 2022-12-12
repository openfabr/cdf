[@openfabr/cdf](../README.md) / [Exports](../modules.md) / PackageManifest

# Interface: PackageManifest

Interface for modelling a package manifest json file that provides informations about the package.
Crucially it also carries two references respectively to a) a json schema file for validating json config files and b) a template file for custom code blocks.

## Hierarchy

- [`OptionalIconAware`](OptionalIconAware.md)

  ↳ **`PackageManifest`**

## Table of contents

### Properties

- [cdf](PackageManifest.md#cdf)
- [constructs](PackageManifest.md#constructs)
- [description](PackageManifest.md#description)
- [icon](PackageManifest.md#icon)
- [identifier](PackageManifest.md#identifier)
- [license](PackageManifest.md#license)
- [name](PackageManifest.md#name)
- [support](PackageManifest.md#support)
- [tooling](PackageManifest.md#tooling)
- [vendor](PackageManifest.md#vendor)

## Properties

### cdf

• **cdf**: `string`

The version of OpenFABR CDF that this package is compatible with, following semantic versioning.

#### Defined in

[src/lib/metadata.ts:221](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L221)

___

### constructs

• **constructs**: [`ConstructsInfo`](ConstructsInfo.md)

Information about constructs defined in the package.

#### Defined in

[src/lib/metadata.ts:229](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L229)

___

### description

• `Optional` **description**: `string`

The description of the package.

#### Defined in

[src/lib/metadata.ts:213](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L213)

___

### icon

• `Optional` **icon**: `string`

#### Inherited from

[OptionalIconAware](OptionalIconAware.md).[icon](OptionalIconAware.md#icon)

#### Defined in

[src/lib/metadata.ts:16](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L16)

___

### identifier

• **identifier**: `string`

The unique identifier of the package.

#### Defined in

[src/lib/metadata.ts:199](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L199)

___

### license

• **license**: `string`

The SPDX license identifier for the license that the package is released under.

**`See`**

[SPDX](https://spdx.org/licenses/)

#### Defined in

[src/lib/metadata.ts:209](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L209)

___

### name

• `Optional` **name**: `string`

The descriptive name of the package.

#### Defined in

[src/lib/metadata.ts:195](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L195)

___

### support

• `Optional` **support**: [`SupportInfo`](SupportInfo.md)

Information about the support provided for the package.

#### Defined in

[src/lib/metadata.ts:217](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L217)

___

### tooling

• **tooling**: [`ToolingInfo`](ToolingInfo.md)

Information about tooling the package relies on.

#### Defined in

[src/lib/metadata.ts:225](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L225)

___

### vendor

• **vendor**: `string`

The author of the package.

#### Defined in

[src/lib/metadata.ts:203](https://github.com/openfabr/cdf/blob/e70ef03/core/typescript/src/lib/metadata.ts#L203)
