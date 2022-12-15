import test from 'ava';
import { App, TerraformStack } from 'cdktf';
import { err, ok } from 'neverthrow';

import { cdktfResults, PlannerStub, setupTests } from '../../_setup.spec';

import { initProjectStack } from './stack';

test('initialises a project stack', (t) => {
  const app = new App();
  const scope = new TerraformStack(app, 'test-stack');
  const { infraConfig, resultHandler } = setupTests;
  const { infraPlan } = cdktfResults(scope);

  const planner = new PlannerStub(ok(infraPlan));
  const name = 'test-app';

  t.notThrows(() => initProjectStack(app, infraConfig, planner, [], name, resultHandler));
});

test('throws error for failed provisioning if no result handler is provided', (t) => {
  const { planErrorConfig, infraConfig } = setupTests;

  const planner = new PlannerStub(err(planErrorConfig));

  t.throws(() => {
    initProjectStack(new App(), infraConfig, planner, []);
  });
});
