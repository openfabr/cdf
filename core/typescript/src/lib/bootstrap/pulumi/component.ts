import { ComponentResource, ComponentResourceOptions } from '@pulumi/pulumi';

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
 * Properties for {@link ProjectComponent}.
 *
 * @group For project creators
 */
export interface ProjectComponentOpts<
  IPC extends InfraPlanConstructs,
  GC extends GeneralConfig,
  NC extends NetworkConfig,
  CC extends ComponentConfig,
  SC extends ServiceConfig,
  RC extends RelationConfig
> extends ComponentResourceOptions {
  orchestrator: Orchestrator<IPC, GC, NC, CC, SC, RC>;
  handler?: ResultHandler;
}

/**
 * Component as top-level construct with pulumi as IaC runtime.
 *
 * @group For project creators
 */
export class ProjectComponent<
  IPC extends InfraPlanConstructs,
  GC extends GeneralConfig,
  NC extends NetworkConfig,
  CC extends ComponentConfig,
  SC extends ServiceConfig,
  RC extends RelationConfig
> extends ComponentResource {
  constructor(
    name: string,
    props: ProjectComponentOpts<IPC, GC, NC, CC, SC, RC>
  ) {
    super('fabr:cdf:Project', name, {}, props);

    const result = props.orchestrator.runIn(this);
    (props.handler ?? ResultHandler.DEFAULT).handle(result);
  }
}

/**
 * Convenient function that constructs a top-level component with pulumi as IaC runtime.
 *
 * @param config The project configuration.
 * @param planner The planner offered by the package.
 * @param modules Custom code modules for the project.
 * @param name Optionally the name of the resulting component.
 * @param handler Optionally the result handler.
 * @returns A top-level component to be provisioned in a project.
 *
 * @group For project creators
 */
export function initProjectComponent<
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
): ProjectComponent<IPC, GC, NC, CC, SC, RC> {
  const orchestrator = new Orchestrator(config, planner, modules);
  return new ProjectComponent(name ?? 'ProjectComponent', {
    orchestrator,
    handler,
  });
}
