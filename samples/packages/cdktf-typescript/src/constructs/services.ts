import { Construct } from "constructs";
import { PackageInfraConfig, PackageServiceDoAppConfig, } from "../package-config";

import { App as DoApp, AppConfig, AppSpecService, } from '@cdktf/provider-digitalocean/lib/app';
import { TerraformOutput } from "cdktf";
import { General } from "./general";


export interface ServicesProps {
  config: PackageInfraConfig,
  general: General,
  //vpc: Vpc,
}

export class Services extends Construct {
  private _app!: DoApp;
  public get app() {
    return this._app;
  }

  constructor(scope: Construct, id: string, props: ServicesProps) {
    super(scope, id);

    const DoAppConfig = props.config.services.find(r => PackageServiceDoAppConfig.has(r));


    if (DoAppConfig) {
      DoAppConfig?.details.map(a => a as PackageServiceDoAppConfig).forEach(
        a => {
          const services: AppSpecService[] = [
            {
              name: DoAppConfig?.name,
              instanceCount: a.instanceCount || 1,
              instanceSizeSlug: 'professional-xs',
              dockerfilePath: 'Dockerfile',
              image: {
                registryType: 'DOCKER_HUB',
                registry: a.dockerhubRegistryName,
                repository: a.containerRegistryRepoName,
                tag: 'latest',
              }
            }
          ];

          const ac: AppConfig = {
            spec: {
              name: a.name,
              region: props.general.region,
              service: services
            }
          };

          this._app = new DoApp(this, DoAppConfig.name, ac);

          new TerraformOutput(scope, `${a.name}:url`, {
            value: this._app.liveUrl,
            description: `The URL of the app ${a.name}`,
          });


        }
      )
    }
  }
}

