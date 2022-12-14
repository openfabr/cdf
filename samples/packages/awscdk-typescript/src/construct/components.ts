import { Key } from "aws-cdk-lib/aws-kms";
import { Topic } from "aws-cdk-lib/aws-sns";
import { Queue } from "aws-cdk-lib/aws-sqs";
import { Bucket, BucketAccessControl, BucketEncryption } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import { PackageComponentKeySoftwareConfig, PackageComponentMessageQueueConfig, PackageComponentMessageTopicConfig, PackageComponentStaticWebsiteHostingConfig, PackageComponentStorageBucketConfig, PackageInfraConfig } from "../package-config";
import { CfnOutput, RemovalPolicy } from "aws-cdk-lib";
import { Distribution, OriginAccessIdentity } from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Vpc } from "aws-cdk-lib/aws-ec2";

export interface ComponentsProps {
  config: PackageInfraConfig,
  vpc: Vpc,
}

export interface StaticWebsiteHosting {
  bucket: Bucket,
  distribution: Distribution,
}

export class Components extends Construct {
  readonly queues: { [key: string]: Queue };
  readonly topics: { [key: string]: Topic };
  readonly keys: { [key: string]: Key };
  readonly buckets: { [key: string]: Bucket };
  readonly websites: { [key: string]: StaticWebsiteHosting };


  constructor(scope: Construct, id: string, props: ComponentsProps) {
    super(scope, id);

    this.queues = {};
    this.topics = {};
    this.keys = {};
    this.buckets = {};
    this.websites = {};

    props.config.components.forEach(t => {

      if (PackageComponentKeySoftwareConfig.has(t)) {
        t.details.map(c => c as PackageComponentKeySoftwareConfig).forEach(c => {
          const k = new Key(this, c.name, {
            alias: `key-${c.name}`,
            keySpec: PackageComponentKeySoftwareConfig.awsKeySpec(c.spec),
            keyUsage: PackageComponentKeySoftwareConfig.awsKeyUsage(c.usage),
            ... { enabled: c.enabled, enableKeyRotation: c.rotation }
          });

          this.keys[c.name] = k;
        });
      }
      else if (PackageComponentMessageQueueConfig.has(t)) {
        t.details.map(c => c as PackageComponentMessageQueueConfig).forEach(c => {
          const dlq = c.dlq ? {
            queue: new Queue(this, `${c.name}-dlq`, {
              ... { fifo: c.fifo },
            }), maxReceiveCount: c.dlq
          } : undefined;
          const q = new Queue(this, c.name, {
            ... { fifo: c.fifo, deadLetterQueue: dlq },
          });

          this.queues[c.name] = q;
        });
      }
      else if (PackageComponentMessageTopicConfig.has(t)) {
        t.details.map(c => c as PackageComponentMessageTopicConfig).forEach(c => {
          const topic = new Topic(this, c.name, {
            ... { fifo: c.fifo }
          });

          this.topics[c.name] = topic;
        });
      }
      else if (PackageComponentStorageBucketConfig.has(t)) {
        t.details.map(c => c as PackageComponentStorageBucketConfig).forEach(c => {
          const b = new Bucket(this, c.name,
            {
              ...{
                bucketName: c.name,
                blockPublicAccess: PackageComponentStorageBucketConfig.awsBlockPublicAccess(c.blockPublicAccess),
                encryption: BucketEncryption.S3_MANAGED,
                enforceSSL: true,
                removalPolicy: RemovalPolicy.RETAIN // don't delete files when the stack is destroyed
              }
            }
          )
          this.buckets[c.name] = b;
        });
      }
      else if (PackageComponentStaticWebsiteHostingConfig.has(t)) {
        t.details.map(c => c as PackageComponentStaticWebsiteHostingConfig).forEach(c => {
          const b = new Bucket(this, `${c.name}_${c.hostName}${c.domain}`,
            {
              ...{
                accessControl: BucketAccessControl.PRIVATE,
                removalPolicy: RemovalPolicy.DESTROY
              }
            }
          )

          // Optimising for a self-contained demo
          // In real life you could do something similar so that deployed infra could be fully tested before deploying real apps
          new BucketDeployment(this, 'BucketDeployment', {
            destinationBucket: b,
            sources: [Source.data('/index.html', '<html><head><title>Hello world!</title></head><body>Hello world!</body></html>')]
          })

          const originAccessIdentity = new OriginAccessIdentity(this, 'OriginAccessIdentity');
          b.grantRead(originAccessIdentity);
          
          // note: CloudFrontWebDistrubution is the old construct
          const d = new Distribution(this, `cf_${c.name}_${c.hostName}${c.domain}`, {
            defaultRootObject: 'index.html',
            defaultBehavior: {
              origin: new S3Origin(b, {originAccessIdentity}),
            },
          })

          new CfnOutput(d, 'distributionDomainName', { value: d.distributionDomainName, description: 'distrinutionDomainName' });

          this.websites[c.name] = { bucket: b, distribution: d };
        });
      }

    });
  }
}
