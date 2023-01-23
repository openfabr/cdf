
import { err, ok, Result } from "neverthrow";
import { PackageCustomModule, PackageInfraConfig, PackageInfraPlanConstructs, PackagePlanner } from "@openfabr/package-ri-pulumi";
//import { PackageCustomModule, PackageInfraConfig, PackageInfraPlanConstructs, PackagePlanner } from "../../packages/pulumi-typescript/src";
import { InfraPlan, InfraPlanOutputs, Orchestrator, PlanError } from "@openfabr/cdf";

// Coming soon...
// CDF currently doesn't support customisation for Pulumi due differences behavior compared to CDK.

export class CustomModuleOne implements PackageCustomModule {
  
  enhanceWith(config: PackageInfraConfig, result: InfraPlan<PackageInfraPlanConstructs>, scope: any): Result<InfraPlanOutputs, PlanError> {
  
    return err({message: 'Not implemented yet'});
    //return ok(new Map<string, any>());
  }

}

export class CustomModuleAnother implements PackageCustomModule {
  
  enhanceWith(config: PackageInfraConfig, result: InfraPlan<PackageInfraPlanConstructs>, scope: any): Result<InfraPlanOutputs, PlanError> {
    return err({message: 'Not implemented yet'});
  }

}
