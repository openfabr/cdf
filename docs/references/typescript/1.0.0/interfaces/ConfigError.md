[@openfabr/cdf](../README.md) / [Exports](../modules.md) / ConfigError

# Interface: ConfigError

Interface that offers a configuration *error* type which optionally indicates which field is the offending one.
It is expected to be implemented.

## Hierarchy

- [`MessageAware`](MessageAware.md)

  ↳ **`ConfigError`**

## Table of contents

### Properties

- [field](ConfigError.md#field)
- [message](ConfigError.md#message)

## Properties

### field

• `Optional` `Readonly` **field**: `string`

#### Defined in

[src/lib/domain.ts:98](https://github.com/openfabr/cdf/blob/dc6dbfc/core/typescript/src/lib/domain.ts#L98)

___

### message

• `Readonly` **message**: `string`

#### Inherited from

[MessageAware](MessageAware.md).[message](MessageAware.md#message)

#### Defined in

[src/lib/domain.ts:88](https://github.com/openfabr/cdf/blob/dc6dbfc/core/typescript/src/lib/domain.ts#L88)
