import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import * as cdf from "@openfabr/cdf";
import {
  PackageCustomModule,
  PackageGeneralConfig,
  PackageInfraConfig,
  PackageInfraPlanConstructs,
  PackageNetworkConfig,
  PackagePlanner,
  PackageComponentConfigChoices,
  PackageRelationConfigChoices,
  PackageServiceConfigChoices,
} from "../src/package-config";
import configA from "./component-distribution-staticwebsite.config.json";
import { ok, Result } from "neverthrow";
import { Match, Template } from "aws-cdk-lib/assertions";

class CustomModuleStub implements PackageCustomModule {
  enhanceWith(
    config: cdf.InfraConfig<
      PackageGeneralConfig,
      PackageNetworkConfig,
      PackageComponentConfigChoices,
      PackageServiceConfigChoices,
      PackageRelationConfigChoices
    >,
    result: cdf.InfraPlan<PackageInfraPlanConstructs>,
    scope: any
  ): Result<cdf.InfraPlanOutputs, cdf.PlanError> {
    return ok(new Map<string, any>());
  }
}

describe("A project", () => {
  it("deploys a static website to S3 website bucket", () => {
    const app = new cdk.App();

    const orchestrator = new cdf.Orchestrator(
      configA as PackageInfraConfig,
      new PackagePlanner(),
      []
    );

    const stack = new cdf.awscdk.ProjectStack(app, "ProjectStack", {
      orchestrator,
    });

    const template = Template.fromStack(stack);

    // The following line output the entire plan in json. Usefull during test development.

    console.log(JSON.stringify(template.toJSON(), null, 2));

    template.resourceCountIs("AWS::CloudFront::Distribution", 1);
    template.resourceCountIs("AWS::S3::BucketPolicy", 1);
    template.resourceCountIs("AWS::S3::Bucket", 1);
    template.hasResourceProperties("AWS::S3::BucketPolicy", {
      PolicyDocument: {
        Statement: Match.arrayWith([
          // We need to use Match.objectLike() explicitly since we're now
          // inside an array and doing a partial match.
          Match.objectLike(
          {
            Action: Match.arrayEquals([
              "s3:GetObject*",
              "s3:GetBucket*",
              "s3:List*",
            ]),
            Effect: "Allow",
          }),
        ]),
      },
    });
  });
});
