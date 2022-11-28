import { Distribution } from "aws-cdk-lib/aws-cloudfront";
import { Vpc, IpAddresses, SubnetConfiguration } from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
import { NetworkSubnetDetail, NetworkSubnetType, PackageInfraConfig } from "../package-config";

export interface NetworkProps {
  config: PackageInfraConfig,
}

export class Network extends Construct {
  readonly vpc: Vpc;

  constructor(scope: Construct, id: string, props: NetworkProps) {
    super(scope, id);

    const subnets = props.config.network.subnets?.map(d => <SubnetConfiguration>{
      cidrMask: d.mask,
      subnetType: NetworkSubnetDetail.subnetType(d.type),
      name: d.name,
    });

    const addresses = props.config.network.cidr ? IpAddresses.cidr(props.config.network.cidr) : undefined;
    this.vpc = new Vpc(this, 'vpc', {
      vpcName: props.config.network.name,
      subnetConfiguration: subnets,
      ... { ipAddresses: addresses },
    });
  }
}
