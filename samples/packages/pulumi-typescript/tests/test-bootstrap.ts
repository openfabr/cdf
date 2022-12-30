// this is the code that would be in a project bootstrap file. It pulls the stack together using a config and CDF ochestrator
import * as cdf from '@openfabr/cdf'
import { PackageInfraConfig, PackagePlanner } from '../src';
import config from './short-config.json'
import * as aws from '@pulumi/aws';

// Pulumi implicity creates a top level stack reference
// This rootComponent will be a child of the stack
// Pulumi `Stack` has a narrower definition. Each stack within a Pulumi project is only an instance with a different config, all stacks have the same "shape"
// Unlike CDK where a project can have multiple stacks of different "shapes" and stack is explicity created.
// export const rootComponent = cdf.pulumi.initProjectComponent(
//   //note: the `export`
//   config as PackageInfraConfig, 
//   new PackagePlanner(), 
//   [],
//   "rootComponent",
// );


export const mybucket = new aws.s3.Bucket("mybucket", {bucket:"my-test-bucket"});


export const timeURL = new aws.lambda.FunctionUrl("time-url", {
  functionName: "ddddd",
  authorizationType: "NONE",
  cors: {
      allowOrigins: ["*"],
      allowMethods: ["GET"],
  },
});