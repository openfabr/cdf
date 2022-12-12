[@openfabr/cdf](../README.md) / [Exports](../modules.md) / InfraPlan

# Class: InfraPlan<IPC\>

Concrete class that carries both the generated infra baseline and all the outputs as a result.

 Usually there is no need to extend this class.

## Type parameters

| Name | Type |
| :------ | :------ |
| `IPC` | extends [`InfraPlanConstructs`](../interfaces/InfraPlanConstructs.md) |

## Table of contents

### Constructors

- [constructor](InfraPlan.md#constructor)

### Properties

- [constructs](InfraPlan.md#constructs)
- [outputs](InfraPlan.md#outputs)

## Constructors

### constructor

• **new InfraPlan**<`IPC`\>(`constructs`, `outputs`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `IPC` | extends [`InfraPlanConstructs`](../interfaces/InfraPlanConstructs.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructs` | `IPC` |
| `outputs` | [`InfraPlanOutputs`](../modules.md#infraplanoutputs) |

#### Defined in

[src/lib/package.ts:44](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/package.ts#L44)

## Properties

### constructs

• `Readonly` **constructs**: `IPC`

#### Defined in

[src/lib/package.ts:45](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/package.ts#L45)

___

### outputs

• `Readonly` **outputs**: [`InfraPlanOutputs`](../modules.md#infraplanoutputs)

#### Defined in

[src/lib/package.ts:46](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/package.ts#L46)
