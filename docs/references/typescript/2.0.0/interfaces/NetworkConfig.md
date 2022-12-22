[@openfabr/cdf](../README.md) / [Exports](../modules.md) / NetworkConfig

# Interface: NetworkConfig

Interface for the top-level *network* section of the configuration.
It can be extended by any packages if intended to.

## Hierarchy

- [`NameAware`](NameAware.md)

  ↳ **`NetworkConfig`**

## Table of contents

### Properties

- [cidr](NetworkConfig.md#cidr)
- [name](NetworkConfig.md#name)
- [zones](NetworkConfig.md#zones)

## Properties

### cidr

• `Optional` `Readonly` **cidr**: `string`

CIDR notation, either IPv4 or IPv6.

#### Defined in

[src/lib/config.ts:27](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/config.ts#L27)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[NameAware](NameAware.md).[name](NameAware.md#name)

#### Defined in

[src/lib/domain.ts:77](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/domain.ts#L77)

___

### zones

• `Optional` `Readonly` **zones**: `number`

Number of availability zones.

#### Defined in

[src/lib/config.ts:31](https://github.com/openfabr/cdf/blob/eefa4b7/core/typescript/src/lib/config.ts#L31)
