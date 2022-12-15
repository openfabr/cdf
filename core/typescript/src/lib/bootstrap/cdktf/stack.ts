import { App, TerraformStack } from 'cdktf';
import { Construct } from 'constructs';

import {
  ComponentConfig,
  GeneralConfig,
  InfraConfig,
  NetworkConfig,
  RelationConfig,
  ServiceConfig,
} from '../../config';
import { Orchestrator } from '../../orchestrator';
import { InfraPlanConstructs, Planner, ResultHandler } from '../../package';
import { Custom } from '../../project';

/**
 * Properties for {@link ProjectStack}.
 *
 * @group For project creators
 */
export interface ProjectStackProps<
  IPC extends InfraPlanConstructs,
  GC extends GeneralConfig,
  NC extends NetworkConfig,
  CC extends ComponentConfig,
  SC extends ServiceConfig,
  RC extends RelationConfig
> {
  orchestrator: Orchestrator<IPC, GC, NC, CC, SC, RC>;
  handler?: ResultHandler;
}

/**
 * Stack as top-level construct with CDKTF as IaC runtime.
 *
 * @group For project creators
 */
export class ProjectStack<
  IPC extends InfraPlanConstructs,
  GC extends GeneralConfig,
  NC extends NetworkConfig,
  CC extends ComponentConfig,
  SC extends ServiceConfig,
  RC extends RelationConfig
> extends TerraformStack {
  constructor(
    scope: Construct,
    id: string,
    props: ProjectStackProps<IPC, GC, NC, CC, SC, RC>
  ) {
    super(scope, id);

    const result = props.orchestrator.runIn(this);
    (props.handler ?? ResultHandler.DEFAULT).handle(result);
  }
}

/**
 * Convenient function that constructs a top-level stack with CDKTF as IaC runtime.
 *
 * @param scope Parent construct, usually an `App` instance in CDKTF.
 * @param config The project configuration.
 * @param planner The planner offered by the package.
 * @param modules Custom code modules for the project.
 * @param name Optionally the name of the resulting stack.
 * @returns A top-level stack to be provisioned in a project.
 *
 * @group For project creators
 */
export function initProjectStack<
  IPC extends InfraPlanConstructs,
  GC extends GeneralConfig,
  NC extends NetworkConfig,
  CC extends ComponentConfig,
  SC extends ServiceConfig,
  RC extends RelationConfig
>(
  scope: App,
  config: InfraConfig<GC, NC, CC, SC, RC>,
  planner: Planner<IPC, GC, NC, CC, SC, RC>,
  modules: Custom<IPC, GC, NC, CC, SC, RC>[],
  name?: string,
  handler?: ResultHandler
): ProjectStack<IPC, GC, NC, CC, SC, RC> {
  const orchestrator = new Orchestrator(config, planner, modules);
  return new ProjectStack(scope, name ?? 'ProjectStack', {
    orchestrator,
    handler,
  });
}
