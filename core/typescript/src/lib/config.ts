import { NameAware, SubtypeAware, TypeAware } from './domain';

export interface GeneralConfig extends NameAware {}

export interface NetworkConfig extends NameAware {
  readonly cidr?: string;
  readonly zones?: number;
}

export interface RelationConfig extends NameAware, TypeAware {
  readonly start: string;
  readonly finish: string;
  readonly bidi: boolean;
}

export class RuntimeConfig<SC extends ServiceConfig>
  implements NameAware, TypeAware, SubtypeAware
{
  constructor(
    public readonly name: string,
    public readonly type: string,
    public readonly subtype: string,
    public readonly details: SC[],
    public readonly config?: SC
  ) {}
}
export interface ServiceConfig extends NameAware {}

export class TraitConfig<CC extends ComponentConfig>
  implements NameAware, TypeAware, SubtypeAware
{
  constructor(
    public readonly name: string,
    public readonly type: string,
    public readonly subtype: string,
    public readonly details: CC[],
    public readonly config?: CC
  ) {}
}

export interface ComponentConfig extends NameAware {}

export class InfraConfig<
  GC extends GeneralConfig,
  NC extends NetworkConfig,
  CC extends ComponentConfig,
  SC extends ServiceConfig,
  RC extends RelationConfig
> {
  constructor(
    public readonly general: GC,
    public readonly network: NC,
    public readonly components: TraitConfig<CC>[],
    public readonly services: RuntimeConfig<SC>[],
    public readonly relations: RC[]
  ) {}
}
