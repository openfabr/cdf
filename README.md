# OpenFABR Cloud Development Framework (CDF)

**The IaC framework to build cloud infrastructure faster**

Because it is **React for Infrastructure-as-Code** - [see why](./docs/introduction/react-for-iac.md)

*developed and sponsored by [FABR](https://fabrhq.com?utm_source=openfabr-cdf-docs&utm_medium=md-doc&utm_campaign=general-oss)*

![OpenFABR CDK header](./docs/assets/header-640x320.png)

| ![AWS CDK](./docs/assets/3rd-party/awscdk-icon-v2.png) | ![Terraform CDK](./docs/assets/3rd-party/cdktf-icon.png) | ![cdk8s](./docs/assets/3rd-party/cdk8s-icon-v2.png) | ![Pulumi](./docs/assets/3rd-party/pulumi-icon.png) |
| :-- | :--: | :--: | --: |
| AWS CDK | Terraform CDK | cdk8s | Pulumi |


Framework(s):

- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" style="width:25px;height:25px" /> ![NPM](https://img.shields.io/npm/v/@openfabr/cdf)
- Coming Soon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" style="width:25px;height:25px" /> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" style="width:25px;height:25px" /> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go" style="width:25px;height:25px" /> ([vote](https://github.com/openfabr/cdf/discussions/31))

Packages as reference implementations:

- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" style="width:25px;height:25px" /> AWS CDK: ![NPM](https://img.shields.io/npm/v/@openfabr/package-ri-awscdk)
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" style="width:25px;height:25px" /> Terraform CDK: ![NPM](https://img.shields.io/npm/v/@openfabr/package-ri-cdktf)
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" style="width:25px;height:25px" /> Pulumi: ![NPM](https://img.shields.io/npm/v/@openfabr/package-ri-pulumi)

Sample projects using the packages above:

  - <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" style="width:25px;height:25px" /> [AWS CDK](./samples/projects/awscdk-typescript/README.md) for [AWS](https://aws.amazon.com)
  - <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" style="width:25px;height:25px" /> [Terraform CDK](./samples/projects/cdktf-typescript/README.md) for [Digital Ocean](https://digitalocean.com)

## [Documentation](https://openfabr.github.io/cdf/)

## Introduction

OpenFABR CDF aims to offer a brand new way of building cloud infrastructure, based on our view that the future of DevOps is **MODULAR + CUSTOM**.

![CDF: MODULAR + CUSTOM](./docs/assets/cdf-module_custom.png)

We envisage a future where application developers (in product engineering) and DevOps/Cloud engineers (in platform engineering) collaborate by code in a true Infrastructure-as-Code manner. OpenFABR CDF is the missing piece, the glue, that brings the entire tool chain together from IaC runtimes like CDK, to imperative languages like TypeScript, testing frameworks like Jest, and artefact repositories like NPM.

### MODULAR: Reusable, High-level Packages

Ad-hoc, bespoke infra build project after project should be a thing of past. There are common patterns emerging that can be encapsulated into reusable modules, or L2/L3 constructs as AWS would call them. Bigger engineering organisations with platform engineering function also tend to have their own opinions about how their internal cloud operations can be constructed by high-level components, which in turn can be offered to the product engineering counterpart in the same organisation.  

### CUSTOM: Project-specific Code Blocks

Abstraction (via packages mentioned above) is hard, and almost impossible to work without an escape hatch, because every infra project could have its own quirks, e.g. special permissions, external dependencies, or even different domain names. OpenFABR CDF fully acknowledges it by offering an inversion-of-control based custom code block feature for application developers to access all underlying cloud resources fully, for customisation.  

### The Framework

For application developers, OpenFABR CDF is the framework that pieces together a cloud infra package with local custom code to deliver a cloud infra project extremely quickly. 

- From 0 to 95%: With the help of a selected package, an infra baseline can be assembled using a simple, schema-aware JSON configuration file. This can be done in *minutes* or *hours*, instead of days or weeks.
- From 95% to 100%: Every project is different, the framework allows detailed customisation to every underlying infra resources being created by the modular approach earlier. This can be done in *hours* or *days*, certainly not *weeks*.

For DevOps/Cloud/Platform engineers, adopting OpenFABR CDF means following a separation-of-concern approach by implementing modular, reusable packages from day one.

Best of all, OpenFABR CDF does not have any opinions about what IaC runtime (AWS CDK and Terraform CDK; Pulumi and others coming soon) and language (Typescript; Python, Java, C# and Golang coming soon) one should use. It allows engineering organisations to pick their favourite runtime and language. It forms the foundation of an internal cloud platform and leaves the opinions about how to implement cloud infrastructure to package authors and application developers.

![CDF Stack Overview](./docs/assets/cdf-stack-overview.png)

## Use

Follow the [Getting Started](./docs/getting-started/quick-start.md) to experience the workflow yourself.

To dive deep, the [User Guide](./docs/user-guide/overview.md) covers the context as well as detailed manuals for both application developers and package authors.

## Support

Click on the badge to join our server:

[![](https://dcbadge.vercel.app/api/server/4ma3bVVkrv?theme=default-inverted&logoColor=FC7E56)](https://discord.gg/4ma3bVVkrv)

[Discord Support Channel](https://discord.com/channels/1039810916625162260/1039819988296552510)

## Contribute

### License and Contribution Agreement

Same as other OpenFABR projects, it is dual-licensed under

- [GNU AGPL v3](https://www.gnu.org/licenses/agpl-3.0.en.html)
- [FABR Commercial v1](#) (coming soon)

Before accepting your contribution, please e-sign the [Contributor License Agreement](#) (coming soon) which is a common practice in open source. Once signed, your GitHub username will then be registered on the project's contributor list which safeguards the contributions to the project.

### Development

The monorepo is structured in a way that different build tools are used for different CDF language implementation. See below for details about how to develop for CDF in a particular language:

- Framework:
  - [core/typescript](./core/typescript/README.md) for CDF
- Packages as reference implementations:
  - [samples/packages/awscdk-typescript](./samples/packages/awscdk-typescript/README.md) for TypeScript based AWS CDK package
  - [samples/packages/cdktf-typescript](./samples/packages/cdktf-typescript/README.md) for TypeScript based CDKTF package
  - [samples/packages/pulumi-typescript](./samples/packages/pulumi-typescript/README.md) for TypeScript based Pulumi package
- Sample projects based on the use of the packages above:
  - [samples/projects/awscdk-typescript](./samples/projects/awscdk-typescript/README.md) for using the TypeScript AWS CDK package above
  - [samples/projects/cdktf-typescript](./samples/projects/cdktf-typescript/README.md) for using the TypeScript CDKTF package above
- Documentation:
  - [Quick Start](./docs/getting-started/)
  - [User Guide](./docs/user-guide/)

Tools and libraries in use include:

- [GitHub Actions](https://docs.github.com/en/actions) are used as CI/CD tooling. Again the build and release workflows vary between sub repos based on language, framework etc.

- [Conventional Commits](https://www.conventionalcommits.org/) spec is strictly followed which enabled the use of [Release Please](https://github.com/googleapis/release-please) across CDF releases in different languages.

- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) is used to generate the doc site from [markdown format](https://www.markdownguide.org/basic-syntax/). A Github Actions workflow handles CI/CD. It can also be [previewed locally](./preview-docs.sh) before creating pull requests.
- [<img src="https://localstack.cloud/images/header-logo-new.svg" alt="LocalStack logo" style="height:30px; margin-top:10px;"/>](https://localstack.cloud) used to speed up development.
