[@openfabr/cdf](../README.md) / [Exports](../modules.md) / ResultHandler

# Class: ResultHandler

Abstract class for packages to implement in order to handle outputs or errors from the result.

## Table of contents

### Constructors

- [constructor](ResultHandler.md#constructor)

### Properties

- [onErr](ResultHandler.md#onerr)
- [onOk](ResultHandler.md#onok)
- [DEFAULT](ResultHandler.md#default)

### Methods

- [handle](ResultHandler.md#handle)

## Constructors

### constructor

• **new ResultHandler**(`onOk?`, `onErr?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onOk?` | (`outputs`: [`InfraPlanOutputs`](../modules.md#infraplanoutputs)) => `void` | Function to handle results. |
| `onErr?` | (`error`: [`PlanError`](../interfaces/PlanError.md)) => `void` | Function to to handle errors. |

#### Defined in

[src/lib/package.ts:87](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/package.ts#L87)

## Properties

### onErr

• `Optional` `Readonly` **onErr**: (`error`: [`PlanError`](../interfaces/PlanError.md)) => `void`

#### Type declaration

▸ (`error`): `void`

Function to to handle errors.

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`PlanError`](../interfaces/PlanError.md) |

##### Returns

`void`

#### Defined in

[src/lib/package.ts:95](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/package.ts#L95)

___

### onOk

• `Optional` `Readonly` **onOk**: (`outputs`: [`InfraPlanOutputs`](../modules.md#infraplanoutputs)) => `void`

#### Type declaration

▸ (`outputs`): `void`

Function to handle results.

##### Parameters

| Name | Type |
| :------ | :------ |
| `outputs` | [`InfraPlanOutputs`](../modules.md#infraplanoutputs) |

##### Returns

`void`

#### Defined in

[src/lib/package.ts:91](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/package.ts#L91)

___

### DEFAULT

▪ `Static` **DEFAULT**: [`ResultHandler`](ResultHandler.md)

The default handler.

#### Defined in

[src/lib/package.ts:85](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/package.ts#L85)

## Methods

### handle

▸ **handle**(`result?`): `void`

Function that handles infra provisioning result by delegating to `onErr` and `onOk` functions to be implemented.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result?` | `Result`<[`InfraPlanOutputs`](../modules.md#infraplanoutputs), [`PlanError`](../interfaces/PlanError.md)\> | The result of infra provisioning. |

#### Returns

`void`

#### Defined in

[src/lib/package.ts:103](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/package.ts#L103)
