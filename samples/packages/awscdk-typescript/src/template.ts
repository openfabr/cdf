import { err, Result } from "neverthrow";
import * as cdf from "@openfabr/cdf";
import { PackageCustomModule, PackageInfraConfig, PackageInfraPlanConstructs } from "@openfabr/package-ri-awscdk";

export class ProjectCustomModule implements PackageCustomModule {

  enhanceWith(config: PackageInfraConfig, result: cdf.InfraPlan<PackageInfraPlanConstructs>, scope: any): Result<cdf.InfraPlanOutputs, cdf.PlanError> {
    return err({ message: "Method not implemented." });
  }
  
}
