import {
  SubtypeAware,
  ToolingLanguage,
  ToolingRuntime,
  TypeAware,
} from './domain';

/**
 * Interface that offers an optional icon field.
 * This is normally a valid URL pointing to the icon file; alternative formats such as Font Awesome can be supported later.
 *
 * @group For both project creators and package authors
 */
export interface OptionalIconAware {
  icon?: string;
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
 * Interface that represents a typing classification.
 *
 * @group For both project creators and package authors
 */
export interface NestedType
  extends TypeAware,
    SubtypeAware,
    OptionalIconAware {}

/**
 * Interface that represents information about network construct.
 *
 * @group For both project creators and package authors
 */
export interface NetworkInfo extends OptionalIconAware {}

/**
 * Interface that represents information about custom (code blocks) construct.
 * Most notably it includes a reference to the code template.
 *
 * @group For both project creators and package authors
 */
export interface CustomInfo extends OptionalIconAware {
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
   * Available types and subtypes for components.
   */
  components: { [key: string]: NestedType };
  /**
   * Available types and subtypes for services.
   */
  services: { [key: string]: NestedType };
  /**
   * Available relations between a specific component/service and another component/service.
   * Both the key and value here refer to the entries defined in `components` and `services` fields.
   */
  relations: { [key: string]: string };
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
   * @see https://spdx.org/licenses/
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
