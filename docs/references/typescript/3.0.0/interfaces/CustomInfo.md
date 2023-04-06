[@openfabr/cdf](../README.md) / [Exports](../modules.md) / CustomInfo

# Interface: CustomInfo

Interface that represents information about custom (code blocks) construct.
Most notably it includes a reference to the code template.

## Hierarchy

- [`OptionalIconAware`](OptionalIconAware.md)

- [`OptionalDescAware`](OptionalDescAware.md)

  ↳ **`CustomInfo`**

## Table of contents

### Properties

- [description](CustomInfo.md#description)
- [icon](CustomInfo.md#icon)
- [template](CustomInfo.md#template)

## Properties

### description

• `Optional` `Readonly` **description**: `string`

#### Inherited from

[OptionalDescAware](OptionalDescAware.md).[description](OptionalDescAware.md#description)

#### Defined in

[src/lib/metadata.ts:33](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L33)

___

### icon

• `Optional` `Readonly` **icon**: `string`

#### Inherited from

[OptionalIconAware](OptionalIconAware.md).[icon](OptionalIconAware.md#icon)

#### Defined in

[src/lib/metadata.ts:17](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L17)

___

### template

• `Readonly` **template**: `string`

The reference to the code template file for creating a valid custom code block when using the package.

#### Defined in

[src/lib/metadata.ts:199](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/metadata.ts#L199)
