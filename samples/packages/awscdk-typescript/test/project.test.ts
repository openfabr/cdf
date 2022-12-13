import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import * as cdf from '@openfabr/cdf';
import { PackageComponentConfigChoices, PackageCustomModule, PackageGeneralConfig, PackageInfraConfig, PackageInfraPlanConstructs, PackageNetworkConfig, PackagePlanner, PackageRelationConfig, PackageServiceConfigChoices } from '../src/package-config';
import configA from './configA.json';
import configB from './configB.json';
import { ok, Result } from 'neverthrow';

class CustomModuleStub implements PackageCustomModule {

  enhanceWith(config: cdf.InfraConfig<PackageGeneralConfig, PackageNetworkConfig, PackageComponentConfigChoices, PackageServiceConfigChoices, PackageRelationConfig>, result: cdf.InfraPlan<PackageInfraPlanConstructs>, scope: any): Result<cdf.InfraPlanOutputs, cdf.PlanError> {
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
  
    new cdf.awscdk.ProjectStack(app, 'ProjectStack', { orchestrator });
  });

  it('runs with some custom modules', () => {

    const app = new cdk.App();

    const orchestrator = new cdf.Orchestrator(
      configB as PackageInfraConfig,
      new PackagePlanner(),
      [
        new CustomModuleStub(),
      ],
    );
  
    new cdf.awscdk.ProjectStack(app, 'ProjectStack', { orchestrator });
  });
});
