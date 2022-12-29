import * as cdf from "@openfabr/cdf";
import * as awsx from "@pulumi/awsx";



export enum NetworkSubnetType {
  PUBLIC = 'public',
  PRIVATE = 'private',
  ISOLATED = 'isolated',
  DEFAULT = PUBLIC,
}

/**
 * Available number of zones vary by region. us-east-1 (North Virgia) has 6 which is the most. The majority only have 3 AZs. 
 * Remember AZ letters are logical designations and relative to each AWS account. 
 * So AZ `a` in one account isn't the same physical location and AZ `a` in another AWS account.
 * @see https://aws.amazon.com/about-aws/global-infrastructure/regions_az/
 */
export enum AvailabilityZone {
  AZ_A = 'a',
  AZ_B = 'b',
  AZ_C = 'c',
  AZ_D = 'd',
  AZ_E = 'e',
  AZ_F = 'f',
}

export class NetworkVpc implements cdf.NameAware {
  /**
   * 
   * @param name Default value = `default-vpc`. Value of `default-vpc` will safely adopt the existing default vpc within the region. Any other string value will create a new vpc. `id` provided then `name` is ignored
   * @param id id of an existing VPC in the region. If a value is provided the `name` param is ignored
   */
  constructor(
    public readonly name: string,
    public readonly id?: string
  ){
  }
}


export class NetworkSubnetDetail implements cdf.NameAware {
  constructor(
    public readonly name: string,
    public readonly type: NetworkSubnetType,
    public readonly cidrMask: number,
    public readonly availabilityZone?: AvailabilityZone,
  ) {}

  
  public static subnetType(type: NetworkSubnetType): awsx.ec2.SubnetType {
    switch (type) {
      case NetworkSubnetType.PUBLIC:
        return awsx.ec2.SubnetType.Public;
      case NetworkSubnetType.PRIVATE:
        return awsx.ec2.SubnetType.Private; //with egress to internet via IG
      case NetworkSubnetType.ISOLATED:
        return awsx.ec2.SubnetType.Isolated;
      default:
        return this.subnetType(NetworkSubnetType.DEFAULT);
    }
  }

}

export class PackageNetworkConfig implements cdf.NetworkConfig {
  /**
   * 
   * @param name 
   * @param domain 
   * @param vpc
   * @param cidrBlock a valid private ipv4 address block that's unused within the region e.g. 10.0.0.0/16. It's best practice to not have overlapping networks within your organisation. 
   * @param zones number of zones when creating a new VPC
   * @param subnets 
   */
  constructor(
    public readonly name: string,
    public readonly vpc: NetworkVpc,
    public readonly domain: string,
    public readonly cidrBlock?: string,
    public readonly zones?: number,
    public readonly subnets?: NetworkSubnetDetail[],
  ) {}
}