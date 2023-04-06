import {
  CloudVendor,
  Connectable,
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
  readonly icon?: string;
}

/**
 * Interface that offers an optional label field.
 * This should be short and concise.
 */
export interface OptionalLabelAware {
  readonly label?: string;
}

/**
 * Interface that offers an optional description field.
 * This is normally in plain text; markdown can be used too.
 */
export interface OptionalDescAware {
  readonly description?: string;
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
  readonly url?: string;
  /**
   * The support email address of the package.
   */
  readonly email?: string;
  /**
   * The support phone number of the package.
   */
  readonly phone?: string;
}

/**
 * Interface that offers command information about the underlying tooling in the package.
 *
 * @group for both project creators and package authors
 */
export interface ToolingCommandInfo {
  /**
   * The provision command, such as 'cdk deploy' for a typical AWS CDK based package.
   */
  readonly provision: string;
  /**
   * The destroy command, such as 'cdktf destroy' for a typical CDK for Terraform based package.
   */
  readonly destroy: string;
  /**
   * The optional list of other available commands made available by a package.
   */
  readonly others?: { [key: string]: string };
}

/**
 * Interface that offers information about IaC tooling.
 *
 * @group For both project creators and package authors
 */
export interface ToolingInfo {
  /**
   * The information about commands available to manage infra with the package.
   *
   * If not present, it is auto-guessed from both `ToolingRuntime` and `ToolingLanguage`; therefore it is recommended to always provide the info.
   */
  readonly command?: ToolingCommandInfo;
  /**
   * The supported IaC runtime.
   */
  readonly runtime: ToolingRuntime;
  /**
   * The supported IaC language.
   */
  readonly language: ToolingLanguage;
  /**
   * The supported cloud vendors.
   * Usually a package chooses support one vendor but some choose to have multiple-vendor support.
   */
  readonly vendors: CloudVendor[];
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
    OptionalLabelAware,
    OptionalIconAware,
    OptionalDescAware {
  /**
   * The deployment instructions.
   * This is normally in plain text; markdown can be used too.
   */
  readonly deployment: string;
}

/**
 * Interface that represents a typing classification for relations.
 *
 * @group For both project creators and package authors
 */
export interface RelationType
  extends Connectable,
    OptionalLabelAware,
    OptionalIconAware,
    OptionalDescAware {}

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
   * Available types and subtypes for components, keyed by a unique identifier among all components/services/relations.
   */
  readonly types: { [key: string]: ComponentType };
}

/**
 * Interface that represents information about available service constructs.
 *
 * @group For both project creators and package authors
 */
export interface ServicesInfo extends OptionalIconAware, OptionalDescAware {
  /**
   * Available types and subtypes for services, keyed by a unique identifier among all components/services/relations.
   */
  readonly types: { [key: string]: ServiceType };
}

/**
 * Interface that represents information about available relation constructs, keyed by a unique identifier among all components/services/relations.
 * It relies on the typing definitions in both {@link ComponentInfo} and {@link ServicesInfo}.
 *
 * @group For both project creators and package authors
 */
export interface RelationsInfo extends OptionalIconAware, OptionalDescAware {
  /**
   * Available relations between a specific component/service and another component/service.
   * Both the `start` and `finish` points here refer to the keys defined in `components` and `services` fields.
   */
  readonly types: { [key: string]: RelationType };
}

/**
 * Interface that represents information about custom (code blocks) construct.
 * Most notably it includes a reference to the code template.
 *
 * @group For both project creators and package authors
 */
export interface CustomInfo extends OptionalIconAware, OptionalDescAware {
  /**
   * The reference to the code template file for creating a valid custom code block when using the package.
   */
  readonly template: string;
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
  readonly schema: string;
  /**
   * Information about optional network.
   * Missing this field implies that the package does NOT support customisable virtual network.
   */
  readonly network?: NetworkInfo;
  /**
   * Information about components.
   */
  readonly components: ComponentsInfo;
  /**
   * Information about services.
   */
  readonly services: ServicesInfo;
  /**
   * Information about relations.
   */
  readonly relations: RelationsInfo;
  /**
   * Information about optional custom (code blocks).
   * Missing this field implies that the package does NOT support custom code blocks.
   */
  readonly custom?: CustomInfo;
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
  readonly name?: string;
  /**
   * The unique identifier of the package.
   */
  readonly identifier: string;
  /**
   * The author of the package.
   */
  readonly vendor: string;
  /**
   * The SPDX license identifier for the license that the package is released under.
   *
   * @see [SPDX](https://spdx.org/licenses/)
   */
  readonly license: string;
  /**
   * The description of the package.
   */
  readonly description?: string;
  /**
   * Information about the support provided for the package.
   */
  readonly support?: SupportInfo;
  /**
   * The version of OpenFABR CDF that this package is compatible with, following semantic versioning.
   */
  readonly cdf: string;
  /**
   * Information about tooling the package relies on.
   */
  readonly tooling: ToolingInfo;
  /**
   * Information about constructs defined in the package.
   */
  readonly constructs: ConstructsInfo;
}
