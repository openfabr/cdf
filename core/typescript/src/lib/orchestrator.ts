/**
 * The orchestrator that coordinates infra provisioning.
 * It is the central part of the framework.
 *
 * @module
 */
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

/**
 * Concrete class that orchestrates an infra provisioning run.
 * It takes a project configuration, coupled with a package to generate baseline infra, and then augments it with custom code supplied by the project.
 *
 * It should be used as-is. *In rare occasions it can be extended to influence how the infra provisioning pipeline works - with caution.*
 *
 * @group For project creators
 */
export class Orchestrator<
  IPC extends InfraPlanConstructs,
  GC extends GeneralConfig,
  NC extends NetworkConfig,
  CC extends ComponentConfig,
  SC extends ServiceConfig,
  RC extends RelationConfig
> {
  /**
   *
   * @param infraConfig The project configuration in full.
   * @param packagePlanner The planner offered by the package.
   * @param customModules Custom code modules for the project.
   */
  constructor(
    readonly infraConfig: InfraConfig<GC, NC, CC, SC, RC>,
    readonly packagePlanner: Planner<IPC, GC, NC, CC, SC, RC>,
    readonly customModules: Custom<IPC, GC, NC, CC, SC, RC>[]
  ) {}

  /**
   * Running the infra provisioning.
   *
   * @param scope Depending on the IaC runtime, it can be a stack object defined in AWS CDK and CDKTF, or absent for other runtimes without the construct-based structure.
   * @returns Result that encapsulates either outputs {@link InfraPlanOutputs} if successful, or error {@link PlanError} if failed.
   *
   */
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
