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

[src/lib/metadata.ts:273](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L273)

___

### constructs

• `Readonly` **constructs**: [`ConstructsInfo`](ConstructsInfo.md)

Information about constructs defined in the package.

#### Defined in

[src/lib/metadata.ts:281](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L281)

___

### description

• `Optional` `Readonly` **description**: `string`

The description of the package.

#### Defined in

[src/lib/metadata.ts:265](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L265)

___

### icon

• `Optional` `Readonly` **icon**: `string`

#### Inherited from

[OptionalIconAware](OptionalIconAware.md).[icon](OptionalIconAware.md#icon)

#### Defined in

[src/lib/metadata.ts:17](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L17)

___

### identifier

• `Readonly` **identifier**: `string`

The unique identifier of the package.

#### Defined in

[src/lib/metadata.ts:251](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L251)

___

### license

• `Readonly` **license**: `string`

The SPDX license identifier for the license that the package is released under.

**`See`**

[SPDX](https://spdx.org/licenses/)

#### Defined in

[src/lib/metadata.ts:261](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L261)

___

### name

• `Optional` `Readonly` **name**: `string`

The descriptive name of the package.

#### Defined in

[src/lib/metadata.ts:247](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L247)

___

### support

• `Optional` `Readonly` **support**: [`SupportInfo`](SupportInfo.md)

Information about the support provided for the package.

#### Defined in

[src/lib/metadata.ts:269](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L269)

___

### tooling

• `Readonly` **tooling**: [`ToolingInfo`](ToolingInfo.md)

Information about tooling the package relies on.

#### Defined in

[src/lib/metadata.ts:277](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L277)

___

### vendor

• `Readonly` **vendor**: `string`

The author of the package.

#### Defined in

[src/lib/metadata.ts:255](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L255)
