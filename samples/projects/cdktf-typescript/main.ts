import { App } from "cdktf";
import * as cdf from '@openfabr/cdf';
import { PackageInfraConfig, PackagePlanner } from '@openfabr/package-ri-cdktf';
import config from './lib/config.json';
import { ConfigureTfProvider } from './lib/ConfigureTfProvider';

const app = new App();

cdf.cdktf.initProjectStack(
  app,
  config as PackageInfraConfig,
  new PackagePlanner(),
  [new ConfigureTfProvider()],
);

app.synth();
