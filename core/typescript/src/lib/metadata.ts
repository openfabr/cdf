import {
  SubtypeAware,
  ToolingLanguage,
  ToolingRuntime,
  TypeAware,
} from './domain';

/**
 * Interface that offers an optional icon field.
 * This is normally a valid URL pointing to the icon file publicly available on the web; alternative formats such as Font Awesome can be supported later.
 *
 * @group For both project creators and package authors
 */
export interface OptionalIconAware {
  icon?: string;
}

/**
 * Interface that offers an optional description field.
 * This is normally in plain text; markdown can be used too.
 */
export interface OptionalDescAware {
  description?: string;
}

/**
 * Interface that offers support information about the package.
 *
 * @group For both project creators and package authors
 */
export interface SupportInfo {
  /**
   * The URL to the support site of the package.
   */
  url?: string;
  /**
   * The support email address of the package.
   */
  email?: string;
  /**
   * The support phone number of the package.
   */
  phone?: string;
}

/**
 * Interface that offers information about IaC tooling.
 *
 * @group For both project creators and package authors
 */
export interface ToolingInfo {
  /**
   * The shell command to run deployment with the package.
   */
  command: string;
  /**
   * The supported IaC runtime.
   */
  runtime: ToolingRuntime;
  /**
   * The supported IaC language.
   */
  language: ToolingLanguage;
}

/**
 * Interface that represents a typing classification for components.
 *
 * @group For both project creators and package authors
 */
export interface ComponentType
  extends TypeAware,
    SubtypeAware,
    OptionalIconAware,
    OptionalDescAware {}

/**
 * Interface that represents a typing classification for services.
 * In particular, it contains a field for deployment instructions for the type of services defined.
 *
 * @group For both project creators and package authors
 */
export interface ServiceType
  extends TypeAware,
    SubtypeAware,
    OptionalIconAware,
    OptionalDescAware {
  deployment: string;
}

/**
 * Interface that represents information about network construct.
 *
 * @group For both project creators and package authors
 */
export interface NetworkInfo extends OptionalIconAware, OptionalDescAware {}

/**
 * Interface that represents information about available component constructs.
 *
 * @group For both project creators and package authors
 */
export interface ComponentsInfo extends OptionalIconAware, OptionalDescAware {
  /**
   * Available types and subtypes for components.
   */
  types: { [key: string]: ComponentType };
}

/**
 * Interface that represents information about available service constructs.
 *
 * @group For both project creators and package authors
 */
export interface ServicesInfo extends OptionalIconAware, OptionalDescAware {
  /**
   * Available types and subtypes for services.
   */
  types: { [key: string]: ServiceType };
}

/**
 * Interface that represents information about available relation constructs.
 * It relies on the typing definitions in both {@link ComponentInfo} and {@link ServicesInfo}.
 *
 * @group For both project creators and package authors
 */
export interface RelationsInfo extends OptionalIconAware, OptionalDescAware {
  /**
   * Available relations between a specific component/service and another component/service.
   * Both the key and value here refer to the entries defined in `components` and `services` fields.
   */
  types: { [key: string]: string };
}

/**
 * Interface that represents information about custom (code blocks) construct.
 * Most notably it includes a reference to the code template.
 *
 * @group For both project creators and package authors
 */
export interface CustomInfo extends OptionalIconAware, OptionalDescAware {
  template: string;
}

/**
 * Interface that represents information about custom (code blocks) construct.
 * Most notably it includes a reference to the code template.
 *
 * @group For both project creators and package authors
 */
export interface ConstructsInfo {
  /**
   * The reference to the json schema file for creating a valid json config when using the package.
   */
  schema: string;
  /**
   * Information about network.
   */
  network: NetworkInfo;
  /**
   * Information about components.
   */
  components: ComponentsInfo;
  /**
   * Information about services.
   */
  services: ServicesInfo;
  /**
   * Information about relations.
   */
  relations: RelationsInfo;
  /**
   * Information about custom (code blocks).
   */
  custom: CustomInfo;
}

/**
 * Interface for modelling a package manifest json file that provides informations about the package.
 * Crucially it also carries two references respectively to a) a json schema file for validating json config files and b) a template file for custom code blocks.
 *
 * @group For both project creators and package authors
 */
export interface PackageManifest extends OptionalIconAware {
  /**
   * The descriptive name of the package.
   */
  name?: string;
  /**
   * The unique identifier of the package.
   */
  identifier: string;
  /**
   * The author of the package.
   */
  vendor: string;
  /**
   * The SPDX license identifier for the license that the package is released under.
   *
   * @see [SPDX](https://spdx.org/licenses/)
   */
  license: string;
  /**
   * The description of the package.
   */
  description?: string;
  /**
   * Information about the support provided for the package.
   */
  support?: SupportInfo;
  /**
   * The version of OpenFABR CDF that this package is compatible with, following semantic versioning.
   */
  cdf: string;
  /**
   * Information about tooling the package relies on.
   */
  tooling: ToolingInfo;
  /**
   * Information about constructs defined in the package.
   */
  constructs: ConstructsInfo;
}