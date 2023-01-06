// this is the code that would be in a project bootstrap file. It pulls the stack together using a config and CDF ochestrator
import * as cdf from '@openfabr/cdf'
import { PackageInfraConfig, PackageInfraPlanConstructs, PackagePlanner } from '../src';
import config from './short-config.json'
import * as aws from '@pulumi/aws';
import { InfraPlanConstructs, GeneralConfig, NetworkConfig, ComponentConfig, ServiceConfig, RelationConfig, InfraConfig, Planner, Custom, ResultHandler, Orchestrator, InfraPlanOutputs } from '@openfabr/cdf';
import { ProjectComponent, ProjectComponentOpts } from '@openfabr/cdf/build/main/lib/bootstrap/pulumi/component';
import * as pulumi from '@pulumi/pulumi';
import { ComponentResource, Output } from '@pulumi/pulumi';
import {error, log} from 'console'


class LocalProjectComponent<
  IPC extends InfraPlanConstructs,
  GC extends GeneralConfig,
  NC extends NetworkConfig,
  CC extends ComponentConfig,
  SC extends ServiceConfig,
  RC extends RelationConfig
> extends ComponentResource {
  //readonly network: Network;

  readonly outputs: Map<string, any>;

  constructor(
    name: string,
    props: ProjectComponentOpts<IPC, GC, NC, CC, SC, RC>
  ) {
    super('fabr:cdf:Project', name, {}, props);

    const result = props.orchestrator.runIn(this);

    let o: InfraPlanOutputs;

    new ResultHandler(
      (outputs: cdf.InfraPlanOutputs) => {
        o = outputs; //.get("network") as Network
        //console.log("resulthandler: ", o)
        //this.outputs = o; 
      },
      (err: cdf.PlanError) => {
        error(err.message)
      }
    ).handle(result);

    //more generic but less ituitive. will need more supporting docs and exmaples 
    this.outputs = o!;

    (props.handler ?? ResultHandler.DEFAULT).handle(result);

    //call at the end of constructor even if not actually registering any outputs
    //@see https://www.pulumi.com/docs/intro/concepts/resources/components/#registering-component-outputs
    this.registerOutputs();
  }

}


function localinitProjectComponent<
  IPC extends InfraPlanConstructs,
  GC extends GeneralConfig,
  NC extends NetworkConfig,
  CC extends ComponentConfig,
  SC extends ServiceConfig,
  RC extends RelationConfig
>(
  config: InfraConfig<GC, NC, CC, SC, RC>,
  planner: Planner<IPC, GC, NC, CC, SC, RC>,
  modules: Custom<IPC, GC, NC, CC, SC, RC>[],
  name?: string,
  handler?: ResultHandler
): LocalProjectComponent<IPC, GC, NC, CC, SC, RC> {
  const orchestrator = new Orchestrator(config, planner, modules);
  const pc = new LocalProjectComponent(name ?? 'ProjectComponent', {
    orchestrator,
    handler,
  });
  return pc;
}



// Pulumi implicity creates a top level stack reference
// This rootComponent will be a child of the stack
// Pulumi `Stack` has a narrower definition. Each stack within a Pulumi project is only an instance with a different config, all stacks have the same "shape"
// Unlike CDK where a project can have multiple stacks of different "shapes" and stack is explicity created.
export const rootComponent = localinitProjectComponent( //note: the `export`
  
  config as PackageInfraConfig,
  new PackagePlanner(),
  [],
  "rootComponent",
  // new ResultHandler((outputs) => {
  //   const n = outputs.get("network") as Network
  // })
);


export const mybucket = new aws.s3.Bucket("mybucket", { bucket: "my-test-bucket" });
