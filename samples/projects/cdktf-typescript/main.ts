import { App } from "cdktf";
import * as cdf from '@openfabr/cdf';
import { PackageInfraConfig, PackagePlanner } from '@openfabr/package-ri-cdktf';
import config from './lib/config.json';
import { ConfigureTfBackend } from './lib/ConfigureTfBackend';

const app = new App();

cdf.cdktf.initProjectStack(
  app,
  config as PackageInfraConfig,
  new PackagePlanner(),
  [new ConfigureTfBackend()],
);

app.synth();
