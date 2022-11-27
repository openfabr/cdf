import { Construct } from "constructs";
import { PackageInfraConfig } from "../package-config";

export interface RelationsProps {
  config: PackageInfraConfig,
}

export class Relations extends Construct {

  constructor(scope: Construct, id: string, props: RelationsProps) {
    super(scope, id);

  }
}

