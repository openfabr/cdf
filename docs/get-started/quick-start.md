# Quick Start

The quickest way to try CDF is to run one of the sample projects to stand up some infrastructure. The sample project show you how to use a CDF [Package](../user-guide/package-implementation.md).

Each sample targets a specific Cloud Provider (via a CDF Package), IaC Runtime and programming language.

At the moment all the samples are TypeScript.

The following instructions are based on MacOS but should work on Linux/Windows with some adjustments.

## Prerequisits

- NodeJS, intall the latest
- NPM, instsall the latest
- IaC runtime, Install [CDK TF CLI](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli#install-terraform) for the sample below
- Clon the repo, `git clone https://github.com/openfabr/cdf.git`
- [DigitalOcean](https://www.digitalocean.com/) (DO) account

## Run the Terraform CDK Sample Project

This sample is configured to create a Digital Ocean App and deploy a test app to it from a container image that's already published on DockerHub.

- Create a DO personal access token wiht read+write scope via the DO dashboard (see [instructions](https://docs.digitalocean.com/reference/api/create-personal-access-token/)).

- Open a terminal and run `export DIGITALOCEAN_ACCESS_TOKEN=<your access token>`

- Deploy to spin up the infrastructure
  
```cli
cdktf deploy
```

If successful you should see a new app in your Digital Ocean dashboard. Browsng to this URL should loaf a page saying "Hello world!"

- Tidy up after you finish everything:

```cli
cdktf destroy
```

That was bit boring but now that you have something working end-to-end you can experiment and learn by making small changes.

## Deep Dive

This CDK TF sample project uses the CDF Orchestrator to combine a CDF Package with an insfrastructure configuration file to produce a CDK TF Stack. The CDK TF CLI deploy command does the execution.

The CDF [Package](../user-guide/package-implementation.md) exposes building blocks that encapsulate complexities of the cloud provider services. The Package author decides which services to bundle in the package and how much to encapsulate. It's best to think of this as encapsulating common patterns and best practices.

You specify the infrastrucure to deploy by adjusting the config file [`./lib/config.json`](./lib/config.json). The schema of the config file is determined by the package. It's essentially a serialised version of the Package API.

## Try deploying your own app

If you want to try deploying your own app then publish as a container image to your DockerHub.

- login to your docker accoount`docker login`
- from the root of the app repo `docker build -t <registry_name>/<repo_name>:latest .`
- publish `docker push <registry_name>/<repo_name>:latest`

Then adjust this [`./lib/config.json`](./lib/config.json) to reflect your contianer registry name and container repo name.

```json
{
  "dockerhubRegistryName": <registry_name>,
  "containerRegistryRepoName": <repo_name>,
}
```

## Further Reading

- [CDK for Terraform Guide](https://developer.hashicorp.com/terraform/cdktf), read this if you aren't familiar with CDK for Terraform
- [OpenFABR CDF Overview](../user-guide/overview.md), learn about the Cloud Development Framework
- [Custom Module](customise-with-custom-modules.md), learn how to customise a Package authored by somebody else
- [CDF Package authoring](build-cdf-package.md), learn how to build your own Package
