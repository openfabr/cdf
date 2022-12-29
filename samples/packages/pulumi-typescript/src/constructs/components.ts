
import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws'
import { PackageInfraConfig } from '../package-config';



export interface ComponentsArgs {
  config: PackageInfraConfig,
  vpc: aws.ec2.Vpc | aws.ec2.DefaultVpc | Promise<aws.ec2.GetVpcResult>,
}


/**
 * The CDF `Component` constructure type is a subset of the Pulumi ComponentResource type therefore the concept doesn't have the exact same means between the two frameworks.
 */
export class Components extends pulumi.ComponentResource {

  constructor(type: string, name: string, args?: ComponentsArgs | undefined, opts?: pulumi.ComponentResourceOptions | undefined, remote?: boolean | undefined) {
    super(type, name, args, opts, remote);


  }

}
