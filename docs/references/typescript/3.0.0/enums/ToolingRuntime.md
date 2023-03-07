[@openfabr/cdf](../README.md) / [Exports](../modules.md) / ToolingRuntime

# Enumeration: ToolingRuntime

A list of IaC runtime.
The purpose of defining them is to regulate their names throughout the framework and all packages.

## Table of contents

### Enumeration Members

- [AWSCDK](ToolingRuntime.md#awscdk)
- [CDK8S](ToolingRuntime.md#cdk8s)
- [CDKTF](ToolingRuntime.md#cdktf)
- [CUSTOM](ToolingRuntime.md#custom)
- [PULUMI](ToolingRuntime.md#pulumi)

## Enumeration Members

### AWSCDK

• **AWSCDK** = ``"awscdk"``

Tooling: AWS CDK, https://aws.amazon.com/cdk/

#### Defined in

[src/lib/domain.ts:56](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/domain.ts#L56)

___

### CDK8S

• **CDK8S** = ``"cdk8s"``

Tooling: CDK for K8s, https://cdk8s.io/

#### Defined in

[src/lib/domain.ts:64](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/domain.ts#L64)

___

### CDKTF

• **CDKTF** = ``"cdktf"``

Tooling: CDK for Terraform, https://developer.hashicorp.com/terraform/cdktf

#### Defined in

[src/lib/domain.ts:60](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/domain.ts#L60)

___

### CUSTOM

• **CUSTOM** = ``"custom"``

Custom tooling, including other vendors such as Ansible or in-house shell scripts

#### Defined in

[src/lib/domain.ts:72](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/domain.ts#L72)

___

### PULUMI

• **PULUMI** = ``"pulumi"``

Tooling: Pulumi, https://www.pulumi.com/

#### Defined in

[src/lib/domain.ts:68](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/domain.ts#L68)
