import test from 'ava';

import { TypesInfo } from './package';
import * as specTypes from './typing.spec.json';

test('de-serialises from typing json file', (t) => {
  const typing = specTypes as TypesInfo;

  t.deepEqual(typing.components['hello'], {
    type: 'chinese',
    subtype: 'mandarin',
  });
  t.falsy(typing.services['not-there']);
});
