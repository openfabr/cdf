[@openfabr/cdf](../README.md) / [Exports](../modules.md) / ServiceType

# Interface: ServiceType

Interface that represents a typing classification for services.
In particular, it contains a field for deployment instructions for the type of services defined.

## Hierarchy

- [`TypeAware`](TypeAware.md)

- [`SubtypeAware`](SubtypeAware.md)

- [`OptionalLabelAware`](OptionalLabelAware.md)

- [`OptionalIconAware`](OptionalIconAware.md)

- [`OptionalDescAware`](OptionalDescAware.md)

  ↳ **`ServiceType`**

## Table of contents

### Properties

- [deployment](ServiceType.md#deployment)
- [description](ServiceType.md#description)
- [icon](ServiceType.md#icon)
- [label](ServiceType.md#label)
- [subtype](ServiceType.md#subtype)
- [type](ServiceType.md#type)

## Properties

### deployment

• `Readonly` **deployment**: `string`

The deployment instructions.
This is normally in plain text; markdown can be used too.

#### Defined in

[src/lib/metadata.ts:108](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/metadata.ts#L108)

___

### description

• `Optional` `Readonly` **description**: `string`

#### Inherited from

[OptionalDescAware](OptionalDescAware.md).[description](OptionalDescAware.md#description)

#### Defined in

[src/lib/metadata.ts:33](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/metadata.ts#L33)

___

### icon

• `Optional` `Readonly` **icon**: `string`

#### Inherited from

[OptionalIconAware](OptionalIconAware.md).[icon](OptionalIconAware.md#icon)

#### Defined in

[src/lib/metadata.ts:17](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/metadata.ts#L17)

___

### label

• `Optional` `Readonly` **label**: `string`

#### Inherited from

[OptionalLabelAware](OptionalLabelAware.md).[label](OptionalLabelAware.md#label)

#### Defined in

[src/lib/metadata.ts:25](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/metadata.ts#L25)

___

### subtype

• `Readonly` **subtype**: `string`

#### Inherited from

[SubtypeAware](SubtypeAware.md).[subtype](SubtypeAware.md#subtype)

#### Defined in

[src/lib/domain.ts:97](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/domain.ts#L97)

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[TypeAware](TypeAware.md).[type](TypeAware.md#type)

#### Defined in

[src/lib/domain.ts:87](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/domain.ts#L87)
