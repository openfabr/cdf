import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import * as cdf from '@openfabr/cdf';
import { PackageComponentConfig, PackageCustomModule, PackageGeneralConfig, PackageInfraConfig, PackageInfraPlanConstructs, PackageNetworkConfig, PackagePlanner, PackageRelationConfig, PackageServiceConfig } from '../src/package-config';
import configA from './container-ecs.config.json';
import { ok, Result } from 'neverthrow';
import { Template } from 'aws-cdk-lib/assertions';

class CustomModuleStub implements PackageCustomModule {

  enhanceWith(config: cdf.InfraConfig<PackageGeneralConfig, PackageNetworkConfig, PackageComponentConfig, PackageServiceConfig, PackageRelationConfig>, result: cdf.InfraPlan<PackageInfraPlanConstructs>, scope: any): Result<cdf.InfraPlanOutputs, cdf.PlanError> {
    return ok(new Map<string, any>());
  }

}

describe('A project', () => {

  it('runs without custom modules', () => {

    const app = new cdk.App();

    const orchestrator = new cdf.Orchestrator(
      configA as PackageInfraConfig,
      new PackagePlanner(),
      [],
    );
  
    const stack = new cdf.awscdk.ProjectStack(app, 'ProjectStack', { orchestrator });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::EC2::Route',{
      "RouteTableId": {
        "Ref": "networkvpcprivatesubnetSubnet1RouteTable29D0DB31"
      },
      "DestinationCidrBlock": "0.0.0.0/0",
      "NatGatewayId": {
        "Ref": "networkvpcpublicsubnetSubnet1NATGateway0F75C03D"
      }
    });

  });
});
