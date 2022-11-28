import { ok, err, Result } from  'neverthrow';
import * as cdf from "@fabrltd/cdf";
import { App as DoApp,} from '@cdktf/provider-digitalocean/lib/app';
//import { Components } from "./constructs/components";
// import { Network } from "./construct/network";
import { Services } from "./constructs/services";


export enum DoAppPlatformRegions {
  NYC = 'NYC',
  AMS = 'AMS',
  SFO = 'SFO',
  SGP = 'SGP',
  LON = 'LON',
  FRA = 'FRA',
  TOR = 'TOR',
  BLR = 'BLR',
  SYD = 'SYD',
}

export class PackageGeneralConfig implements cdf.GeneralConfig {
  constructor(
    public readonly name: string,
  ) { }
}


export interface PackageComponentConfig extends cdf.ComponentConfig {
  // fields TBA
}
export class PackageComponentContainerRegConfig implements PackageComponentConfig {
  constructor(
    public readonly name: string,    
    public readonly containerRegistryRepoName: string
  ) { }

  public static has(config: cdf.RuntimeConfig<PackageComponentConfig>): boolean {
    return config.type == 'registry' && config.subtype == 'container';
  }
}

export interface PackageServiceConfig extends cdf.ServiceConfig {
  // fields TBA
}

export interface PackageNetworkConfig extends cdf.NetworkConfig {
  // fields TBA
}

export class PackageServiceDoAppConfig implements PackageServiceConfig {

  constructor(
    public readonly name: string,
    public readonly region: DoAppPlatformRegions,
    public readonly dockerhubRegistryName: string, 
    public readonly containerRegistryRepoName: string,
    public readonly replicas?: number,
    
  ) { }

  public static has(config: cdf.RuntimeConfig<PackageServiceConfig>): boolean {
    return config.type == 'app' && config.subtype == 'service';
  }
}

export interface PackageRelationConfig extends cdf.RelationConfig {
  // fields TBA
}

export class PackageInfraPlanConstructs implements cdf.InfraPlanConstructs {
  constructor(
    public readonly app: DoApp,
    //public readonly vpc: Vpc,
    //public readonly queues: Queue[],
    //public readonly topics: Topic[],
    //public readonly keys: Key[],
    //public readonly cluster: Cluster,
    //public readonly taskdefs: FargateTaskDefinition[],
    //public readonly services: FargateService[],
  ) { }
}

export class PackagePlanner implements cdf.Planner<PackageInfraPlanConstructs, PackageGeneralConfig, PackageNetworkConfig, PackageComponentConfig, PackageServiceConfig, PackageRelationConfig> {

  runWith(config: PackageInfraConfig, scope: any): Result<cdf.InfraPlan<PackageInfraPlanConstructs>, cdf.PlanError> {

    try {

      //const network = new Network(scope, 'network', { config });
      //const components = new Components(scope, 'components', { config });
      const services = new Services(scope, 'services', { config: config });

      // TODO add relations

      const constructs = new PackageInfraPlanConstructs(
        services.app
      )
      const outputs = new Map<string, any>();

      return ok(new cdf.InfraPlan(constructs, outputs));

    } catch (e) {
      return err(e instanceof Error ? { message: e.message } : { message: 'Unknown error' });
    }

  }

}

export type PackageInfraConfig = cdf.InfraConfig<PackageGeneralConfig, PackageNetworkConfig, PackageComponentConfig, PackageServiceConfig, PackageRelationConfig>;

export type PackageCustomModule = cdf.Custom<PackageInfraPlanConstructs, PackageGeneralConfig, PackageNetworkConfig, PackageComponentConfig, PackageServiceConfig, PackageRelationConfig>;

