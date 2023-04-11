

import { Construct } from "constructs";

import { TerraformVariable } from "cdktf";
import {  DoAppPlatformRegions, DoRegionDatacenters, PackageInfraConfig } from "../package-config";

export interface GeneralProps {
  config: PackageInfraConfig,
}


export class General extends Construct {

  public readonly region: DoAppPlatformRegions
  public readonly regionDatacenter: DoRegionDatacenters

  constructor(scope: Construct, id: string, props: GeneralProps) {
    super(scope, id);
    
    const regionInput = new TerraformVariable(scope, "REGION", {
      type: "string",
      default: props.config.general.defaultRegion.toString() ,
      description: "Default region for like 'LON' used for App Platform",
    });

    const datacenterInput = new TerraformVariable(scope, "REGIONDATACENTER", {
      type: "string",
      default: props.config.general.defaultRegionDatacenter.toString() ,
      description: "Default datacenter region for like 'LON1' used for services like Droplets that support datacenter",
    });


    this.region = regionInput.stringValue as DoAppPlatformRegions;
    this.regionDatacenter = datacenterInput.stringValue as DoRegionDatacenters;
  }
}
