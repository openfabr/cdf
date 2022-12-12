[@openfabr/cdf](../README.md) / [Exports](../modules.md) / [awscdk](../modules/awscdk.md) / ProjectStack

# Class: ProjectStack<IPC, GC, NC, CC, SC, RC\>

[awscdk](../modules/awscdk.md).ProjectStack

Stack as top-level construct with AWS CDK as IaC runtime.

## Type parameters

| Name | Type |
| :------ | :------ |
| `IPC` | extends [`InfraPlanConstructs`](../interfaces/InfraPlanConstructs.md) |
| `GC` | extends [`GeneralConfig`](../interfaces/GeneralConfig.md) |
| `NC` | extends [`NetworkConfig`](../interfaces/NetworkConfig.md) |
| `CC` | extends [`ComponentConfig`](../interfaces/ComponentConfig.md) |
| `SC` | extends [`ServiceConfig`](../interfaces/ServiceConfig.md) |
| `RC` | extends [`RelationConfig`](../interfaces/RelationConfig.md) |

## Hierarchy

- `Stack`

  ↳ **`ProjectStack`**

## Table of contents

### Constructors

- [constructor](awscdk.ProjectStack.md#constructor)

### Properties

- [\_crossRegionReferences](awscdk.ProjectStack.md#_crossregionreferences)
- [\_versionReportingEnabled](awscdk.ProjectStack.md#_versionreportingenabled)
- [account](awscdk.ProjectStack.md#account)
- [artifactId](awscdk.ProjectStack.md#artifactid)
- [environment](awscdk.ProjectStack.md#environment)
- [nestedStackResource](awscdk.ProjectStack.md#nestedstackresource)
- [node](awscdk.ProjectStack.md#node)
- [region](awscdk.ProjectStack.md#region)
- [synthesizer](awscdk.ProjectStack.md#synthesizer)
- [tags](awscdk.ProjectStack.md#tags)
- [templateFile](awscdk.ProjectStack.md#templatefile)
- [templateOptions](awscdk.ProjectStack.md#templateoptions)
- [terminationProtection](awscdk.ProjectStack.md#terminationprotection)

### Accessors

- [availabilityZones](awscdk.ProjectStack.md#availabilityzones)
- [bundlingRequired](awscdk.ProjectStack.md#bundlingrequired)
- [dependencies](awscdk.ProjectStack.md#dependencies)
- [maxResources](awscdk.ProjectStack.md#maxresources)
- [nested](awscdk.ProjectStack.md#nested)
- [nestedStackParent](awscdk.ProjectStack.md#nestedstackparent)
- [notificationArns](awscdk.ProjectStack.md#notificationarns)
- [partition](awscdk.ProjectStack.md#partition)
- [stackId](awscdk.ProjectStack.md#stackid)
- [stackName](awscdk.ProjectStack.md#stackname)
- [urlSuffix](awscdk.ProjectStack.md#urlsuffix)

### Methods

- [\_addAssemblyDependency](awscdk.ProjectStack.md#_addassemblydependency)
- [\_synthesizeTemplate](awscdk.ProjectStack.md#_synthesizetemplate)
- [\_toCloudFormation](awscdk.ProjectStack.md#_tocloudformation)
- [\_validateId](awscdk.ProjectStack.md#_validateid)
- [addDependency](awscdk.ProjectStack.md#adddependency)
- [addMetadata](awscdk.ProjectStack.md#addmetadata)
- [addTransform](awscdk.ProjectStack.md#addtransform)
- [allocateLogicalId](awscdk.ProjectStack.md#allocatelogicalid)
- [exportValue](awscdk.ProjectStack.md#exportvalue)
- [formatArn](awscdk.ProjectStack.md#formatarn)
- [getLogicalId](awscdk.ProjectStack.md#getlogicalid)
- [regionalFact](awscdk.ProjectStack.md#regionalfact)
- [renameLogicalId](awscdk.ProjectStack.md#renamelogicalid)
- [reportMissingContextKey](awscdk.ProjectStack.md#reportmissingcontextkey)
- [resolve](awscdk.ProjectStack.md#resolve)
- [splitArn](awscdk.ProjectStack.md#splitarn)
- [toJsonString](awscdk.ProjectStack.md#tojsonstring)
- [toString](awscdk.ProjectStack.md#tostring)
- [isConstruct](awscdk.ProjectStack.md#isconstruct)
- [isStack](awscdk.ProjectStack.md#isstack)
- [of](awscdk.ProjectStack.md#of)

## Constructors

### constructor

• **new ProjectStack**<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\>(`scope`, `id`, `props?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `IPC` | extends [`InfraPlanConstructs`](../interfaces/InfraPlanConstructs.md) |
| `GC` | extends [`GeneralConfig`](../interfaces/GeneralConfig.md) |
| `NC` | extends [`NetworkConfig`](../interfaces/NetworkConfig.md) |
| `CC` | extends [`ComponentConfig`](../interfaces/ComponentConfig.md) |
| `SC` | extends [`ServiceConfig`](../interfaces/ServiceConfig.md) |
| `RC` | extends [`RelationConfig`](../interfaces/RelationConfig.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | `Construct` |
| `id` | `string` |
| `props?` | [`ProjectStackProps`](../interfaces/awscdk.ProjectStackProps.md)<`IPC`, `GC`, `NC`, `CC`, `SC`, `RC`\> |

#### Overrides

Stack.constructor

#### Defined in

[src/lib/bootstrap/awscdk/stack.ts:45](https://github.com/openfabr/cdf/blob/9dc7721/core/typescript/src/lib/bootstrap/awscdk/stack.ts#L45)

## Properties

### \_crossRegionReferences

• `Readonly` **\_crossRegionReferences**: `boolean`

Whether cross region references are enabled for this stack

#### Inherited from

Stack.\_crossRegionReferences

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:246

___

### \_versionReportingEnabled

• `Readonly` **\_versionReportingEnabled**: `boolean`

Whether version reporting is enabled for this stack

Controls whether the CDK Metadata resource is injected

#### Inherited from

Stack.\_versionReportingEnabled

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:240

___

### account

• `Readonly` **account**: `string`

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concerete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

#### Inherited from

Stack.account

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:192

___

### artifactId

• `Readonly` **artifactId**: `string`

The ID of the cloud assembly artifact for this stack.

#### Inherited from

Stack.artifactId

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:227

___

### environment

• `Readonly` **environment**: `string`

The environment coordinates in which this stack is deployed. In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

#### Inherited from

Stack.environment

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:206

___

### nestedStackResource

• `Optional` `Readonly` **nestedStackResource**: `CfnResource`

If this is a nested stack, this represents its `AWS::CloudFormation::Stack`
resource. `undefined` for top-level (non-nested) stacks.

#### Inherited from

Stack.nestedStackResource

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:216

___

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

Stack.node

#### Defined in

node_modules/constructs/lib/construct.d.ts:247

___

### region

• `Readonly` **region**: `string`

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concerete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concerete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

#### Inherited from

Stack.region

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:171

___

### synthesizer

• `Readonly` **synthesizer**: `IStackSynthesizer`

Synthesis method for this stack

#### Inherited from

Stack.synthesizer

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:232

___

### tags

• `Readonly` **tags**: `TagManager`

Tags to be applied to the stack.

#### Inherited from

Stack.tags

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:146

___

### templateFile

• `Readonly` **templateFile**: `string`

The name of the CloudFormation template file emitted to the output
directory during synthesis.

Example value: `MyStack.template.json`

#### Inherited from

Stack.templateFile

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:223

___

### templateOptions

• `Readonly` **templateOptions**: `ITemplateOptions`

Options for CloudFormation template (like version, transform, description).

#### Inherited from

Stack.templateOptions

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:150

___

### terminationProtection

• `Optional` `Readonly` **terminationProtection**: `boolean`

Whether termination protection is enabled for this stack.

#### Inherited from

Stack.terminationProtection

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:210

## Accessors

### availabilityZones

• `get` **availabilityZones**(): `string`[]

Returns the list of AZs that are available in the AWS environment
(account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

#### Returns

`string`[]

#### Inherited from

Stack.availabilityZones

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:404

___

### bundlingRequired

• `get` **bundlingRequired**(): `boolean`

Indicates whether the stack requires bundling or not

#### Returns

`boolean`

#### Inherited from

Stack.bundlingRequired

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:622

___

### dependencies

• `get` **dependencies**(): `Stack`[]

Return the stacks this stack depends on

#### Returns

`Stack`[]

#### Inherited from

Stack.dependencies

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:322

___

### maxResources

• `Private` `get` **maxResources**(): `any`

Maximum number of resources in the stack

Set to 0 to mean "unlimited".

#### Returns

`any`

#### Inherited from

Stack.maxResources

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:580

___

### nested

• `get` **nested**(): `boolean`

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

#### Returns

`boolean`

#### Inherited from

Stack.nested

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:359

___

### nestedStackParent

• `get` **nestedStackParent**(): `undefined` \| `Stack`

If this is a nested stack, returns it's parent stack.

#### Returns

`undefined` \| `Stack`

#### Inherited from

Stack.nestedStackParent

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:408

___

### notificationArns

• `get` **notificationArns**(): `string`[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

#### Returns

`string`[]

#### Inherited from

Stack.notificationArns

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:355

___

### partition

• `get` **partition**(): `string`

The partition in which this stack is defined

#### Returns

`string`

#### Inherited from

Stack.partition

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:339

___

### stackId

• `get` **stackId**(): `string`

The ID of the stack

**`Example`**

```ts
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```

#### Returns

`string`

#### Inherited from

Stack.stackId

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:351

___

### stackName

• `get` **stackName**(): `string`

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.STACK_NAME` directly.

#### Returns

`string`

#### Inherited from

Stack.stackName

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:335

___

### urlSuffix

• `get` **urlSuffix**(): `string`

The Amazon domain suffix for the region in which this stack is defined

#### Returns

`string`

#### Inherited from

Stack.urlSuffix

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:343

## Methods

### \_addAssemblyDependency

▸ **_addAssemblyDependency**(`target`, `reason?`): `void`

Called implicitly by the `addDependency` helper function in order to
realize a dependency between two top-level stacks at the assembly level.

Use `stack.addDependency` to define the dependency between any two stacks,
and take into account nested stack relationships.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Stack` |
| `reason?` | `string` |

#### Returns

`void`

#### Inherited from

Stack.\_addAssemblyDependency

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:440

___

### \_synthesizeTemplate

▸ **_synthesizeTemplate**(`session`, `lookupRoleArn?`): `void`

Synthesizes the cloudformation template into a cloud assembly.

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | `ISynthesisSession` |
| `lookupRoleArn?` | `string` |

#### Returns

`void`

#### Inherited from

Stack.\_synthesizeTemplate

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:445

___

### \_toCloudFormation

▸ `Protected` **_toCloudFormation**(): `any`

Returns the CloudFormation template for this stack by traversing
the tree and invoking _toCloudFormation() on all Entity objects.

#### Returns

`any`

#### Inherited from

Stack.\_toCloudFormation

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:569

___

### \_validateId

▸ `Protected` **_validateId**(`name`): `void`

Validate stack name

CloudFormation stack names can include dashes in addition to the regular identifier
character classes, and we don't allow one of the magic markers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

Stack.\_validateId

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:562

___

### addDependency

▸ **addDependency**(`target`, `reason?`): `void`

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Stack` |
| `reason?` | `string` |

#### Returns

`void`

#### Inherited from

Stack.addDependency

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:318

___

### addMetadata

▸ **addMetadata**(`key`, `value`): `void`

Adds an arbitary key-value pair, with information you want to record about the stack.
These get translated to the Metadata section of the generated template.

**`See`**

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

Stack.addMetadata

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:430

___

### addTransform

▸ **addTransform**(`transform`): `void`

Add a Transform to this stack. A Transform is a macro that AWS
CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

**`See`**

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html

**`Example`**

```ts
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | `string` | The transform to add |

#### Returns

`void`

#### Inherited from

Stack.addTransform

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:423

___

### allocateLogicalId

▸ `Protected` **allocateLogicalId**(`cfnElement`): `string`

Returns the naming scheme used to allocate logical IDs. By default, uses
the `HashedAddressingScheme` but this method can be overridden to customize
this behavior.

In order to make sure logical IDs are unique and stable, we hash the resource
construct tree path (i.e. toplevel/secondlevel/.../myresource) and add it as
a suffix to the path components joined without a separator (CloudFormation
IDs only allow alphanumeric characters).

The result will be:

  <path.join('')><md5(path.join('/')>
    "human"      "hash"

If the "human" part of the ID exceeds 240 characters, we simply trim it so
the total ID doesn't exceed CloudFormation's 255 character limit.

We only take 8 characters from the md5 hash (0.000005 chance of collision).

Special cases:

- If the path only contains a single component (i.e. it's a top-level
  resource), we won't add the hash to it. The hash is not needed for
  disamiguation and also, it allows for a more straightforward migration an
  existing CloudFormation template to a CDK stack without logical ID changes
  (or renames).
- For aesthetic reasons, if the last components of the path are the same
  (i.e. `L1/L2/Pipeline/Pipeline`), they will be de-duplicated to make the
  resulting human portion of the ID more pleasing: `L1L2Pipeline<HASH>`
  instead of `L1L2PipelinePipeline<HASH>`
- If a component is named "Default" it will be omitted from the path. This
  allows refactoring higher level abstractions around constructs without affecting
  the IDs of already deployed resources.
- If a component is named "Resource" it will be omitted from the user-visible
  path, but included in the hash. This reduces visual noise in the human readable
  part of the identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cfnElement` | `CfnElement` | The element for which the logical ID is allocated. |

#### Returns

`string`

#### Inherited from

Stack.allocateLogicalId

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:553

___

### exportValue

▸ **exportValue**(`exportedValue`, `options?`): `string`

Create a CloudFormation Export for a value

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

## Example

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

### Deployment 1: break the relationship

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

### Deployment 2: remove the bucket resource

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

#### Parameters

| Name | Type |
| :------ | :------ |
| `exportedValue` | `any` |
| `options?` | `ExportValueOptions` |

#### Returns

`string`

#### Inherited from

Stack.exportValue

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:512

___

### formatArn

▸ **formatArn**(`components`): `string`

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

#### Parameters

| Name | Type |
| :------ | :------ |
| `components` | `ArnComponents` |

#### Returns

`string`

#### Inherited from

Stack.formatArn

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:377

___

### getLogicalId

▸ **getLogicalId**(`element`): `string`

Allocates a stack-unique CloudFormation-compatible logical identity for a
specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `CfnElement` | The CloudFormation element for which a logical identity is needed. |

#### Returns

`string`

#### Inherited from

Stack.getLogicalId

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:311

___

### regionalFact

▸ **regionalFact**(`factName`, `defaultValue?`): `string`

Look up a fact value for the given fact for the region of this stack

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

#### Parameters

| Name | Type |
| :------ | :------ |
| `factName` | `string` |
| `defaultValue?` | `string` |

#### Returns

`string`

#### Inherited from

Stack.regionalFact

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:465

___

### renameLogicalId

▸ **renameLogicalId**(`oldId`, `newId`): `void`

Rename a generated logical identities

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldId` | `string` |
| `newId` | `string` |

#### Returns

`void`

#### Inherited from

Stack.renameLogicalId

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:295

___

### reportMissingContextKey

▸ **reportMissingContextKey**(`report`): `void`

Indicate that a context key was expected

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `report` | `MissingContext` | The set of parameters needed to obtain the context |

#### Returns

`void`

#### Inherited from

Stack.reportMissingContextKey

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:288

___

### resolve

▸ **resolve**(`obj`): `any`

Resolve a tokenized value in the context of the current stack.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`any`

#### Inherited from

Stack.resolve

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:275

___

### splitArn

▸ **splitArn**(`arn`, `arnFormat`): `ArnComponents`

Splits the provided ARN into its components.
Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arn` | `string` | the ARN to split into its components |
| `arnFormat` | `ArnFormat` | the expected format of 'arn' - depends on what format the service 'arn' represents uses |

#### Returns

`ArnComponents`

#### Inherited from

Stack.splitArn

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:388

___

### toJsonString

▸ **toJsonString**(`obj`, `space?`): `string`

Convert an object, potentially containing tokens, to a JSON string

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `space?` | `number` |

#### Returns

`string`

#### Inherited from

Stack.toJsonString

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:279

___

### toString

▸ **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

Stack.toString

#### Defined in

node_modules/constructs/lib/construct.d.ts:260

___

### isConstruct

▸ `Static` **isConstruct**(`x`): x is Construct

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `any` | Any object |

#### Returns

x is Construct

true if `x` is an object created from a class which extends `Construct`.

#### Inherited from

Stack.isConstruct

#### Defined in

node_modules/constructs/lib/construct.d.ts:243

___

### isStack

▸ `Static` **isStack**(`x`): x is Stack

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

x is Stack

#### Inherited from

Stack.isStack

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:137

___

### of

▸ `Static` **of**(`construct`): `Stack`

Looks up the first stack scope in which `construct` is defined. Fails if there is no stack up the tree.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `construct` | `IConstruct` | The construct to start the search from. |

#### Returns

`Stack`

#### Inherited from

Stack.of

#### Defined in

node_modules/aws-cdk-lib/core/lib/stack.d.ts:142
