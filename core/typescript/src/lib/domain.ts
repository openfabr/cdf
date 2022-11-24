export enum CloudVendor {
  AWS = 'AWS',
  AZR = 'AZR',
  GCP = 'GCP',
  DO = 'DO',
  ALI = 'ALI',
}

export enum ToolingRuntime {
  AWSCDK = 'awscdk',
  CDKTF = 'cdktf',
  PULUMI = 'pulumi',
  CUSTOM = 'custom',
}

export enum Language {
  TYPESCRIPT = 'typescript',
  PYTHON = 'python',
  JAVA = 'java',
  CSHARP = 'csharp',
  GO = 'go',
  CUSTOM = 'custom',
}

export interface NameAware {
  readonly name: string;
}

export interface TypeAware {
  readonly type: string;
}

export interface SubtypeAware {
  readonly subtype: string;
}

export interface MessageAware {
  readonly message: string;
}

export interface ConfigError extends MessageAware {
  readonly field?: string;
}

export interface ImplError extends MessageAware {}

export interface PlanError extends MessageAware {}
