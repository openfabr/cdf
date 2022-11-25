# Package Implementation

A `Package` - is a concrete implementation of a collection of `Constructs` based on a `Framework Implementation` and `Package Spec`. Package Authors produce these. They can craft and share infrastructure abstractions as packages. We expect internal Platform Engineering teams, third-party consultancies, and FABR to be natural Package authors. Example: see [awscdk-sample/lib/fabr/aws-cdk](../../awscdk-sample/lib/fabr/aws-cdk) sample project.

- **IaC Runtime** - a package implementation is based on _one_ of [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/home.html), [TF CDK](https://developer.hashicorp.com/terraform/cdktf), or [Pulumi](https://www.pulumi.com/docs/).
`Config Definition` implementation - defines the schema of the package-specific `Constructs` and their config. This schema inherits from the `Package Schema` which inherits from the `Framework Schema`. It lives in `config.def.json`

- **`Construct` implementations** - think of this as the abstracted cloud service catalogue being exposed to app developers. At a high level, this is the core/crux of the contract formed between `Package Authors` and `Application Developers`

- **`InfraPlan` implementation** - the package-specific implementation of the `InfraPlan` interface exposing `Construct Instances` and their relationships. Note: `Relation` is a `Construct` type. Application Developers can hook into this using Custom Modules 1) further customise provisioning 2) implement Cloud Vendor services that aren’t part of the package.

- **`InfraRunner`** implementation - factory containing logic for instantiating the package-specific InfraPlan instance based on the specific infra configuration (config.json) provided at runtime.
