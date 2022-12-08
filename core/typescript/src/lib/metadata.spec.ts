import test from 'ava';

import { PackageManifest } from './metadata';
import * as minimalManifest from './metadata-minimal.spec.json';
import * as normalManifest from './metadata-normal.spec.json';

test('de-serialises from a normal manifest file', (t) => {
  const manifest = normalManifest as PackageManifest;

  t.deepEqual(manifest.support?.email, 'hello@abc.com');
  t.falsy(manifest.support?.url);
});

test('de-serialises from a manifest file with minimal required set of values', (t) => {
  const manifest = minimalManifest as PackageManifest;

  t.deepEqual(manifest.constructs.components['hello'], {
    type: 'chinese',
    subtype: 'mandarin',
  });
  t.falsy(manifest.constructs.services['not-there']);
});
