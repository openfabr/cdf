# Framework Spec

OpenFABR CDF defines a configuration language for package authors to describe how they define reusable cloud infrastructure, in the form of a `package definition pack` a.k.a `PDP`. 

It is worth pointing that `PDP`s are mandatory when a package is integrated into a GUI-based tool such as [FABR Infra](https://fabrhq.com) because those software tooling can only rely on machine readable information to assist project creators to build cloud infrastructure using a specific package. It is however optional, though highly recommended when using a package directly with CDF, as long as the same information is documented by package authors. it is therefore package authors' responsibility to maintain up-to-date documentations for packages they develop. 

## Types and Constraints

OpenFABR CDF as a specification needs types and constraints to set up the foundation for the value system, just like other programming languages such as SQL. 

### Types

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

### Constraints

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

`General`
: not directly infrastructure related, it defines necessary metadata about the package itself. 

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

Below are the **framework-defined** attributes for each construct. 

**More can be defined by package authors per package** and package authors are encouraged to do so to expose configurable options for project creators to fine-tune underlying infrastructure. 
## General

Name: SIMPLE_TEXT

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

## Package Definition Pack

The `PDP` is a pack of files covering all that has been mentioned above. It’s intended to be used by software tooling to understand the abstraction that a package makes available for project creators to use. The primary goal is making it a machine readable protocol so that software tooling can be developed to further aid project creators when using a selected package. 

An example of the pack is show below,

![files in PDP](../assets/cdf-package-definition-pack-example.png)

The pack consists of the files described individually below.

### Package Manifest

It is aptly named `cdf.manifest.json` inside a package at root level, which contains attributes listed below to describe the package and links to other definition files. It is the master plan when defining a package for consumption. 

*The exact file name `cdf.manifest.json` has to be used in order to be located by any software tooling.*

#### Package Level Attributes

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

#### Construct Level Attributes

Name: SIMPLE_TEXT | REQUIRED
Description: MARKDOWN_TEXT
Icon: URL
CloudVendors: TEXT_LIST | IN_LIST(pre-fined list of all cloud vendors)
DefaultCloudVendor: TEXT | IN_LIST(pre-fined list of all cloud vendors)

### Config Definition via JSON Schema

It is a JSON schema file, usually generated with the help of `cdf-cli` tool from reading the TypeScript based package configurations. It is not expected to be manually edited afterwards. Whenever there is a change to the package configurations, the schema file should be re-generated.

*The name of the config definition can be arbitrary as long as it is referenced correctly by the `Package Manifest` file.*

### Types Definition via Plan JSON

It is a JSON file that contains available types and subtypes defined by a package for `Component`, `Service` and `Relation`. It is usually created manually by package authors following the structure defined in CDF framework. Below is an example structure,

```typescript
/**
 * A convenient interface to represent a typing classification.
 *
 */
export interface NestedType extends TypeAware, SubtypeAware {}

/**
 * Interface used to model typing information for a package's components, services and relations.
 * Each package is expected to have a `types.json` file containing the available types and subtypes.
 *
 */
export interface TypesInfo {
  /**
   * Available types and subtypes for components.
   */
  components: { [key: string]: NestedType };
  /**
   * Available types and subtypes for services.
   */
  services: { [key: string]: NestedType };
  /**
   * Available relations between a specific component/service and another component/service.
   * Both the key and value here refer to the entries defined in `components` and `services` fields.
   */
  relations: { [key: string]: string };
}
```

*The name of the types definition file can be arbitrary as long as it is referenced correctly by the `Package Manifest` file.*

### Template for Custom Code Block

It is IaC runtime and language specific, i.e. if the package is created for Terraform CDF TypeScript, then the template is expected to be in TypeScript. Below is an example,

```typescript
import { err, Result } from "neverthrow";
import * as cdf from "@openfabr/cdf";
import { PackageCustomModule, PackageInfraConfig, PackageInfraPlanConstructs } from "./package-config";

export class ProjectCustomModule implements PackageCustomModule {

  enhanceWith(config: PackageInfraConfig, result: cdf.InfraPlan<PackageInfraPlanConstructs>, scope: any): Result<cdf.InfraPlanOutputs, cdf.PlanError> {
    // Write your customisation here and remove the line below.
    return err({ message: "Method not implemented." });
  }
  
}
```

*The name of the template can be arbitrary as long as it is referenced correctly by the `Package Manifest` file.*
