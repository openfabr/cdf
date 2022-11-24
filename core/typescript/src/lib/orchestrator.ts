import { Result } from 'neverthrow';

import {
  ComponentConfig,
  GeneralConfig,
  InfraConfig,
  NetworkConfig,
  RelationConfig,
  ServiceConfig,
} from './config';
import { PlanError } from './domain';
import { InfraPlanConstructs, InfraPlanOutputs, Planner } from './package';
import { Custom } from './project';

export class Orchestrator<
  IPC extends InfraPlanConstructs,
  GC extends GeneralConfig,
  NC extends NetworkConfig,
  CC extends ComponentConfig,
  SC extends ServiceConfig,
  RC extends RelationConfig
> {
  constructor(
    readonly infraConfig: InfraConfig<GC, NC, CC, SC, RC>,
    readonly packagePlanner: Planner<IPC, GC, NC, CC, SC, RC>,
    readonly customModules: Custom<IPC, GC, NC, CC, SC, RC>[]
  ) {}

  public runIn(scope: any): Result<InfraPlanOutputs, PlanError> {
    const result = this.packagePlanner.runWith(this.infraConfig, scope);

    return result.andThen((plan) =>
      Result.combine(
        this.customModules.map((c) =>
          c.enhanceWith(this.infraConfig, plan, scope)
        )
      ).map((_data) =>
        _data.reduce(
          (acc: any, cur: any) => new Map<string, any>([...acc, ...cur]),
          plan.outputs
        )
      )
    );
  }
}
