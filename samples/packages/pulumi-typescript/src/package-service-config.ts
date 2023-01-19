import * as cdf from "@openfabr/cdf";
import { PackageManifest, ServiceConfig } from "@openfabr/cdf";
import * as awsx from "@pulumi/awsx";
import * as manifest from "./cdf.manifest.json";

export enum ServiceAppType {
  /** Uses ALB */
  PUBLIC_LOADBALANCED = 'PUBLIC_LOADBALANCED',
  /** Uses NLB for internal services*/
  PRIVATE_LOADBALANCED = 'PRIVATE_LOADBALANCED',
  /** For side car containers */
  PRIVATE_NOT_LOADBALANCED = 'PRIVATE_NOT_LOADBALANCED',
  DEFAULT = PRIVATE_NOT_LOADBALANCED,
}

export enum ServiceTyping {
  CONTAINER_ECS = 'CONTAINER_ECS',
  DISTRIBUTION_WEBSITE = 'DISTRIBUTION_WEBSITE',
}

export interface PackageServiceConfig extends cdf.ServiceConfig {

}

export class PackageServiceStaticWebsiteHostingConfig implements PackageServiceConfig {
  static TYPING = (manifest as PackageManifest).constructs.services.types[ServiceTyping.DISTRIBUTION_WEBSITE];
  constructor(
    public readonly name: string,
    public readonly hostName?: string,
    public readonly domain?: string, //TODO: figure out how best to handle none AWS hosted DNS management

  ) { }

  public static has(config: cdf.TraitConfig<PackageServiceConfig>): boolean {
    return config.type == this.TYPING.type && config.subtype == this.TYPING.subtype;
  }

}

export class PackageServiceContainerEcsConfig implements PackageServiceConfig {
  static TYPING = (manifest as PackageManifest).constructs.services.types[ServiceTyping.CONTAINER_ECS];

  constructor(
    public readonly name: string,
    public readonly applicationType?: ServiceAppType,
    public readonly cpu?: number,
    public readonly mem?: number,
    /**
     * FQN of contianer <registry_hostname>/<repo_name>:<tag> e.g docker.io/janaka/test-api:latest
     */
    public readonly containerImage?: string,
    public readonly replicas?: number,
  ) { }

  public static has(config: cdf.TraitConfig<PackageServiceConfig>): boolean {
    return config.type == this.TYPING.type && config.subtype == this.TYPING.subtype;
  }

}
