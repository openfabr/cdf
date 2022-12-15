import test from 'ava';
import { App, Stack } from 'aws-cdk-lib';
import { err, ok } from 'neverthrow';

import { awscdkResults, PlannerStub, setupTests } from '../../_setup.spec';

import { initProjectStack } from './stack';

test('initialises a project stack', (t) => {
  const { infraConfig } = setupTests;
  const { infraPlan } = awscdkResults(new Stack());

  const planner = new PlannerStub(ok(infraPlan));

  const stack = initProjectStack(new App(), infraConfig, planner, []);

  t.true(stack.stackName == 'ProjectStack');
});

test('throws error for failed provisioning if no result handler is provided', (t) => {
  const { planErrorConfig, infraConfig } = setupTests;

  const planner = new PlannerStub(err(planErrorConfig));

  t.throws(() => {
    initProjectStack(new App(), infraConfig, planner, []);
  });
});
