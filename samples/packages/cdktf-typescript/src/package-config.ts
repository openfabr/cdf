import { ok, err, Result } from 'neverthrow';
import * as cdf from "@openfabr/cdf";
import { App as DoApp, } from '@cdktf/provider-digitalocean/lib/app';
//import { Components } from "./constructs/components";
// import { Network } from "./construct/network";
import { Services } from "./constructs/services";
import { General } from './constructs/general';

/**
 * The DO App Plaform is per region not datacentre hence just the geo prefix only
 * @see https://docs.digitalocean.com/products/platform/availability-matrix/#app-platform-availability
 */
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

/**
 * @see https://docs.digitalocean.com/products/platform/availability-matrix/#available-datacenters
 */
export enum DoRegionDatacenters {
  NYC1 = 'NYC1',
  NYC2 = 'NYC2',
  NYC3 = 'NYC3',
  AMS2 = 'AMS2',
  AMS3 = 'AMS3',
  SFO3 = 'SFO3',
  SGP1 = 'SGP1',
  LON1 = 'LON1',
  FRA1 = 'FRA1',
  TOR1 = 'TOR1',
  BLR1 = 'BLR1',
  SYD1 = 'SYD1',
}


export class PackageGeneralConfig implements cdf.GeneralConfig {
  constructor(
    public readonly name: string,
    /**
     * used as the region when one isn't passed in as an env var `TF_VAR_region=<region value>` or `--var 'region=<region value>'`
     * if executing via FABR Infra this value in the config will be overridden by the region value in the environment config.
     * Example 'LON', 'NYC', 'AMS', 'SFO', 'SGP', 'FRA', 'TOR', 'BLR', 'SYD
     * @see https://docs.digitalocean.com/products/platform/availability-matrix/#app-platform-availability
     */
    public readonly defaultRegion: DoAppPlatformRegions,
    /**
     * used as the datacenter region when one isn't passed in as an env var `TF_VAR_regionDatacenter=<region value>` or `--var 'regionDatacenter=<region value>'`
     * if executing via FABR Infra this value in the config will be overridden by the region value in the environment config.
     * @see https://docs.digitalocean.com/products/platform/availability-matrix/#available-datacenters
     */
    public readonly defaultRegionDatacenter: DoRegionDatacenters,
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
    public readonly dockerhubRegistryName: string,
    public readonly containerRegistryRepoName: string,
    /**
     * The number of instances to run for the service. Defaults to 1.
     */
    public readonly instanceCount?: number,

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
      const general = new General(scope, 'general', { config: config });
      const services = new Services(scope, 'services', { config: config, general: general });

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

