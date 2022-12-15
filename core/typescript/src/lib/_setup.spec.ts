/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { firestoreDocument } from '@cdktf/provider-google';
import { Stack } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import { Result } from 'neverthrow';

import {
  ComponentConfig,
  GeneralConfig,
  InfraConfig,
  NetworkConfig,
  RelationConfig,
  RuntimeConfig,
  ServiceConfig,
  TraitConfig,
} from './config';
import { PlanError } from './domain';
import {
  InfraPlan,
  InfraPlanConstructs,
  InfraPlanOutputs,
  Planner,
  ResultHandler,
} from './package';
import { Custom } from './project';

export class InfraPlanConstructsStub implements InfraPlanConstructs {}

export class InfraPlanConstructsStubAwscdk extends InfraPlanConstructsStub {
  constructor(public readonly bucket: Bucket, public readonly queue: Queue) {
    super();
  }
}

export class InfraPlanConstructsStubCdktf extends InfraPlanConstructsStub {
  constructor(public readonly firestore: firestoreDocument.FirestoreDocument) {
    super();
  }
}

export class GeneralConfigStub implements GeneralConfig {
  constructor(public readonly name: string) {}
}

export class NetworkConfigStub implements NetworkConfig {
  constructor(public readonly name: string) {}
}

export class RelationConfigStub implements RelationConfig {
  constructor(
    public readonly name: string,
    public readonly type: string,
    public readonly start: string,
    public readonly finish: string,
    public readonly bidi: boolean
  ) {}
}

export class ComponentConfigStub implements ComponentConfig {
  constructor(public readonly name: string) {}
}

export class ServiceConfigStub implements ServiceConfig {
  constructor(public readonly name: string) {}
}

export class PlannerStub extends Planner<
  InfraPlanConstructsStub,
  GeneralConfigStub,
  NetworkConfigStub,
  ComponentConfigStub,
  ServiceConfigStub,
  RelationConfigStub
> {
  constructor(
    public readonly expectedResult: Result<
      InfraPlan<InfraPlanConstructsStub>,
      PlanError
    >
  ) {
    super();
  }

  runWith(
    _config: InfraConfig<
      GeneralConfigStub,
      NetworkConfigStub,
      ComponentConfigStub,
      ServiceConfigStub,
      RelationConfigStub
    >,
    _scope: any
  ): Result<InfraPlan<InfraPlanConstructsStub>, PlanError> {
    return this.expectedResult;
  }
}

export class CustomModuleStub extends Custom<
  InfraPlanConstructsStub,
  GeneralConfigStub,
  NetworkConfigStub,
  ComponentConfigStub,
  ServiceConfigStub,
  RelationConfigStub
> {
  constructor(
    public readonly expectedResult: Result<InfraPlanOutputs, PlanError>
  ) {
    super();
  }

  enhanceWith(
    _config: InfraConfig<
      GeneralConfigStub,
      NetworkConfigStub,
      ComponentConfigStub,
      ServiceConfigStub,
      RelationConfigStub
    >,
    _result: InfraPlan<InfraPlanConstructsStub>,
    _scope: any
  ): Result<InfraPlanOutputs, PlanError> {
    return this.expectedResult;
  }
}

export class PlanErrorStub implements PlanError {
  constructor(public readonly message: string) {}
}

export const setupTests = {
  infraConfig: new InfraConfig(
    new GeneralConfigStub('test-general-config'),
    new NetworkConfigStub('test-network-config'),
    [
      new TraitConfig(
        'test-bucket-config',
        'storage',
        'object',
        [new ComponentConfigStub('test-bucket')],
        new ComponentConfigStub('test-default')
      ),
      new TraitConfig('test-queue-config', 'messaging', 'queue', [
        new ComponentConfigStub('test-queue'),
      ]),
    ],
    [
      new RuntimeConfig(
        'test-ecs-config',
        'container',
        'ecs',
        [
          new ServiceConfigStub('test-ecs-service-a'),
          new ServiceConfigStub('test-ecs-service-b'),
        ],
        new ServiceConfigStub('test-default')
      ),
    ],
    [
      new RelationConfigStub(
        'test-bucket-full-access',
        'bucket-read-write',
        'test-ecs-service-a',
        'test-bucket',
        false
      ),
      new RelationConfigStub(
        'test-queue-publish',
        'queue-public',
        'test-ecs-service-a',
        'test-queue',
        false
      ),
      new RelationConfigStub(
        'test-queue-subscribe',
        'queue-subscribe',
        'test-ecs-service-b',
        'test-queue',
        false
      ),
    ]
  ),

  planErrorConfig: new PlanErrorStub('test-error-config'),
  planErrorCustomA: new PlanErrorStub('test-error-custom-a'),
  planErrorCustomB: new PlanErrorStub('test-error-custom-b'),

  outputA: new Map<string, any>([
    ['hello', 'world'],
    ['number', 9],
  ]),
  outputB: new Map<string, any>([
    ['url', 'https://fabrhq.dev'],
    ['year', 2022],
  ]),

  resultHandler: new ResultHandler(() => {}, () => {}),

};

export const awscdkResults = (scope: Stack) => {
  const bucket = new Bucket(scope, 'test-bucket');
  const queue = new Queue(scope, 'test-queue');

  return {
    infraPlan: new InfraPlan(
      new InfraPlanConstructsStubAwscdk(bucket, queue),
      new Map<string, any>(setupTests.outputA)
    ),
    bucket,
    queue,
  };
};

export const cdktfResults = (scope: Construct) => {
  const firestore = new firestoreDocument.FirestoreDocument(
    scope,
    'test-firestore',
    {
      collection: 'test-collection',
      documentId: 'firestore-one',
      fields: 'hello',
    }
  );

  return {
    infraPlan: new InfraPlan(
      new InfraPlanConstructsStubCdktf(firestore),
      new Map<string, any>(setupTests.outputB)
    ),
    firestore,
  };
};
