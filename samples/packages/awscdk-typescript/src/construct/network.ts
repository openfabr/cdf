import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
import { NetworkSubnetDetail, PackageInfraConfig } from "../package-config";

export interface NetworkProps {
  config: PackageInfraConfig,
}

export class Network extends Construct {
  readonly vpc: ec2.Vpc;

  constructor(scope: Construct, id: string, props: NetworkProps) {
    super(scope, id);

    const subnets = props.config.network.subnets?.map(d => <ec2.SubnetConfiguration>{
      cidrMask: d.mask,
      subnetType: NetworkSubnetDetail.subnetType(d.type),
      name: d.name,
    });

    const addresses = props.config.network.cidr ? ec2.IpAddresses.cidr(props.config.network.cidr) : undefined;
    const vpcName = props.config.network.name;

    if (vpcName !== "default-vpc" && addresses) {
      this.vpc = new ec2.Vpc(this, 'vpc', {
        vpcName: vpcName,
        subnetConfiguration: subnets,
        ... { ipAddresses: addresses },
      });
      new cdk.CfnOutput(this.vpc, 'Vpc:Id', { value: this.vpc.vpcId, description: 'Id of the VPC.'});
      new cdk.CfnOutput(this.vpc, 'Vpc:Arn', { value: this.vpc.vpcArn, description: 'ARN of the the VPC'});
    };
  }
}
