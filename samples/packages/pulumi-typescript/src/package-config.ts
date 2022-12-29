//import { SubnetType, Vpc } from "aws-cdk-lib/aws-ec2";
//import { Cluster, FargateService, FargateTaskDefinition } from "aws-cdk-lib/aws-ecs";
// import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';

import { ok, err, Result } from "neverthrow";
import * as cdf from "@openfabr/cdf";
//import { Components, StaticWebsiteHosting } from "./construct/components";
import { Network } from "./constructs/network";
//import { Services } from "./construct/services";
//import { Relations } from "./construct/relations";
//import * as manifest from "./cdf.manifest.json";
//import { PackageManifest } from "@openfabr/cdf";
import { PackageNetworkConfig } from './package-network-config';
import { Components } from './constructs/components';
import { Relations } from './constructs/relations';
import { Services } from './constructs/services';


export class PackageGeneralConfig implements cdf.GeneralConfig {
  constructor(
    public readonly name: string,
  ) {}
}





export interface PackageComponentConfig extends cdf.ComponentConfig {
}

// export enum ComponentBlockPublicAccess {
//   BLOCK_ALL = 'BLOCK_ALL',
//   BLOCK_ACLS = 'BLOCK_ACLS',
//   DEFAULT = BLOCK_ALL,
// }

// export enum ComponentTyping {
//   STORE_OBJECT = 'STORE_OBJECT',
//   DISTRIBUTION_WEBSITE = 'DISTRIBUTION_WEBSITE',
// }




// export class PackageComponentStorageBucketConfig implements PackageComponentConfig {
//   static TYPING = (manifest as PackageManifest).constructs.components.types[ComponentTyping.STORE_OBJECT];
  
//   constructor(
//     public readonly name: string,
//     public readonly bucketName: string,
//     public readonly blockPublicAccess?: ComponentBlockPublicAccess,
//   ) {}

//   public static has(config: cdf.TraitConfig<PackageComponentConfig>): boolean {
//     return config.type == this.TYPING.type && config.subtype == this.TYPING.subtype;
//   }

//   public static awsBlockPublicAccess(blockPublicAccess?: ComponentBlockPublicAccess): BlockPublicAccess {
//     switch (blockPublicAccess) {
//       case ComponentBlockPublicAccess.BLOCK_ACLS:
//         return BlockPublicAccess.BLOCK_ACLS;
//       case ComponentBlockPublicAccess.BLOCK_ALL:
//         return BlockPublicAccess.BLOCK_ALL;
//       default:
//         return this.awsBlockPublicAccess(ComponentBlockPublicAccess.DEFAULT);
//     }
//   }

// }

// export class PackageComponentStaticWebsiteHostingConfig implements PackageComponentConfig {
//   static TYPING = (manifest as PackageManifest).constructs.components.types[ComponentTyping.DISTRIBUTION_WEBSITE];

//   constructor(
//     public readonly name: string,
//     public readonly hostName: string,
//     public readonly domain: string, //TODO: figure out how best to handle none AWS hosted DNS management
//   ) {}

//   public static has(config: cdf.TraitConfig<PackageComponentConfig>): boolean {
//     return config.type == this.TYPING.type && config.subtype == this.TYPING.subtype;
//   }
// }


export interface PackageServiceConfig extends cdf.ServiceConfig {
}

// export enum ServiceApplicationType {
//   PUBLIC = 'PUBLIC',
//   TASK = 'TASK',
//   DEFAULT = TASK,
// }

// export enum ServiceTyping {
//   CONTAINER_ECS = 'CONTAINER_ECS',
// }

// export class PackageServiceContainerEcsConfig implements PackageServiceConfig {
//   static TYPING = (manifest as PackageManifest).constructs.services.types[ServiceTyping.CONTAINER_ECS];

//   constructor(
//     public readonly name: string,
//     public readonly application: ServiceApplicationType,
//     public readonly cpu: number,
//     public readonly mem: number,
//     public readonly containerRegistry?: string, // TODO: change to and enum
//     public readonly containerImageName?: string,
//     public readonly replicas?: number,
    
//   ) { }

//   public static has(config: cdf.TraitConfig<PackageServiceConfig>): boolean {
//     return config.type == this.TYPING.type && config.subtype == this.TYPING.subtype;
//   }

//   public static serviceApplicationType(serviceApplicationType?: ServiceApplicationType): ServiceApplicationType {
//     switch (serviceApplicationType) {
//       case ServiceApplicationType.PUBLIC:
//         return ServiceApplicationType.PUBLIC        
//       case ServiceApplicationType.TASK:
//         return ServiceApplicationType.TASK        
//       default:
//         return ServiceApplicationType.DEFAULT        
//     }
//   } 
// }


export class PackageRelationConfig implements cdf.RelationConfig {
  constructor(
    public readonly name: string,
    public readonly start: string,
    public readonly finish: string,
    public readonly bidi: boolean,
    public readonly type: RelationTyping,
  ) {}
}

export enum RelationTyping {
  READ_OBJECT = 'READ_OBJECT',
  WRITE_OBJECT = 'WRITE_OBJECT',
}

export class PackageInfraPlanConstructs implements cdf.InfraPlanConstructs {
  constructor(
    public readonly vpc: aws.ec2.Vpc | aws.ec2.DefaultVpc | Promise<aws.ec2.GetVpcResult>,
    // public readonly buckets: { [key: string]: Bucket },
    // public readonly websites: { [key: string]: StaticWebsiteHosting },
    // public readonly taskdefs: { [key: string]: FargateTaskDefinition },
    // public readonly services: { [key: string]: FargateService },
    // public readonly cluster: Cluster,
  ) {}
}

export class PackagePlanner implements cdf.Planner<PackageInfraPlanConstructs, PackageGeneralConfig, PackageNetworkConfig, PackageComponentConfig, PackageServiceConfig, PackageRelationConfig> {

  runWith(config: PackageInfraConfig, scope: any): Result<cdf.InfraPlan<PackageInfraPlanConstructs>, cdf.PlanError> {

    try {
      const network = new Network('fabr:network', 'network', { config: config }, {parent: scope});
      const components = new Components('fabr:components', 'components', { config: config, vpc: network.vpc }, {parent: scope});
      const services = new Services('fabr:services', 'services', { config: config, vpc: network.vpc }, {parent: scope});
      const relations = new Relations('fabr:relations', 'relations', { config: config, components, services }, {parent: scope});

      const constructs = new PackageInfraPlanConstructs(
        network.vpc,
        // components.keys, components.queues, components.topics, components.buckets, components.websites, 
        // services.taskdefs, services.services, services.cluster, 
      );
      const outputs = new Map<string, any>();

      return ok(new cdf.InfraPlan(constructs, outputs));
    } catch (e) {
      return err(e instanceof Error ? { message: e.message } : { message: 'Unknown error' });
    }

  }

}

export type PackageComponentConfigChoices =  PackageComponentConfig; //PackageComponentStorageBucketConfig | PackageComponentStaticWebsiteHostingConfig;

export type PackageServiceConfigChoices = PackageServiceConfig; //PackageServiceContainerEcsConfig;

export type PackageInfraConfig = cdf.InfraConfig<PackageGeneralConfig, PackageNetworkConfig, PackageComponentConfigChoices, PackageServiceConfigChoices, PackageRelationConfig>;

export type PackageCustomModule = cdf.Custom<PackageInfraPlanConstructs, PackageGeneralConfig, PackageNetworkConfig, PackageComponentConfig, PackageServiceConfig, PackageRelationConfig>;

//'(config: PackageInfraConfig, scope: any) => Result<InfraPlan<PackageInfraPlanConstructs>, PlanError>'
//'(config: InfraConfig<PackageGeneralConfig, PackageNetworkConfig, PackageComponentConfig, PackageServiceConfig, PackageRelationConfig>, scope: any) => Result<...>'.