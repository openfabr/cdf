import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import * as cdf from '@openfabr/cdf';
import { PackageComponentConfigChoices, PackageCustomModule, PackageGeneralConfig, PackageInfraConfig, PackageInfraPlanConstructs, PackageNetworkConfig, PackagePlanner, PackageRelationConfig, PackageServiceConfigChoices } from '../src/package-config';
import shortConfig from './short-config.json';
import longConfig from './long-config.json';
import { ok, Result } from 'neverthrow';
import { Template } from 'aws-cdk-lib/assertions';

class CustomModuleStub implements PackageCustomModule {

  enhanceWith(config: cdf.InfraConfig<PackageGeneralConfig, PackageNetworkConfig, PackageComponentConfigChoices, PackageServiceConfigChoices, PackageRelationConfig>, result: cdf.InfraPlan<PackageInfraPlanConstructs>, scope: any): Result<cdf.InfraPlanOutputs, cdf.PlanError> {
    return ok(new Map<string, any>());
  }

}

describe('A project', () => {

  it('runs without custom modules', () => {

    const app = new cdk.App();

    const orchestrator = new cdf.Orchestrator(
      shortConfig as PackageInfraConfig,
      new PackagePlanner(),
      [],
    );
  
    new cdf.awscdk.ProjectStack(app, 'ProjectStack', { orchestrator });
  });

  it('runs with some custom modules', () => {

    const app = new cdk.App();

    const orchestrator = new cdf.Orchestrator(
      longConfig as PackageInfraConfig,
      new PackagePlanner(),
      [
        new CustomModuleStub(),
      ],
    );
  
    const stack = new cdf.awscdk.ProjectStack(app, 'ProjectStack', { orchestrator });

    const template = Template.fromStack(stack);

    console.log(template.toJSON());
  });
});
