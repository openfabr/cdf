import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import * as cdf from '@openfabr/cdf';
import { PackageComponentConfigChoices, PackageCustomModule, PackageGeneralConfig, PackageInfraConfig, PackageInfraPlanConstructs, PackageNetworkConfig, PackagePlanner, PackageRelationConfigChoices, PackageServiceConfigChoices } from '../src/package-config';
import configA from './container-ecs.config.json';
import { ok, Result } from 'neverthrow';
import { Match, Template } from 'aws-cdk-lib/assertions';

class CustomModuleStub implements PackageCustomModule {

  enhanceWith(config: cdf.InfraConfig<PackageGeneralConfig, PackageNetworkConfig, PackageComponentConfigChoices, PackageServiceConfigChoices, PackageRelationConfigChoices>, result: cdf.InfraPlan<PackageInfraPlanConstructs>, scope: any): Result<cdf.InfraPlanOutputs, cdf.PlanError> {
    return ok(new Map<string, any>());
  }

}

describe('A project', () => {

  it('deploys a public web service on ECS Fargate', () => {

    const app = new cdk.App();

    const orchestrator = new cdf.Orchestrator(
      configA as PackageInfraConfig,
      new PackagePlanner(),
      [],
    );
  
    const stack = new cdf.awscdk.ProjectStack(app, 'ProjectStack', { orchestrator });

    const template = Template.fromStack(stack);

    // The following line output the entire plan in json. Usefull during test development.

    //console.log(JSON.stringify(template.toJSON(), null , 2));

    template.resourceCountIs('AWS::ElasticLoadBalancingV2::Listener', 1);
    template.resourceCountIs('AWS::ECS::Cluster', 1);
    template.resourceCountIs('AWS::ElasticLoadBalancingV2::TargetGroup', 1);
    template.resourceCountIs('AWS::ECS::Service', 1); 
    template.hasResource('AWS::ECS::Service',{Properties: { LaunchType: "FARGATE"}});  

  });
});
