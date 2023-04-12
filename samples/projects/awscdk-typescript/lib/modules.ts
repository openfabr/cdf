
import { err, ok, Result } from "neverthrow";
import { PackageCustomModule, PackageInfraConfig, PackageInfraPlanConstructs, PackagePlanner } from "@openfabr/package-ri-awscdk";
//import { PackageCustomModule, PackageInfraConfig, PackageInfraPlanConstructs, PackagePlanner } from "../../../packages/awscdk-typescript";
import { InfraPlan, InfraPlanOutputs, Orchestrator, PlanError } from "@openfabr/cdf";

export class CustomModuleOne implements PackageCustomModule {
  
  enhanceWith(config: PackageInfraConfig, result: InfraPlan<PackageInfraPlanConstructs>, scope: any): Result<InfraPlanOutputs, PlanError> {
    result.constructs.cluster.addDefaultCloudMapNamespace({
      name: `ecs.${config.network.domain}`,
      vpc: result.constructs.vpc,
    });
    return ok(new Map<string, any>());
  }

}

export class CustomModuleAnother implements PackageCustomModule {
  
  enhanceWith(config: PackageInfraConfig, result: InfraPlan<PackageInfraPlanConstructs>, scope: any): Result<InfraPlanOutputs, PlanError> {
    
    return ok(new Map<string, any>());
  }

}
