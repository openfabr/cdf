import { App, Chart, ChartProps } from 'cdk8s';
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
 * Properties for {@link ProjectChart}.
 *
 * @group For project creators
 */
export interface ProjectChartProps<
  IPC extends InfraPlanConstructs,
  GC extends GeneralConfig,
  NC extends NetworkConfig,
  CC extends ComponentConfig,
  SC extends ServiceConfig,
  RC extends RelationConfig
> extends ChartProps {
  orchestrator: Orchestrator<IPC, GC, NC, CC, SC, RC>;
  handler?: ResultHandler;
}

/**
 * Chart as top-level construct with cdk8s as IaC runtime.
 *
 * @group For project creators
 */
export class ProjectChart<
  IPC extends InfraPlanConstructs,
  GC extends GeneralConfig,
  NC extends NetworkConfig,
  CC extends ComponentConfig,
  SC extends ServiceConfig,
  RC extends RelationConfig
> extends Chart {
  constructor(
    scope: Construct,
    id: string,
    props: ProjectChartProps<IPC, GC, NC, CC, SC, RC>
  ) {
    super(scope, id, props);

    const result = props.orchestrator.runIn(this);
    (props.handler ?? ResultHandler.DEFAULT).handle(result);
  }
}

/**
 * Convenient function that constructs a top-level chart with cdk8s as IaC runtime.
 *
 * @param scope Parent construct, usually an `App` instance in cdk8s.
 * @param config The project configuration.
 * @param planner The planner offered by the package.
 * @param modules Custom code modules for the project.
 * @param name Optionally the name of the resulting chart.
 * @param handler Optionally the result handler.
 * @returns A top-level chart to be provisioned in a project.
 *
 * @group For project creators
 */
export function initProjectChart<
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
): ProjectChart<IPC, GC, NC, CC, SC, RC> {
  const orchestrator = new Orchestrator(config, planner, modules);
  return new ProjectChart(scope, name ?? 'ProjectChart', {
    orchestrator,
    handler,
  });
}
