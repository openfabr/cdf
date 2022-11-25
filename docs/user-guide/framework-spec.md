# Framework Spec

OpenFABR CDF defines a configuration language for users to describe their cloud infrastructure.

OpenFABR CDF as a language needs types and constraints to set up the foundation for the value system, just like other programming languages such as SQL. Clarification about package and file formats for the language is also needed.

## Types

`PLAIN_TEXT`
: a plain text string value, UTF-8 encoded, usually less than 2,000 characters in length

`NUMBER`
: a numerical value

`BOOLEAN`
: a boolean (true/false) value

`TEXT_LIST`
: a list of `SIMPLE_TEXT` values, UTF-8 encoded, usually less than 100 entries

`NUM_LIST`
: a list of `NUMBER` values

`URL`
: a valid URL type string value, UTF-8 encoded, under 2048 characters long

`SIMPLE_TEXT`
: a URL-friendly string value, usually less than 100 characters in length and commonly used in forming domain names and/or URLs, UTF-8 encoded

`MARKDOWN_TEXT`
: a Markdown-formatted string value, usually for descriptive purposes, UTF-8 encoded, [CommonMark spec](https://github.com/commonmark/commonmark-spec), less than 2,000 characters in length
IP_ADDRESS: in either IPv4 or IPv6 format

## Constraints

`REQUIRED`
: can apply to all types

`UNIQUE`
: value must be unique among the same type of `Construct` in a `Stack`, also implying REQUIRED

`IN_LIST(TEXT_LIST)`
: for `TEXT` type

`IN_LIST(NUMBER_LIST)`
: for `NUMBER` type

`MIN_LENGTH(NUMBER)`
: for `TEXT` and `SLUG` types

`MAX_LENGTH(NUMBER)`
: for `TEXT` and `SLUG` types

`DEPENDENT_ON(MAP<TEXT, Any>)`
: for all types

## Construct Types

`Constructs` (see definition below) are the building blocks of an infrastructure architecture (defined as an `InfraPlan` below). Each construct must be one of the following types:

`Network`
: the foundational network environment an application runs in. e.g. AWS VPC

`Service`
: a deployable target where your application code runs, typically containerised app runtime and ephemeral. A `Service` can communicate with other `Service` instances and `Components`. Services can be internal/private or public Internet facing. They can be hooked up to CI/CD pipelines so that application code release can be automated, such as a NodeJS REST API on an AWS ECS Fargate service.

`Component`
: third-party infrastructure services that your application depends on. They are typically private/internal and persistent. They could be self-hosted by you or managed services by a cloud provider e.g. AWS Aurora Database, AWS SQS, or AWS Elasticache for Redis

`Relations`
: indicates a directional link between a service or component and another service or component, for a specific purpose. E.g. NodeJS API communicating with an Aurora Database instance.

`Custom`
: where local customisation is packaged, which is almost always needed to complement the use of the other building blocks from a given implementation package. 

`Aspect`
: another way to apply local customisation, albeit targeting a specific resource provisioned in the underlying cloud vendor.

## Network

Name: SIMPLE_TEXT

Cidr: complex type [subnet: IP_ADDRESS, mask: NUMBER]

Subnets: list of SubnetConfig

## Component

Name: SIMPLE_TEXT

UsageType: SIMPLE_TEXT | IN_LIST (all supported component types such as storage, messaging, and streaming)

Type: SIMPLE_TEXT

Subtype: SIMPLE_TEXT

## Service

Name: SIMPLE_TEXT

PackageType: SIMPLE_TEXT | IN_LIST (‘container’, ‘application’)

Type: SIMPLE_TEXT

Subtype: SIMPLE_TEXT

## Relation

Start: SIMPLE_TEXT | IN_LIST (all Service & Component names defined in the same Plan)

Finish: SIMPLE_TEXT | IN_LIST (all Service & Component names defined in the same Plan)

Bidirectional: BOOLEAN

## Custom

This is a unique building block.

It is meant to be implemented locally, specific to the belonging Plan;

It has several inputs defined by the implementation package, usually an aggregation of all the underlying cloud services managed by those building blocks;

With those inputs, further customisations are expected to be packaged in a Custom module;

There can be as many Custom modules as needed.

## Aspect

TBD

## Package Spec

The `Package Spec` is based on the Framework spec `Types`, `Constraints`, and `Construct Types` defined above. It’s intended to serve as the interface between the high-level user-facing (App Devs) language layer and the low-level implementation layer. This leaks implementation hence not part of the framework spec at this point.

### Package Level Attributes

Vendor: TEXT | REQUIRED

Name: SIMPLE_TEXT | REQUIRED

Identifier: TEXT | UNIQUE

OpenFABR CDF: NUMBER | REQUIRED

Description: MARKDOWN_TEXT

Link: URL

License: TEXT

Icon: URL

IacRuntime: TEXT | REQUIRED & IN_LIST(‘cdktf’, ‘pulumi’, ‘awscdk’)

Command: TEXT | REQUIRED

Vendors: TEXT_LIST | IN_LIST(pre-fined list of all cloud vendors)

### Construct Level Attributes

#### Shared attributes

Name: SIMPLE_TEXT | REQUIRED
Description: MARKDOWN_TEXT
Icon: URL
CloudVendors: TEXT_LIST | IN_LIST(pre-fined list of all cloud vendors)
DefaultCloudVendor: TEXT | IN_LIST(pre-fined list of all cloud vendors)

#### Network

Exactly one Construct of type `Network` (see Framework level definition above).

#### Services

Collection of zero or many Constructs of type `Service` (see Framework level definition above).

#### Components

Collection of zero or many Constructs of type `Component` (see Framework level definition above).

#### Relations

Collection of zero or many Constructs of type `Relation` (see Framework level definition above).

### Config Definition

Defines the schema of the package-specific `Constructs` and their config. This schema inherits from the `Package Schema` which inherits from the `Framework Schema`. It lives in `config.def.json`
