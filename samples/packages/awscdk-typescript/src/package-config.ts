import { SubnetType, Vpc } from "aws-cdk-lib/aws-ec2";
import { Cluster, FargateService, FargateTaskDefinition } from "aws-cdk-lib/aws-ecs";
import { Key, KeySpec, KeyUsage } from "aws-cdk-lib/aws-kms";
import { BlockPublicAccess } from "aws-cdk-lib/aws-s3";
import { Topic } from "aws-cdk-lib/aws-sns";
import { Queue } from "aws-cdk-lib/aws-sqs";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { ok, err, Result } from "neverthrow";
import * as cdf from "@openfabr/cdf";
import { Components, StaticWebsiteHosting } from "./construct/components";
import { Network } from "./construct/network";
import { Services } from "./construct/services";
import { Relations } from "./construct/relations";

export class PackageGeneralConfig implements cdf.GeneralConfig {
  constructor(
    public readonly name: string,
  ) {}
}

export enum NetworkSubnetType {
  PUBLIC = 'public',
  PRIVATE = 'private',
  ISOLATED = 'isolated',
  DEFAULT = PUBLIC,
}

export class NetworkSubnetDetail implements cdf.NameAware {
  constructor(
    public readonly name: string,
    public readonly type: NetworkSubnetType,
    public readonly mask: number,
  ) {}

  public static subnetType(type: NetworkSubnetType): SubnetType {
    switch (type) {
      case NetworkSubnetType.PUBLIC:
        return SubnetType.PUBLIC;
      case NetworkSubnetType.PRIVATE:
        return SubnetType.PRIVATE_WITH_EGRESS;
      case NetworkSubnetType.ISOLATED:
        return SubnetType.PRIVATE_ISOLATED;
      default:
        return this.subnetType(NetworkSubnetType.DEFAULT);
    }
  }

}

export class PackageNetworkConfig implements cdf.NetworkConfig {
  constructor(
    public readonly name: string,
    public readonly domain: string,
    public readonly cidr?: string,
    public readonly zones?: number,
    public readonly subnets?: NetworkSubnetDetail[],
  ) {}
}

export interface PackageComponentConfig extends cdf.ComponentConfig {
}

export enum ComponentKeySpec {
  SYMMETRIC_DEFAULT = 'SYMMETRIC_DEFAULT',
  RSA_4096 = 'RSA_4096',
  ECC_NIST_P521 = 'ECC_NIST_P521',
  ECC_SECG_P256K1 = 'ECC_SECG_P256K1',
  DEFAULT = RSA_4096,
}

export enum ComponentKeyUsage {
  SIGN_VERIFY = 'SIGN_VERIFY',
  ENCRYPT_DECRYPT = 'ENCRYPT_DECRYPT',
  DEFAULT = ENCRYPT_DECRYPT,
}

export enum ComponentBlockPublicAccess {
  BLOCK_ALL = 'BLOCK_ALL',
  BLOCK_ACLS = 'BLOCK_ACLS',
  DEFAULT = BLOCK_ALL,
}

export class PackageComponentKeySoftwareConfig implements PackageComponentConfig {

  constructor(
    public readonly name: string,
    public readonly spec?: ComponentKeySpec,
    public readonly usage?: ComponentKeyUsage,
    public readonly enabled?: boolean,
    public readonly rotation?: boolean,
  ) {}

  public static has(config: cdf.TraitConfig<PackageComponentConfig>): boolean {
    return config.type == 'key' && config.subtype == 'software';
  }

  public static awsKeySpec(spec?: ComponentKeySpec): KeySpec {
    switch (spec) {
      case ComponentKeySpec.SYMMETRIC_DEFAULT:
        return KeySpec.SYMMETRIC_DEFAULT;
      case ComponentKeySpec.RSA_4096:
        return KeySpec.RSA_4096;
      case ComponentKeySpec.ECC_NIST_P521:
        return KeySpec.ECC_NIST_P521;
      case ComponentKeySpec.ECC_SECG_P256K1:
        return KeySpec.ECC_SECG_P256K1;
      default:
        return this.awsKeySpec(ComponentKeySpec.DEFAULT);
    }
  }

  public static awsKeyUsage(usage?: ComponentKeyUsage): KeyUsage {
    switch (usage) {
      case ComponentKeyUsage.ENCRYPT_DECRYPT:
        return KeyUsage.ENCRYPT_DECRYPT;
      case ComponentKeyUsage.SIGN_VERIFY:
        return KeyUsage.SIGN_VERIFY;
      default:
        return this.awsKeyUsage(ComponentKeyUsage.DEFAULT);
    }
  }

}

export class PackageComponentMessageQueueConfig implements PackageComponentConfig {

  constructor(
    public readonly name: string,
    public readonly fifo?: boolean,
    public readonly dlq?: number,
  ) {}

  public static has(config: cdf.TraitConfig<PackageComponentConfig>): boolean {
    return config.type == 'message' && config.subtype == 'queue';
  }
}

export class PackageComponentMessageTopicConfig implements PackageComponentConfig {

  constructor(
    public readonly name: string,
    public readonly fifo?: boolean,
  ) {}

  public static has(config: cdf.TraitConfig<PackageComponentConfig>): boolean {
    return config.type == 'message' && config.subtype == 'topic';
  }
}


export class PackageComponentStorageBucketConfig implements PackageComponentConfig {
  constructor(
    public readonly name: string,
    public readonly bucketName: string,
    public readonly blockPublicAccess?: ComponentBlockPublicAccess,
  ) {}

  public static has(config: cdf.TraitConfig<PackageComponentConfig>): boolean {
    return config.type == 'storage' && config.subtype == 'bucket';
  }

  public static awsBlockPublicAccess(blockPublicAccess?: ComponentBlockPublicAccess): BlockPublicAccess {
    switch (blockPublicAccess) {
      case ComponentBlockPublicAccess.BLOCK_ACLS:
        return BlockPublicAccess.BLOCK_ACLS;
      case ComponentBlockPublicAccess.BLOCK_ALL:
        return BlockPublicAccess.BLOCK_ALL;
      default:
        return this.awsBlockPublicAccess(ComponentBlockPublicAccess.DEFAULT);
    }
  }

}

export class PackageComponentStaticWebsiteHostingConfig implements PackageComponentConfig {
  constructor(
    public readonly name: string,
    public readonly hostName: string,
    public readonly domain: string, //TODO: figure out how best to handle none AWS hosted DNS management
  ) {}

  public static has(config: cdf.TraitConfig<PackageComponentConfig>): boolean {
    return config.type == 'distribution' && config.subtype == 'staticWebsite';
  }
}


export interface PackageServiceConfig extends cdf.ServiceConfig {
}

export enum ServiceApplicationType {
  PUBLIC = 'PUBLIC',
  TASK = 'TASK',
  DEFAULT = TASK,
}

export class PackageServiceContainerEcsConfig implements PackageServiceConfig {

  constructor(
    public readonly name: string,
    public readonly application: ServiceApplicationType,
    public readonly cpu: number,
    public readonly mem: number,
    public readonly containerRegistry?: string, // TODO: change to and enum
    public readonly containerImageName?: string,
    public readonly replicas?: number,
    
  ) { }

  public static has(config: cdf.TraitConfig<PackageServiceConfig>): boolean {
    return config.type == 'container' && config.subtype == 'ecs';
  }

  public static serviceApplicationType(serviceApplicationType?: ServiceApplicationType): ServiceApplicationType {
    switch (serviceApplicationType) {
      case ServiceApplicationType.PUBLIC:
        return ServiceApplicationType.PUBLIC        
      case ServiceApplicationType.TASK:
        return ServiceApplicationType.TASK        
      default:
        return ServiceApplicationType.DEFAULT        
    }
  } 
}


export interface PackageRelationConfig extends cdf.RelationConfig {
}

export enum RelationMessagingType {
  PUBLISH = 'PUBLISH',
  SUBSCRIBE = 'SUBSCRIBE',
}

export class PackageRelationMessagingConfig implements PackageRelationMessagingConfig {
  public readonly bidi = false;

  constructor(
    public readonly name: string,
    public readonly start: string,
    public readonly finish: string,
    public readonly type: RelationMessagingType,
  ) {}

}

export class PackageInfraPlanConstructs implements cdf.InfraPlanConstructs {
  constructor(
    public readonly vpc: Vpc,
    public readonly queues: Queue[],
    public readonly topics: Topic[],
    public readonly keys: Key[],
    public readonly taskdefs: FargateTaskDefinition[],
    public readonly services: FargateService[],
    public readonly staticWebsites: StaticWebsiteHosting[],
    public readonly cluster: Cluster,

  ) {}
}

export class PackagePlanner implements cdf.Planner<PackageInfraPlanConstructs, PackageGeneralConfig, PackageNetworkConfig, PackageComponentConfig, PackageServiceConfig, PackageRelationConfigChoices> {

  runWith(config: PackageInfraConfig, scope: any): Result<cdf.InfraPlan<PackageInfraPlanConstructs>, cdf.PlanError> {

    try {
      const network = new Network(scope, 'network', { config });
      const components = new Components(scope, 'components', { config });
      const services = new Services(scope, 'services', { config: config, vpc: network.vpc });
      const relations = new Relations(scope, 'relations', { config });

      const constructs = new PackageInfraPlanConstructs(
        network.vpc, components.queues, components.topics, components.keys, 
        services.taskdefs, services.services, components.staticWebsites, services.cluster, 
      );
      const outputs = new Map<string, any>();

      return ok(new cdf.InfraPlan(constructs, outputs));
    } catch (e) {
      return err(e instanceof Error ? { message: e.message } : { message: 'Unknown error' });
    }

  }

}

export type PackageComponentConfigChoices = PackageComponentKeySoftwareConfig | PackageComponentMessageQueueConfig | PackageComponentMessageTopicConfig | PackageComponentStorageBucketConfig | PackageComponentStaticWebsiteHostingConfig;

export type PackageServiceConfigChoices = PackageServiceContainerEcsConfig;

export type PackageRelationConfigChoices = PackageRelationMessagingConfig;

export type PackageInfraConfig = cdf.InfraConfig<PackageGeneralConfig, PackageNetworkConfig, PackageComponentConfigChoices, PackageServiceConfigChoices, PackageRelationConfigChoices>;

export type PackageCustomModule = cdf.Custom<PackageInfraPlanConstructs, PackageGeneralConfig, PackageNetworkConfig, PackageComponentConfig, PackageServiceConfig, PackageRelationConfigChoices>;

