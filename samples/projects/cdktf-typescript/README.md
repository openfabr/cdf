# CDKTF Sample Project

It demonstrates how to use OpenFABR CDF with HashiCorp CDKTF.

## Quick start

Pre-requisite: have a personal access token with read+write scope via the Digital Ocean dashboard.

Currently the project is using a local file-based state store.

- set `export DIGITALOCEAN_ACCESS_TOKEN=`
  

Repeat whenever you need to reprovision:

```
cdktf synth
```
and/or
```
cdktf deploy
```

Tidy up after you finish everything:

```
cdk destroy
```

## About AWS CDK

Read the [guide](https://developer.hashicorp.com/terraform/cdktf) first.

You will need it installed plus the node.js toolchain.

### Useful commands

* `npm run build`     compile typescript to js
* `npm run watch`     watch for changes and compile
* `npm run test`      perform the jest unit tests
* `cdktf deploy`      deploy this stack to your default AWS account/region
* `cdktf diff`        compare deployed stack with current state
* `cdktf synth`       emits the synthesized CloudFormation template
