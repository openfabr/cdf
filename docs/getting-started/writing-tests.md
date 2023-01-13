# Writing Tests

A key advantage of using imperative IaC is the ability to write test automation using the respective languages full ecossystem. This is a big deal. One can use familiar tools, patterns, and workflows that are mature.

Pure declaritive IaC will never be able to compete on this front, and will always be lagging behind.

## AWS CDK

AWS CDK comes with an [assertion library](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.assertions-readme.html) which makes life easy. It enables you to construct various assertions against the synthesized plan output in JSON format. Read the AWS CDK testing docs for a full refence:

- [Assertion Library Reference](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.assertions-readme.html)
- [Testing Constructs Getting Started Guide](https://docs.aws.amazon.com/cdk/v2/guide/testing.html)

??? tip "Tip on JSON Output"
    There are two ways to output the plan as json.

    - CLI: run `#!shell cdk synth --json` on a project.
    - Code in the test: add the following line to the body of a test. This is convenient when working on CDF Packages. `#!typescript console.log(JSON.stringify(template.toJSON(), null, 2));`

Here's an exmple of how package authors can write tests for a TypeScript Package with Jest.

```typescript title="service-container-ecs.test.ts" linenums="1"
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import * as cdf from '@openfabr/cdf';
import { PackageComponentConfig, PackageCustomModule, PackageGeneralConfig, PackageInfraConfig, PackageInfraPlanConstructs, PackageNetworkConfig, PackagePlanner, PackageRelationConfig, PackageServiceConfig } from '../src/package-config';
import configA from './container-ecs.config.json'; //(1)!
import { ok, Result } from 'neverthrow';
import { Match, Template } from 'aws-cdk-lib/assertions';

class CustomModuleStub implements PackageCustomModule {

  enhanceWith(config: cdf.InfraConfig<PackageGeneralConfig, PackageNetworkConfig, PackageComponentConfig, PackageServiceConfig, PackageRelationConfig>, result: cdf.InfraPlan<PackageInfraPlanConstructs>, scope: any): Result<cdf.InfraPlanOutputs, cdf.PlanError> {
    return ok(new Map<string, any>());
  }

}

describe('A project', () => {

  it('deploys a public web servies on ECS Fargate', () => {

    const app = new cdk.App();

    const orchestrator = new cdf.Orchestrator( 
      configA as PackageInfraConfig,
      new PackagePlanner(),
      [],
    );

    const stack = new cdf.awscdk.ProjectStack(app, 'ProjectStack', { orchestrator }); //(2)!

    const template = Template.fromStack(stack);
    
    console.log(JSON.stringify(template.toJSON(), null , 2)); // (3)!

    template.resourceCountIs('AWS::ElasticLoadBalancingV2::Listener', 1); // (4)!
    template.resourceCountIs('AWS::ECS::Cluster', 1);
    template.resourceCountIs('AWS::ElasticLoadBalancingV2::TargetGroup', 1);
    template.resourceCountIs('AWS::ECS::Service', 1);

    template.hasResource('AWS::ECS::Service', { Properties: { LaunchType: "FARGATE" } }); // (5)!

  });
});

```

1. Supply a config file that's scoped to the Service or Component being tested. This helps at both test dev time by making it easier to scan the JSON. It will also make tests run faster.
2. Setup a `Stack` instance, same as the project bootstrap where the Package is used for real.
3. This line outputs the synthesized plan in JSON to the console. This is convenient during development.
4. Check that there's one of each resource
5. Check that all ECS Services have the prop `{ LaunchType: "FARGATE" }`

Run Jest to execute tests. In the sampke Package this is mapped to `npm test`.

See the AWS CDK Package test folder [/samples/packages/awscdk-typescript/test](../../samples/packages/awscdk-typescript/test) for fully working tests.

## CDK for Terraform

Coming...

## Pulumi

Coming...


