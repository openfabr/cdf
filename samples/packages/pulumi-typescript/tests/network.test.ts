import { describe, expect, beforeAll, beforeEach, it } from '@jest/globals';
import { Network } from '../src/constructs/network';
import config from './short-config.json';
import { PackageInfraConfig } from '../src';
import * as helpers from './helpers';



describe("OpenFABR CDF sample Pulumi Package - Network", () => {
    // Define the infra variable as a type whose shape matches that of the
    // to-be-defined resources module.
    // https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
    
    let network: Network;
    let shortconfig: PackageInfraConfig;

    beforeAll(() => {
        helpers.setupPulumiMocks();
        shortconfig = config as PackageInfraConfig;
    });

    beforeEach(async () => {
        network = new Network("fabr:network", "test-network", { config: shortconfig });
    });

    describe("VPC", () => {
        it("`name` is `default-vpc`", async () => {
            const vpcname = await helpers.promiseOf(network.vpcName);
            expect(vpcname).toBe("default-vpc");
        });
    });
});