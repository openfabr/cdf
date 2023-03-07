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
   * Vendor: DigitalOcean
   */
  DO = 'DO',
  /**
   * Vendor: Cloudflare
   */
  CF = 'CF',
  /**
   * Vendor: Alibaba Cloud / Aliyun
   */
  ALI = 'ALI',
  /**
   * On-premise, usually self-managed infrastructure, including own data centres or own racks, with or without virtualisation.
   */
  SELF = 'SELF',
}

/**
 * A list of IaC runtime.
 * The purpose of defining them is to regulate their names throughout the framework and all packages.
 *
 * @group For both project creators and package authors
 */
export enum ToolingRuntime {
  /**
   * Tooling: AWS CDK, https://aws.amazon.com/cdk/
   */
  AWSCDK = 'awscdk',
  /**
   * Tooling: CDK for Terraform, https://developer.hashicorp.com/terraform/cdktf
   */
  CDKTF = 'cdktf',
  /**
   * Tooling: CDK for K8s, https://cdk8s.io/
   */
  CDK8S = 'cdk8s',
  /**
   * Tooling: Pulumi, https://www.pulumi.com/
   */
  PULUMI = 'pulumi',
  /**
   * Custom tooling, including other vendors such as Ansible or in-house shell scripts
   */
  CUSTOM = 'custom',
}

/**
 * A list of IaC languages.
 * The purpose of defining them is to regulate their names throughout the framework and all packages.
 *
 * @group For both project creators and package authors
 */
export enum ToolingLanguage {
  /**
   * Language: TypeScript, https://www.typescriptlang.org/
   */
  TYPESCRIPT = 'typescript',
  /**
   * Language: Python, https://www.python.org/
   */
  PYTHON = 'python',
  /**
   * Language: Java, https://www.java.com/
   */
  JAVA = 'java',
  /**
   * Language: C#, https://learn.microsoft.com/en-us/dotnet/csharp/
   */
  CSHARP = 'csharp',
  /**
   * Language: Go, https://go.dev/
   */
  GO = 'go',
  /**
   * Language: shell scripts, https://en.wikipedia.org/wiki/Shell_script
   */
  SHELL = 'shell',
  /**
   * Custom (or mixed) solution
   */
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
