
import * as pulumi from '@pulumi/pulumi';
//import * as aws from '@pulumi/aws'
import { PackageInfraConfig } from '../package-config';

interface RelationsArgsFromComponents {

}

interface RelationsArgsFromServices {

}

export interface RelationsArgs {
  config: PackageInfraConfig,
  components: RelationsArgsFromComponents,
  services: RelationsArgsFromServices,
}


/**
 * The CDF `Relations` constructure type is a subset of the Pulumi ComponentResource type therefore the concept doesn't have the exact same means between the two frameworks.
 */
export class Relations extends pulumi.ComponentResource {

  constructor(type: string, name: string, args?: RelationsArgs | undefined, opts?: pulumi.ComponentResourceOptions | undefined, remote?: boolean | undefined) {
    super(type, name, args, opts, remote);

    // must be at the end of constructor
    this.registerOutputs();
  }

}
