/* eslint-disable @typescript-eslint/no-unused-vars */
import test from 'ava';
import { Stack } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { err, ok, Result } from 'neverthrow';

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
import { Orchestrator } from './orchestrator';
import {
  InfraPlan,
  InfraPlanConstructs,
  InfraPlanOutputs,
  Planner,
} from './package';
import { Custom } from './project';

class InfraPlanConstructsStub implements InfraPlanConstructs {
  constructor(public readonly bucket: Bucket, public readonly queue: Queue) {}
}

class GeneralConfigStub implements GeneralConfig {
  constructor(public readonly name: string) {}
}

class NetworkConfigStub implements NetworkConfig {
  constructor(public readonly name: string) {}
}

class RelationConfigStub implements RelationConfig {
  constructor(
    public readonly name: string,
    public readonly type: string,
    public readonly start: string,
    public readonly finish: string,
    public readonly bidi: boolean
  ) {}
}

class ComponentConfigStub implements ComponentConfig {
  constructor(public readonly name: string) {}
}

class ServiceConfigStub implements ServiceConfig {
  constructor(public readonly name: string) {}
}

class TraitConfigStub implements TraitConfig<ComponentConfigStub> {
  constructor(
    public readonly name: string,
    public readonly type: string,
    public readonly subtype: string,
    public readonly details: ComponentConfigStub[]
  ) {}
}

class RuntimeConfigStub implements RuntimeConfig<ServiceConfigStub> {
  constructor(
    public readonly name: string,
    public readonly type: string,
    public readonly subtype: string,
    public readonly details: ServiceConfigStub[]
  ) {}
}

class PlannerStub extends Planner<
  InfraPlanConstructsStub,
  GeneralConfigStub,
  NetworkConfigStub,
  TraitConfigStub,
  RuntimeConfigStub,
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
      TraitConfigStub,
      RuntimeConfigStub,
      RelationConfigStub
    >,
    _scope: any
  ): Result<InfraPlan<InfraPlanConstructsStub>, PlanError> {
    return this.expectedResult;
  }
}

class CustomModuleStub extends Custom<
  InfraPlanConstructsStub,
  GeneralConfigStub,
  NetworkConfigStub,
  TraitConfigStub,
  RuntimeConfigStub,
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
      TraitConfigStub,
      RuntimeConfigStub,
      RelationConfigStub
    >,
    _result: InfraPlan<InfraPlanConstructsStub>,
    _scope: any
  ): Result<InfraPlanOutputs, PlanError> {
    return this.expectedResult;
  }
}

class PlanErrorStub implements PlanError {
  constructor(public readonly message: string) {}
}

const setupTests = (scope: Stack) => {
  const bucket = new Bucket(scope, 'test-bucket');
  const queue = new Queue(scope, 'test-queue');
  const outputA = new Map<string, any>([
    ['hello', 'world'],
    ['number', 9],
  ]);
  const outputB = new Map<string, any>([
    ['url', 'https://fabrhq.dev'],
    ['year', 2022],
  ]);

  return {
    infraConfig: new InfraConfig(
      new GeneralConfigStub('test-general-config'),
      new NetworkConfigStub('test-network-config'),
      [
        new TraitConfigStub('test-bucket-config', 'storage', 'object', [
          new ComponentConfigStub('test-bucket'),
        ]),
        new TraitConfigStub('test-queue-config', 'messaging', 'queue', [
          new ComponentConfigStub('test-queue'),
        ]),
      ],
      [
        new RuntimeConfigStub('test-ecs-config', 'container', 'ecs', [
          new ServiceConfigStub('test-ecs-service-a'),
          new ServiceConfigStub('test-ecs-service-b'),
        ]),
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

    infraPlan: new InfraPlan(
      new InfraPlanConstructsStub(bucket, queue),
      new Map<string, any>(outputA)
    ),
    planErrorConfig: new PlanErrorStub('test-error-config'),
    planErrorCustomA: new PlanErrorStub('test-error-custom-a'),
    planErrorCustomB: new PlanErrorStub('test-error-custom-b'),

    bucket,
    queue,
    outputA,
    outputB,
  };
};

test('executes the package-only config with success', (t) => {
  const scope = new Stack();
  const { infraPlan, infraConfig, outputA } = setupTests(scope);

  const planner = new PlannerStub(ok(infraPlan));

  const orchestrator = new Orchestrator(infraConfig, planner, []);
  const result = orchestrator.runIn(scope);
  t.true(result.isOk());
  result.map((_data) => {
    t.deepEqual(_data, outputA);
  });
});

test('executes the config with custom modules with success and merged outputs', (t) => {
  const scope = new Stack();
  const { infraPlan, infraConfig, outputA, outputB } = setupTests(scope);

  const planner = new PlannerStub(ok(infraPlan));
  const customModules = [
    new CustomModuleStub(ok(new Map<string, any>(outputA))),
    new CustomModuleStub(ok(new Map<string, any>(outputB))),
  ];

  const orchestrator = new Orchestrator(infraConfig, planner, customModules);
  const result = orchestrator.runIn(scope);
  t.true(result.isOk());
  result.map((_data) => {
    t.deepEqual(_data, new Map<string, any>([...outputA, ...outputB]));
  });
});

test('executes the package-only config with failure', (t) => {
  const scope = new Stack();
  const { planErrorConfig, infraConfig } = setupTests(scope);

  const planner = new PlannerStub(err(planErrorConfig));

  const orchestrator = new Orchestrator(infraConfig, planner, []);
  const result = orchestrator.runIn(scope);
  t.true(result.isErr());
  result.mapErr((_error) => {
    t.deepEqual(_error, planErrorConfig);
  });
});

test('executes the config with custom modules with failure', (t) => {
  const scope = new Stack();
  const { infraPlan, infraConfig, planErrorCustomA, outputB } =
    setupTests(scope);

  const planner = new PlannerStub(ok(infraPlan));
  const customModules = [
    new CustomModuleStub(err(planErrorCustomA)),
    new CustomModuleStub(ok(new Map<string, any>(outputB))),
  ];

  const orchestrator = new Orchestrator(infraConfig, planner, customModules);
  const result = orchestrator.runIn(scope);
  t.true(result.isErr());
  result.mapErr((_error) => {
    t.deepEqual(_error, planErrorCustomA);
  });
});

test('returns error from config if there is one', (t) => {
  const scope = new Stack();
  const { planErrorConfig, infraConfig, planErrorCustomA, outputB } =
    setupTests(scope);

  const planner = new PlannerStub(err(planErrorConfig));
  const customModules = [
    new CustomModuleStub(err(planErrorCustomA)),
    new CustomModuleStub(ok(new Map<string, any>(outputB))),
  ];

  const orchestrator = new Orchestrator(infraConfig, planner, customModules);
  const result = orchestrator.runIn(scope);
  t.true(result.isErr());
  result.mapErr((_error) => {
    t.deepEqual(_error, planErrorConfig);
  });
});

test('returns first custom module error', (t) => {
  const scope = new Stack();
  const { infraPlan, infraConfig, planErrorCustomA, planErrorCustomB } =
    setupTests(scope);

  const planner = new PlannerStub(ok(infraPlan));
  const customModules = [
    new CustomModuleStub(err(planErrorCustomB)),
    new CustomModuleStub(err(planErrorCustomA)),
  ];

  const orchestrator = new Orchestrator(infraConfig, planner, customModules);
  const result = orchestrator.runIn(scope);
  t.true(result.isErr());
  result.mapErr((_error) => {
    t.deepEqual(_error, planErrorCustomB);
  });
});
