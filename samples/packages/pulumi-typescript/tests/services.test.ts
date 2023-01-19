import {describe, expect, beforeAll, beforeEach, it} from '@jest/globals';
import * as helpers from './helpers';
import { log } from 'console';
import { Services } from '../src/constructs/services';
import { ServiceSetting } from '@pulumi/aws/ssm';
import config from './short-config.json';
import { PackageInfraConfig } from '../src';
import { Network } from '../src/constructs/network';
import * as aws from '@pulumi/aws';

describe("OpenFABR CDF AWS Pulumi Package - Services", () => {
    // Define the infra variable as a type whose shape matches that of the
    // to-be-defined resources module.
    // https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
    let services: Services;
    let shortconfig: PackageInfraConfig;
    let vpc: aws.ec2.DefaultVpc;

    beforeAll(() => {
        helpers.setupPulumiMocks();
        shortconfig = config as PackageInfraConfig;
        vpc = new aws.ec2.DefaultVpc("my-default-vpc");
    });

    beforeEach(async () => {
        // Dynamically import the resources module.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports
        //infra = await import("./test-bootstrap-cdf");

        services = new Services('fabr:services', 'services', { config: shortconfig, vpc: vpc });
    });

    describe("services - type container_ecs", () => {
        it("created a cluster named `fargate-cluster`", async () => {
            const cluster = services.ecsClusters["fargate-cluster"].cluster;
            expect(cluster).toBeDefined;
        });
        it("created a service named `` in the cluster `fargate-cluster`", async () => {
            const cluster = services.ecsClusters["fargate-cluster"];
            if (cluster && cluster.services) {
                expect(cluster.services["test-api"]).toBeDefined;
            }
        });
    });

    describe("Websites", () => {
        it("One created", async () => {
            const website = services.websites["my-website"];
            expect(website).toBeDefined;
        });
    });
});