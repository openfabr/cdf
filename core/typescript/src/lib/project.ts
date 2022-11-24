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
import { InfraPlan, InfraPlanConstructs, InfraPlanOutputs } from './package';

export abstract class Custom<
  IPC extends InfraPlanConstructs,
  GC extends GeneralConfig,
  NC extends NetworkConfig,
  CC extends ComponentConfig,
  SC extends ServiceConfig,
  RC extends RelationConfig
> {
  abstract enhanceWith(
    config: InfraConfig<GC, NC, CC, SC, RC>,
    result: InfraPlan<IPC>,
    scope: any
  ): Result<InfraPlanOutputs, PlanError>;
}
