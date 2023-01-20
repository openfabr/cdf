import * as pulumi from'@pulumi/pulumi';
import {describe, expect, beforeAll, beforeEach, it} from '@jest/globals';
import * as aws from '@pulumi/aws';
import * as helpers from './helpers';

describe("OpenFABR CDF sample Pulumi Package", () => {
    // Define the infra variable as a type whose shape matches that of the
    // to-be-defined resources module.
    
    let mybucket: aws.s3.Bucket;

    beforeAll(() => {

    });

    beforeEach(async () => {
        mybucket = new aws.s3.Bucket("mybucket", { bucket: "my-test-bucket" });
    });

    describe("Jest setup works", () => {
        it("test Bucket name is `my-test-bucket`", async () => {
            // Intentionally a test independent of CDF to make sure the basic testing Jest setup works
            const bucketName = await helpers.promiseOf(mybucket.bucket);
            expect(bucketName).toBe("my-test-bucket");
        });
    });
});