/**
 * The interfaces and classes here are the base definitions for package-specific configuration setup.
 * In particular, the interfaces are expected to be implemented in packages whereas classes here can be used as they are.
 *
 * @module
 */
import { NameAware, SubtypeAware, TypeAware } from './domain';

/**
 * Interface for the top-level *general* section of the configuration.
 * It can be extended by any packages if intended to.
 *
 * @group For both project creators and package authors
 */
export interface GeneralConfig extends NameAware {}

/**
 * Interface for the top-level *network* section of the configuration.
 * It can be extended by any packages if intended to.
 *
 * @group For both project creators and package authors
 */
export interface NetworkConfig extends NameAware {
  /**
   * CIDR notation, either IPv4 or IPv6.
   */
  readonly cidr?: string;
  /**
   * Number of availability zones.
   */
  readonly zones?: number;
}

/**
 * Interface for a *relation* segment in the configuration.
 * It is expected to be extended by packages to carry detailed information about a particular relation type.
 *
 * @group For both project creators and package authors
 */
export interface RelationConfig extends NameAware, TypeAware {
  /**
   * The start of a relation, specified by the name of a service or component defined in the same configuration.
   */
  readonly start: string;
  /**
   * The end of a relation, specified by the name of a service or component defined in the same configuration.
   */
  readonly finish: string;
  /**
   * Indicating whether the relation is bidirectional, i.e. no directional difference between start and end points.
   */
  readonly bidi: boolean;
}

/**
 * Concrete class for a group of services sharing the same *runtime*.
 *
 * @sealed Usually there is no need to extend this class.
 * @group For both project creators and package authors
 */
export class RuntimeConfig<SC extends ServiceConfig>
  implements NameAware, TypeAware, SubtypeAware
{
  constructor(
    /**
     * Name of the runtime.
     */
    public readonly name: string,
    /**
     * Type of the runtime.
     */
    public readonly type: string,
    /**
     * Subtype of the runtime.
     */
    public readonly subtype: string,
    /**
     * A list of services sharing the same runtime.
     */
    public readonly details: SC[],
    /**
     * The fallback config that applies to all services defined for the runtime.
     */
    public readonly config?: SC
  ) {}
}
/**
 * Interface for a *service* segment in the configuration.
 * It is expected to be extended by packages to carry detailed information about a particular service type.
 *
 * @group For both project creators and package authors
 */
export interface ServiceConfig extends NameAware {}

/**
 * Concrete class for a group of components sharing the same *trait*.
 *
 * @sealed Usually there is no need to extend this class.
 * @group For both project creators and package authors
 */
export class TraitConfig<CC extends ComponentConfig>
  implements NameAware, TypeAware, SubtypeAware
{
  constructor(
    /**
     * Name of the trait.
     */
    public readonly name: string,
    /**
     * Type of the trait.
     */
    public readonly type: string,
    /**
     * Subtype of the trait.
     */
    public readonly subtype: string,
    /**
     * A list of components sharing the same trait.
     */
    public readonly details: CC[],
    /**
     * The fallback config that applies to all components defined for the trait.
     */
    public readonly config?: CC
  ) {}
}

/**
 * Interface for a *component* segment in the configuration.
 * It is expected to be extended by packages to carry detailed information about a particular component type.
 *
 * @group For both project creators and package authors
 */
export interface ComponentConfig extends NameAware {}

/**
 * Concrete class that models the configuration for an infra project when using a package.
 * It has 5 top-level sections (general, network, components, services and relations), each of which is expected to extended by packages for their own needs.
 *
 * @sealed Usually there is no need to extend this class.
 * @group For both project creators and package authors
 */
export class InfraConfig<
  GC extends GeneralConfig,
  NC extends NetworkConfig,
  CC extends ComponentConfig,
  SC extends ServiceConfig,
  RC extends RelationConfig
> {
  constructor(
    /**
     * Top-level **general** section.
     */
    public readonly general: GC,
    /**
     * Top-level **network** section.
     */
    public readonly network: NC,
    /**
     * Top-level **components** section which carries a list of *trait* sub-sections.
     */
    public readonly components: TraitConfig<CC>[],
    /**
     * Top-level **services** section which carries a list of *runtime* sub-sections.
     */
    public readonly services: RuntimeConfig<SC>[],
    /**
     * Top-level **relations** section which carries a list of *relation* sub-section.
     */
    public readonly relations: RC[]
  ) {}
}
