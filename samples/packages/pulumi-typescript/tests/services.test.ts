import * as pulumi from'@pulumi/pulumi';
import {describe, expect, beforeAll, beforeEach, it} from '@jest/globals';
import { Network } from '../src/constructs/network';
import { Output } from '@pulumi/pulumi';
import { ecsCluster, Services } from '../src/constructs/services';
import { log } from 'console';
//import {log} from 'console'
//import * as jest from "jest";
//import type { de } from "@jest/types";
//import {PackagePlanner} from '../src/index'

function promiseOf<T>(output: pulumi.Output<T>): Promise<T> {
    return new Promise(resolve => output.apply(resolve));
}

describe("OpenFABR CDF sample Pulumi Package - Services", () => {
// Define the infra variable as a type whose shape matches that of the
    // to-be-defined resources module.
    // https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
    let infra: typeof import("./test-bootstrap");

    beforeAll(() => {

        // Put Pulumi in unit-test mode, mocking all calls to cloud-provider APIs.
        pulumi.runtime.setMocks({

            // Mock requests to provision cloud resources and return a canned response.
            newResource: (args: pulumi.runtime.MockResourceArgs): {id: string, state: any} => {

                // Here, we're returning a same-shaped object for all resource types.
                // We could, however, use the arguments passed into this function to
                // customize the mocked-out properties of a particular resource based
                // on its type. See the unit-testing docs for details:
                // https://www.pulumi.com/docs/guides/testing/unit
                return {
                    id: `${args.name}-id`,
                    state: args.inputs,
                };
            },

            // Mock function calls and return whatever input properties were provided.
            call: (args: pulumi.runtime.MockCallArgs) => {
                return args.inputs;
            },
        });
    });

    beforeEach(async () => {

        // Dynamically import the resources module.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports
        infra = await import("./test-bootstrap");
    });

    describe("backend API container", () => {
        it("`name` is `test-api`", async () => {
            // const serviceName = await promiseOf(infra.rootComponent.outputs.get("test-api").service.name);
            // log(serviceName);
            // expect(serviceName).toBe("test-api");
        });
    });
});