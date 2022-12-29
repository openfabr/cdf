// import { Vpc, IpAddresses, SubnetConfiguration } from "aws-cdk-lib/aws-ec2";
// import { Construct } from "constructs";
// import { NetworkSubnetDetail, NetworkSubnetType, PackageInfraConfig } from "../package-config";

//import * as pulumi from '@pulumi/pulumi';
//import * as cdf from "@openfabr/cdf";
import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws'
import { PackageInfraConfig } from '../package-config';
import { NetworkSubnetDetail } from "../package-network-config";


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

    const vpcId = args?.config.network.vpc.name;
    const vpcName= args?.config.network.vpc.name;

    if (vpcName == "default-vpc") {
      this.vpc = new aws.ec2.DefaultVpc("default-vpc");
    } else if (vpcId) {
      this.vpc = aws.ec2.getVpc({ id: vpcId }, {parent: this})
    } else {
      this.vpc = new aws.ec2.Vpc(vpcName!, {}, {parent: this})
      //TODO: flesh out with config like subnets etc.
    }



    getAvailabilityZonesResult.then((azs) => {

      azs.zoneIds.map((zid, i) => {
        const azName = azs.names[i];

        this.AvailabilityZonesInRegion.push({ id: zid, name: azName });
      });
    });


    this.AvailabilityZonesInRegion.map((az)=>{
      this.DefaultSubnets.push(new aws.ec2.DefaultSubnet(az.name, {
        availabilityZone: az.name,
        tags: {
          Name: `${az.name}`,
        },
      }, { parent: this }));
    });






    // const subnets = props.config.network.subnets?.map(d => <SubnetConfiguration>{
    //   cidrMask: d.mask,
    //   subnetType: NetworkSubnetDetail.subnetType(d.type),
    //   name: d.name,
    // });

    //const addresses = props.config.network.cidr ? IpAddresses.cidr(props.config.network.cidr) : undefined;
    // this.vpc = new Vpc(this, 'vpc', {
    //   vpcName: props.config.network.name,
    //   subnetConfiguration: subnets,
    //   ... { ipAddresses: addresses },
    // });
  }



}
