import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws'
import { PackageInfraConfig } from '../package-config';

export interface NetworkArgs {
  config: PackageInfraConfig,
}

export interface AvailabilityZone {
  name: string,
  id: string,
}

export class Network extends pulumi.ComponentResource {
  /**
   * 
   * @see https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html
   */
  readonly vpc: aws.ec2.Vpc | aws.ec2.DefaultVpc | Promise<aws.ec2.GetVpcResult>;
  /**
   * The availbility zones available in this region. This is useful because a new regions have more than 3 AZs and new regions can have less for a while as they fully spin up.
   * local zones are filtered out.
   */
  readonly AvailabilityZonesInRegion: AvailabilityZone[]
  /**
   * 
   * @see https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html
   */
  readonly DefaultSubnets: aws.ec2.DefaultSubnet[]

  readonly vpcName: pulumi.Output<string>;
  readonly vpcId: string | undefined;


  constructor(type: string, name: string, args?: NetworkArgs | undefined, opts?: pulumi.ComponentResourceOptions | undefined, remote?: boolean | undefined) {
    super(type, name, args, opts, remote);

    this.AvailabilityZonesInRegion = [];
    this.DefaultSubnets = [];

    const getAvailabilityZonesResult = aws.getAvailabilityZones({
      filters: [{ //just AZs, not Local Zones
        name: "opt-in-status",
        values: ["opt-in-not-required"],
      }],
    });

    this.vpcId = args?.config.network.vpc.name;
    this.vpcName = pulumi.concat(args?.config.network.vpc.name);
    //this.vpc = new aws.ec2.Vpc("fabrtest")

    if (args?.config.network.vpc.name == "default-vpc") {
      this.vpc = new aws.ec2.DefaultVpc("default-vpc");
    } else if (this.vpcId) {
      this.vpc = aws.ec2.getVpc({ id: this.vpcId }, {parent: this})
      this.vpcName = pulumi.concat("");
      
    } else {
      this.vpc = new aws.ec2.Vpc(args!.config.network.vpc.name, {}, {parent: this})
      //TODO: flesh out with config like subnets etc.
    }

    this.registerOutputs();
  }



}
