import { App, Stack, StackProps } from 'aws-cdk-lib';
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
import { InfraPlanConstructs, Planner } from '../../package';
import { Custom } from '../../project';

export interface ProjectStackProps<
  IPC extends InfraPlanConstructs,
  GC extends GeneralConfig,
  NC extends NetworkConfig,
  CC extends ComponentConfig,
  SC extends ServiceConfig,
  RC extends RelationConfig
> extends StackProps {
  orchestrator: Orchestrator<IPC, GC, NC, CC, SC, RC>;
}

export class ProjectStack<
  IPC extends InfraPlanConstructs,
  GC extends GeneralConfig,
  NC extends NetworkConfig,
  CC extends ComponentConfig,
  SC extends ServiceConfig,
  RC extends RelationConfig
> extends Stack {
  constructor(
    scope: Construct,
    id: string,
    props?: ProjectStackProps<IPC, GC, NC, CC, SC, RC>
  ) {
    super(scope, id, props);

    props?.orchestrator.runIn(this);
  }
}

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
  name?: string
): ProjectStack<IPC, GC, NC, CC, SC, RC> {
  const orchestrator = new Orchestrator(config, planner, modules);
  return new ProjectStack(scope, name ? name : 'ProjectStack', {
    orchestrator,
  });
}
