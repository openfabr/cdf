import { PackageInfraConfig, PackagePlanner } from '@openfabr/package-ri-pulumi';
//import { PackageInfraConfig, PackagePlanner } from '../../packages/pulumi-typescript/dist';
//import { CustomModuleOne, CustomModuleAnother } from './custom-modules';
import config from './short-config.json'; //note: add `"resolveJsonModule": true` and `"esModuleInterop": true,` into tsconfig
import * as cdf from '@openfabr/cdf';


const planner = new PackagePlanner();

cdf.pulumi.initProjectComponent(
  config as PackageInfraConfig,
  planner,
  [],
  "rootComponent",
);
/*  */