/**
 * The enums and interfaces here are the foundation for
 * - defining a package-specific configuration setup;
 * - and regulating constant values throughout projects and packages.
 *
 * @module
 */

/**
 * A list of cloud vendors.
 * The purpose of defining them is to regulate their names throughout the framework and all packages.
 *
 * @group For both project creators and package authors
 */
export enum CloudVendor {
  /**
   * Vendor: Amazon Web Services
   */
  AWS = 'AWS',
  /**
   * Vendor: Azure / Microsoft Cloud
   */
  AZR = 'AZR',
  /**
   * Vendor: Google Cloud Platform
   */
  GCP = 'GCP',
  /**
   * Vendor: Digital Ocean
   */
  DO = 'DO',
  /**
   * Vendor: CloudFlare
   */
  CF = 'CF',
  /**
   * Vendor: Alibaba Cloud / Aliyun
   */
  ALI = 'ALI',
}

/**
 * A list of IaC runtime.
 * The purpose of defining them is to regulate their names throughout the framework and all packages.
 *
 * @group For both project creators and package authors
 */
export enum ToolingRuntime {
  AWSCDK = 'awscdk',
  CDKTF = 'cdktf',
  PULUMI = 'pulumi',
  CUSTOM = 'custom',
}

/**
 * A list of IaC languages.
 * The purpose of defining them is to regulate their names throughout the framework and all packages.
 *
 * @group For both project creators and package authors
 */
export enum ToolingLanguage {
  TYPESCRIPT = 'typescript',
  PYTHON = 'python',
  JAVA = 'java',
  CSHARP = 'csharp',
  GO = 'go',
  CUSTOM = 'custom',
}

/**
 * Interface that offers a URL-friendly name field.
 * It is expected to be implemented.
 *
 * @group For both project creators and package authors
 */
export interface NameAware {
  readonly name: string;
}

/**
 * Interface that offers a type field.
 * It is expected to be implemented.
 *
 * @group For both project creators and package authors
 */
export interface TypeAware {
  readonly type: string;
}

/**
 * Interface that offers a subtype field.
 * It is expected to be implemented, usually with {@link TypeAware} together.
 *
 * @group For both project creators and package authors
 */
export interface SubtypeAware {
  readonly subtype: string;
}

/**
 * Interface that models a connection starts from one point and finishes at another, with indication whether the connection is bidirectional.
 *
 * @group For both project creators and package authors
 */
export interface Connectable {
  readonly start: string;
  readonly finish: string;
  readonly bidi: boolean;
}

/**
 * Interface that offers a message field.
 * It is expected to be implemented.
 *
 * @group For both project creators and package authors
 */
export interface MessageAware {
  readonly message: string;
}

/**
 * Interface that offers a configuration *error* type which optionally indicates which field is the offending one.
 * It is expected to be implemented.
 *
 * @group For both project creators and package authors
 */
export interface ConfigError extends MessageAware {
  readonly field?: string;
}

/**
 * Interface that offers an implementation *error* type.
 * It is expected to be implemented.
 *
 * @group For both project creators and package authors
 */
export interface ImplError extends MessageAware {}

/**
 * Interface that offers an planning *error* type.
 * It is expected to be implemented.
 *
 * @group For both project creators and package authors
 */
export interface PlanError extends MessageAware {}
