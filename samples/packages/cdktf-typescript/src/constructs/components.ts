

import { Construct } from "constructs";
import { PackageComponentContainerRegConfig, PackageInfraConfig } from "../package-config";
import {ContainerRegistry, ContainerRegistryConfig} from '@cdktf/provider-digitalocean/lib/container-registry';

export interface ComponentsProps {
  config: PackageInfraConfig,
}


export class Components extends Construct {
 
  constructor(scope: Construct, id: string, props: ComponentsProps) {
    super(scope, id);


    props.config.components.forEach(t => {
      if(PackageComponentContainerRegConfig.has(t)) {
        const x = t.details[0] as PackageComponentContainerRegConfig
        const c: ContainerRegistryConfig = {
          name: x.containerRegistryRepoName,
          subscriptionTierSlug:'starter'
        }
        new ContainerRegistry(this, t.name + t.details[0].name, c)
      }
    })
  }
}
