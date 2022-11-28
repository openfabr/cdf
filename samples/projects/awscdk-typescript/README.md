# AWS CDK Sample Project

It demonstrates how to use OpenFABR CDF with AWS CDK.

## Quick start

Pre-requisite: have a set of AWS credentials set up, likely via AWS SDK.

One-off task to bootstrap CDK (if you haven't done so):

```
cdk bootstrap
```

(You will see `CDKTookit` being created as a stack in CloudFormation)

Repeat whenever you need to reprovision:

```
cdk synth
```
and/or
```
cdk deploy
```

(You will see `ProjectStack` being created as a stack in CloudFormation)

Tidy up after you finish everything:

```
cdk destroy
```

(The stack `CDKTookit` should stay but `ProjectStack` should disappear as a result)

## About AWS CDK

Read the [guide](https://docs.aws.amazon.com/cdk/v2/guide/home.html) first.

You will need it installed plus the node.js toolchain.

### Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
