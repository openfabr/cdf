import test from 'ava';
import { err, ok } from 'neverthrow';

import { setupTests } from './_setup.spec';
import { ResultHandler } from './package';

test('no onOk and noErr in default handler', (t) => {
  t.falsy(ResultHandler.DEFAULT.onOk);
  t.falsy(ResultHandler.DEFAULT.onErr);
});

test('does nothing with outputs if no errors', (t) => {
  const handler = new ResultHandler();
  const { outputA } = setupTests;
  t.notThrows(() => handler.handle(ok(outputA)));
});

test('throws an error for issues', (t) => {
  const handler = new ResultHandler();
  const { planErrorCustomA } = setupTests;
  t.throws(() => handler.handle(err(planErrorCustomA)));
});

test('uses supplied onOk function', (t) => {
  let counter = 0;
  const handler = new ResultHandler(
    () => {
      counter = 99;
    },
    () => {
      counter = -1;
    }
  );
  const { outputB } = setupTests;

  handler.handle(ok(outputB));
  t.true(counter == 99);
});

test('uses supplied onErr function', (t) => {
  let counter = 0;
  const handler = new ResultHandler(
    () => {
      counter = 99;
    },
    () => {
      counter = -1;
    }
  );
  const { planErrorCustomB } = setupTests;

  handler.handle(err(planErrorCustomB));
  t.true(counter == -1);
});
