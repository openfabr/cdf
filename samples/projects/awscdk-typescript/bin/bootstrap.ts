#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import * as cdf from "@openfabr/cdf";
import config from '../lib/config.json';
import { PackageInfraConfig, PackagePlanner } from '@openfabr/package-ri-awscdk';
import { CustomModuleAnother, CustomModuleOne } from '../lib/modules';

const app = new cdk.App();

const stack = cdf.awscdk.initProjectStack(
  app, 
  config as PackageInfraConfig, 
  new PackagePlanner(), 
  [
    new CustomModuleOne(),
    new CustomModuleAnother(),
  ]
);
