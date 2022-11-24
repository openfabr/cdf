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

export interface InfraPlanConstructs {}

export type InfraPlanOutputs = Map<string, any>;

export class InfraPlan<IPC extends InfraPlanConstructs> {
  constructor(
    public readonly constructs: IPC,
    public readonly outputs: InfraPlanOutputs
  ) {}
}

export abstract class Planner<
  IPC extends InfraPlanConstructs,
  GC extends GeneralConfig,
  NC extends NetworkConfig,
  CC extends ComponentConfig,
  SC extends ServiceConfig,
  RC extends RelationConfig
> {
  abstract runWith(
    config: InfraConfig<GC, NC, CC, SC, RC>,
    scope: any
  ): Result<InfraPlan<IPC>, PlanError>;
}
