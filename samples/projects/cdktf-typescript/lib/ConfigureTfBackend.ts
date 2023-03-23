
import {  ok, Result } from "neverthrow";
import { PackageCustomModule, PackageInfraConfig, PackageInfraPlanConstructs } from "@openfabr/package-ri-cdktf";
//import { PackageCustomModule, PackageInfraConfig, PackageInfraPlanConstructs, PackagePlanner } from "../../../packages/awscdk-typescript";
import { InfraPlan, InfraPlanOutputs, PlanError } from "@openfabr/cdf";
//@ts-ignore
import * as cdktf from "cdktf";
//@ts-ignore
import * as path from 'node:path';
//@ts-ignore
import { DigitaloceanProvider } from '@cdktf/provider-digitalocean/lib/provider';

//@ts-ignore
import { Provider } from "./provider";
//@ts-ignore
import * as pkgConfig from '../../../customer/pkg.json';
//@ts-ignore
import * as customerVendorConfig from '../../../customer/vendor.json';

export class ConfigureTfBackend implements PackageCustomModule {
  
  enhanceWith(_config: PackageInfraConfig, _result: InfraPlan<PackageInfraPlanConstructs>, _scope: any): Result<InfraPlanOutputs, PlanError> {

    console.log("provider and backend config module called");
    // new cdktf.GcsBackend(_scope, {
    //   //TODO: move state into a isolated account/project so it's easier to lock down access.
    //   ...(process.env.FI_RUNNING_MODE == 'local' && { credentials: path.resolve(`../../local/${process.env.FI_TF_BACKEND_CRED_FILENAME}`) }), //TODO: switch to using the env var
    //   //...(process.env.FI_RUNNING_MODE == 'local' && { credentials: path.resolve(`../../local/fabr-infra-firebase-staging-166ff2800c93.json`) }),
    //   bucket: `${process.env.FI_FIREBASE_PROJECT_ID}.appspot.com`,
    //   prefix: `state/${process.env.FI_RT_TF_BACKEND_PREFIX}`,
    // });

    new DigitaloceanProvider(_scope, 'digitalocean-sdfds', {alias: 'janaka-do'})
    
    // const provider = new Provider(_scope, `digitalocean`, customerVendorConfig);
    // provider.getProvider();
     return ok(new Map<string, any>());
  }

}

