import { FargateService, FargateTaskDefinition } from "aws-cdk-lib/aws-ecs";
import { Key } from "aws-cdk-lib/aws-kms";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Topic } from "aws-cdk-lib/aws-sns";
import { SqsSubscription } from "aws-cdk-lib/aws-sns-subscriptions";
import { Queue } from "aws-cdk-lib/aws-sqs";
import { Construct } from "constructs";
import { PackageInfraConfig, RelationTyping } from "../package-config";

interface RelationsPropsFromComponents {
  keys: { [key: string]: Key },
  queues: { [key: string]: Queue },
  topics: { [key: string]: Topic },
  buckets: { [key: string]: Bucket },
}

interface RelationsPropsFromServices {
  taskdefs: { [key: string]: FargateTaskDefinition },
  services: { [key: string]: FargateService },
}

export interface RelationsProps {
  config: PackageInfraConfig,
  components: RelationsPropsFromComponents,
  services: RelationsPropsFromServices,
}

export class Relations extends Construct {

  constructor(scope: Construct, id: string, props: RelationsProps) {
    super(scope, id);

    props.config.relations.forEach(r => {

      if (RelationTyping.ADMIN_KEY == r.type) {
        props.components.keys[r.finish].grantAdmin(props.services.taskdefs[r.start].taskRole);
      }
      else if (RelationTyping.ENCRYPT_KEY == r.type) {
        props.components.keys[r.finish].grantEncrypt(props.services.taskdefs[r.start].taskRole);
      }
      else if (RelationTyping.DECRYPT_KEY == r.type) {
        props.components.keys[r.finish].grantDecrypt(props.services.taskdefs[r.start].taskRole);
      }
      else if (RelationTyping.PUBLISH_TOPIC == r.type) {
        props.components.topics[r.finish].grantPublish(props.services.taskdefs[r.start].taskRole);
      }
      else if (RelationTyping.SEND_QUEUE == r.type) {
        props.components.queues[r.finish].grantSendMessages(props.services.taskdefs[r.start].taskRole);
      }
      else if (RelationTyping.RECEIVE_QUEUE == r.type) {
        props.components.queues[r.finish].grantConsumeMessages(props.services.taskdefs[r.start].taskRole);
      }
      else if (RelationTyping.SUBSCRIBE_TOPIC == r.type) {
        props.components.topics[r.finish].addSubscription(new SqsSubscription(props.components.queues[r.start]));
      }
      else if (RelationTyping.READ_OBJECT == r.type) {
        props.components.buckets[r.finish].grantRead(props.services.taskdefs[r.start].taskRole);
      }
      else if (RelationTyping.WRITE_OBJECT == r.type) {
        props.components.buckets[r.finish].grantWrite(props.services.taskdefs[r.start].taskRole);
      }
      else {
        throw new Error(`Cannot find matching relation type for [${r.type}]!`);
      }

    });
  }
}

