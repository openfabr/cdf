import test from 'ava';
import { App, Chart } from 'cdk8s';
import { err, ok } from 'neverthrow';

import { cdk8sResults, PlannerStub, setupTests } from '../../_setup.spec';

import { initProjectChart } from './chart';

test('initialises a project chart', (t) => {
  const app = new App();
  const { infraConfig, resultHandler } = setupTests;
  const { infraPlan } = cdk8sResults(new Chart(app, 'test-chart'));

  const planner = new PlannerStub(ok(infraPlan));
  const name = 'test-app';

  t.notThrows(() =>
    initProjectChart(app, infraConfig, planner, [], name, resultHandler)
  );
});

test('throws error for failed provisioning if no result handler is provided', (t) => {
  const { planErrorConfig, infraConfig } = setupTests;

  const planner = new PlannerStub(err(planErrorConfig));

  t.throws(() => {
    initProjectChart(new App(), infraConfig, planner, []);
  });
});
