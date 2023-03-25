
import {  ok, Result } from "neverthrow";
import { PackageCustomModule, PackageInfraConfig, PackageInfraPlanConstructs } from "@openfabr/package-ri-cdktf";
import { InfraPlan, InfraPlanOutputs, PlanError } from "@openfabr/cdf";
import { DigitaloceanProvider } from '@cdktf/provider-digitalocean/lib/provider';

export class ConfigureTfProvider implements PackageCustomModule {
  
  enhanceWith(_config: PackageInfraConfig, _result: InfraPlan<PackageInfraPlanConstructs>, _scope: any): Result<InfraPlanOutputs, PlanError> {

    console.log("Provider config custom module called");

    new DigitaloceanProvider(_scope, 'digitalocean', {})
    
     return ok(new Map<string, any>());
  }

}

