import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'
//import * as cdf-pulumi-ri from '@openfabr/package-ri-pulumi';
import { PackageInfraConfig, PackagePlanner } from '../../packages/pulumi-typescript/src';
import { CustomModuleOne, CustomModuleAnother } from './custom-modules';
//import * as cdfhack from '../../cdf-package/aws/src/cdf-pulumi-hack';
import config from './short-config.json'; //note: add `"resolveJsonModule": true` and `"esModuleInterop": true,` into tsconfig
import * as cdf from '@openfabr/cdf';


const rootComponent = cdf.pulumi.initProjectComponent(

  config as PackageInfraConfig,
  new PackagePlanner(),
  [],
  "rootComponent",

);

