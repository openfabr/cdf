[@openfabr/cdf](../README.md) / [Exports](../modules.md) / [awscdk](../modules/awscdk.md) / ProjectStackProps

# Interface: ProjectStackProps<IPC, GC, NC, CC, SC, RC\>

[awscdk](../modules/awscdk.md).ProjectStackProps

Properties for [ProjectStack](../classes/awscdk.ProjectStack.md).

## Type parameters

| Name | Type |
| :------ | :------ |
| `IPC` | extends [`InfraPlanConstructs`](InfraPlanConstructs.md) |
| `GC` | extends [`GeneralConfig`](GeneralConfig.md) |
| `NC` | extends [`NetworkConfig`](NetworkConfig.md) |
| `CC` | extends [`ComponentConfig`](ComponentConfig.md) |
| `SC` | extends [`ServiceConfig`](ServiceConfig.md) |
| `RC` | extends [`RelationConfig`](RelationConfig.md) |

## Hierarchy

- `StackProps`

  ↳ **`ProjectStackProps`**

## Table of contents

### Properties

- [analyticsReporting](awscdk.ProjectStackProps.md#analyticsreporting)
- [crossRegionReferences](awscdk.ProjectStackProps.md#crossregionreferences)
- [description](awscdk.ProjectStackProps.md#description)
- [env](awscdk.ProjectStackProps.md#env)
- [handler](awscdk.ProjectStackProps.md#handler)
- [orchestrator](awscdk.ProjectStackProps.md#orchestrator)
- [stackName](awscdk.ProjectStackProps.md#stackname)
- [synthesizer](awscdk.ProjectStackProps.md#synthesizer)
- [tags](awscdk.ProjectStackProps.md#tags)
- [terminationProtection](awscdk.ProjectStackProps.md#terminationprotection)

## Properties

### analyticsReporting

• `Optional` `Readonly` **analyticsReporting**: `boolean`

Include runtime versioning information in this Stack

**`Default`**

`analyticsReporting` setting of containing `App`, or value of
'aws:cdk:version-reporting' context key

#### Inherited from

StackProps.analyticsReporting

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:115

___

### crossRegionReferences

• `Optional` `Readonly` **crossRegionReferences**: `boolean`

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

**`Default`**

false

#### Inherited from

StackProps.crossRegionReferences

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:126

___

### description

• `Optional` `Readonly` **description**: `string`

A description of the stack.

**`Default`**

- No description.

#### Inherited from

StackProps.description

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:16

___

### env

• `Optional` `Readonly` **env**: `Environment`

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

**`Example`**

// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');

**`Default`**

- The environment of the containing `Stage` if available,
otherwise create the stack will be environment-agnostic.

#### Inherited from

StackProps.env

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:81

___

### handler

• `Optional` **handler**: [`ResultHandler`](../classes/ResultHandler.md)

#### Defined in

[src/lib/bootstrap/awscdk/stack.ts:30](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/bootstrap/awscdk/stack.ts#L30)

___

### orchestrator

• **orchestrator**: [`Orchestrator`](../classes/Orchestrator.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>

#### Defined in

[src/lib/bootstrap/awscdk/stack.ts:29](https://github.com/openfabr/cdf/blob/18ec52e/core/typescript/src/lib/bootstrap/awscdk/stack.ts#L29)

___

### stackName

• `Optional` `Readonly` **stackName**: `string`

Name to deploy the stack with

**`Default`**

- Derived from construct path.

#### Inherited from

StackProps.stackName

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:87

___

### synthesizer

• `Optional` `Readonly` **synthesizer**: `IStackSynthesizer`

Synthesis method to use while deploying this stack

**`Default`**

- `DefaultStackSynthesizer` if the `@aws-cdk/core:newStyleStackSynthesis` feature flag
is set, `LegacyStackSynthesizer` otherwise.

#### Inherited from

StackProps.synthesizer

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:102

___

### tags

• `Optional` `Readonly` **tags**: `Object`

Stack tags that will be applied to all the taggable resources and the stack itself.

**`Default`**

#### Index signature

▪ [key: `string`]: `string`

#### Inherited from

StackProps.tags

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:93

___

### terminationProtection

• `Optional` `Readonly` **terminationProtection**: `boolean`

Whether to enable termination protection for this stack.

**`Default`**

false

#### Inherited from

StackProps.terminationProtection

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:108
