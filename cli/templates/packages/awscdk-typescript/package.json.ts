export default `{
    "name": "{{package-name}}",
    "version": "0.0.1",
    "main": "dist/index.js",
    "types": "dist/index.d.ts",
    "license": "AGPL-3.0-only",
    "homepage": "https://openfabr.github.io/cdf",
    "author": {
      "name": "OpenFABR CDF Contributors",
      "email": "open@fabrhq.com",
      "url": "https://github.com/orgs/openfabr/teams/team-cdf"
    },
    "files": [
      "dist/**/*"
    ],
    "engines": {
      "node": ">=16"
    },
    "scripts": {
      "build": "tsc",
      "watch": "tsc -w",
      "prepare": "npm run build",
      "test": "jest"
    },
    "peerDependencies": {
      "aws-cdk-lib": "2.x",
      "constructs": "10.x"
    },
  }
`
