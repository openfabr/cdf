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

• `Readonly` **cdf**: `string`

The version of OpenFABR CDF that this package is compatible with, following semantic versioning.

#### Defined in

[src/lib/metadata.ts:229](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/metadata.ts#L229)

___

### constructs

• `Readonly` **constructs**: [`ConstructsInfo`](ConstructsInfo.md)

Information about constructs defined in the package.

#### Defined in

[src/lib/metadata.ts:237](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/metadata.ts#L237)

___

### description

• `Optional` `Readonly` **description**: `string`

The description of the package.

#### Defined in

[src/lib/metadata.ts:221](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/metadata.ts#L221)

___

### icon

• `Optional` `Readonly` **icon**: `string`

#### Inherited from

[OptionalIconAware](OptionalIconAware.md).[icon](OptionalIconAware.md#icon)

#### Defined in

[src/lib/metadata.ts:17](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/metadata.ts#L17)

___

### identifier

• `Readonly` **identifier**: `string`

The unique identifier of the package.

#### Defined in

[src/lib/metadata.ts:207](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/metadata.ts#L207)

___

### license

• `Readonly` **license**: `string`

The SPDX license identifier for the license that the package is released under.

**`See`**

[SPDX](https://spdx.org/licenses/)

#### Defined in

[src/lib/metadata.ts:217](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/metadata.ts#L217)

___

### name

• `Optional` `Readonly` **name**: `string`

The descriptive name of the package.

#### Defined in

[src/lib/metadata.ts:203](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/metadata.ts#L203)

___

### support

• `Optional` `Readonly` **support**: [`SupportInfo`](SupportInfo.md)

Information about the support provided for the package.

#### Defined in

[src/lib/metadata.ts:225](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/metadata.ts#L225)

___

### tooling

• `Readonly` **tooling**: [`ToolingInfo`](ToolingInfo.md)

Information about tooling the package relies on.

#### Defined in

[src/lib/metadata.ts:233](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/metadata.ts#L233)

___

### vendor

• `Readonly` **vendor**: `string`

The author of the package.

#### Defined in

[src/lib/metadata.ts:211](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/metadata.ts#L211)
