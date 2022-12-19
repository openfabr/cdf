import { ComponentResource } from '@pulumi/pulumi';
import test from 'ava';
import { err, ok } from 'neverthrow';

import { PlannerStub, pulumiResults, setupTests } from '../../_setup.spec';

import { initProjectComponent } from './component';

test('initialises a project component', (t) => {
  const { infraConfig, resultHandler } = setupTests;
  const { infraPlan } = pulumiResults(
    new ComponentResource('fabr:test:TestComponent', 'test-component')
  );

  const planner = new PlannerStub(ok(infraPlan));
  const name = 'test-component';

  t.notThrows(() =>
    initProjectComponent(infraConfig, planner, [], name, resultHandler)
  );
});

test('throws error for failed provisioning if no result handler is provided', (t) => {
  const { planErrorConfig, infraConfig } = setupTests;

  const planner = new PlannerStub(err(planErrorConfig));

  t.throws(() => {
    initProjectComponent(infraConfig, planner, []);
  });
});
