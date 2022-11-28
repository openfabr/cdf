import { Construct } from "constructs";
import { PackageInfraConfig, PackageServiceDoAppConfig, } from "../package-config";
import { DigitaloceanProvider } from '@cdktf/provider-digitalocean/lib/provider';
import { App as DoApp, AppConfig, AppSpecService, } from '@cdktf/provider-digitalocean/lib/app';


export interface ServicesProps {
  config: PackageInfraConfig,
  //vpc: Vpc,
}

export class Services extends Construct {
  // readonly cluster: Cluster;
  // readonly taskdefs: FargateTaskDefinition[];
  // readonly services: FargateService[];
  private _app!: DoApp;
  public get app() {
    return this._app;
  }

  constructor(scope: Construct, id: string, props: ServicesProps) {
    super(scope, id);

    const DoAppConfig = props.config.services.find(r => PackageServiceDoAppConfig.has(r));

    // const dooconfig: DigitaloceanProviderConfig = {
      
    // }
    new DigitaloceanProvider(this, 'digitalocean', {})

    DoAppConfig?.details.map(a => a as PackageServiceDoAppConfig).forEach(
      a => {
        const services: AppSpecService[] = [
          {
            name: DoAppConfig?.name + 'service',
            instanceCount: 1,
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
            region: a.region,
            service: services
          }
        };

        this._app = new DoApp(this, 'myDoApp', ac);

      }
    )
  }
}

