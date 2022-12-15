import test from 'ava';
import { Stack } from 'aws-cdk-lib';
import { err, ok } from 'neverthrow';

import {
  awscdkResults,
  CustomModuleStub,
  PlannerStub,
  setupTests,
} from './_setup.spec';
import { Orchestrator } from './orchestrator';

test('executes the package-only config with success', (t) => {
  const scope = new Stack();
  const { infraConfig, outputA } = setupTests;
  const { infraPlan } = awscdkResults(scope);

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
  const { infraConfig, outputA, outputB } = setupTests;
  const { infraPlan } = awscdkResults(scope);

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
  const { planErrorConfig, infraConfig } = setupTests;

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
  const { infraConfig, planErrorCustomA, outputB } = setupTests;
  const { infraPlan } = awscdkResults(scope);

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
    setupTests;

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
  const { infraConfig, planErrorCustomA, planErrorCustomB } = setupTests;
  const { infraPlan } = awscdkResults(scope);

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
