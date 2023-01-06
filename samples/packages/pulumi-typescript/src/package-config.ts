import * as aws from '@pulumi/aws';
import * as awsx from '@pulumi/awsx';
import * as pulumi from '@pulumi/pulumi';
import { ok, err, Result } from 'neverthrow';
import * as cdf from "@openfabr/cdf";
import { ecsCluster } from "./constructs/services";
//import { Components, StaticWebsiteHosting } from "./construct/components";
import { Network } from "./constructs/network";
//import { Services } from "./construct/services";
//import { Relations } from "./construct/relations";
//import * as manifest from "./cdf.manifest.json";
//import { PackageManifest } from "@openfabr/cdf";
import { PackageNetworkConfig } from './package-network-config';
import { PackageServiceStaticWebsiteHostingConfig, PackageServiceContainerEcsConfig, PackageServiceConfig } from './package-service-config';
import { Components, PackageComponentConfig } from './constructs/components';
import { Relations } from './constructs/relations';
import { Services } from './constructs/services';
import { InfraPlanOutputs } from '@openfabr/cdf';
import { StaticWebsiteHosting } from './constructs/static-website-hosting';


export class PackageGeneralConfig implements cdf.GeneralConfig {
  constructor(
    public readonly name: string,
  ) { }
}


export class PackageRelationConfig implements cdf.RelationConfig {
  constructor(
    public readonly name: string,
    public readonly start: string,
    public readonly finish: string,
    public readonly bidi: boolean,
    public readonly type: RelationTyping,
  ) { }
}

export enum RelationTyping {
  READ_OBJECT = 'READ_OBJECT',
  WRITE_OBJECT = 'WRITE_OBJECT',
}

export class PackageInfraPlanConstructs implements cdf.InfraPlanConstructs {
  public readonly outputs:InfraPlanOutputs;
  constructor(
    public readonly network: Network,
    //public readonly buckets: { [key: string]: Buckets },
    public readonly websites: { [key: string]: StaticWebsiteHosting },
    public readonly ecsClusters: { [key: string]: ecsCluster },
  ) { 
    const _o = new Map<string, any>()
    _o.set("network", network)
    
    //_o.set("test-api", ecsClusters["my-cluster"].services && ecsClusters["my-cluster"].services["test-api"].service)
    _o.set("websites", websites)

    this.outputs = _o;
  }
}

export class PackagePlanner implements cdf.Planner<PackageInfraPlanConstructs, PackageGeneralConfig, PackageNetworkConfig, PackageComponentConfig, PackageServiceConfig, PackageRelationConfig> {

  runWith(config: PackageInfraConfig, scope: any): Result<cdf.InfraPlan<PackageInfraPlanConstructs>, cdf.PlanError> {

    try {
      const network = new Network('fabr:network', 'network', { config: config }, { parent: scope });
      const components = new Components('fabr:components', 'components', { config: config, vpc: network.vpc }, { parent: scope });
      const services = new Services('fabr:services', 'services', { config: config, vpc: network.vpc }, { parent: scope });
      const relations = new Relations('fabr:relations', 'relations', { config: config, components, services }, { parent: scope });

      const constructs = new PackageInfraPlanConstructs(
        network, services.websites, services.ecsClusters
        // components.keys, components.queues, components.topics, components.buckets, components.websites, 
        // services.taskdefs, services.services, services.cluster, 
      );

  
      const ip:cdf.InfraPlan<PackageInfraPlanConstructs> = new cdf.InfraPlan(constructs, constructs.outputs)
      return ok(ip);
    } catch (e) {
      return err(e instanceof Error ? { message: e.message } : { message: 'Unknown error' });
    }

  }

}

export type PackageComponentConfigChoices = PackageComponentConfig; //PackageComponentStorageBucketConfig;

export type PackageServiceConfigChoices = PackageServiceStaticWebsiteHostingConfig | PackageServiceContainerEcsConfig;

export type PackageInfraConfig = cdf.InfraConfig<PackageGeneralConfig, PackageNetworkConfig, PackageComponentConfigChoices, PackageServiceConfigChoices, PackageRelationConfig>;

export type PackageCustomModule = cdf.Custom<PackageInfraPlanConstructs, PackageGeneralConfig, PackageNetworkConfig, PackageComponentConfig, PackageServiceConfig, PackageRelationConfig>;