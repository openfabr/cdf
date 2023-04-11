import { Vpc } from "aws-cdk-lib/aws-ec2";
import { DockerImageAsset, NetworkMode } from "aws-cdk-lib/aws-ecr-assets";
import {
  Cluster,
  ContainerImage,
  FargateService,
  FargateTaskDefinition,
  Protocol,
} from "aws-cdk-lib/aws-ecs";
import { Construct } from "constructs";
import {
  PackageInfraConfig,
  PackageServiceContainerEcsConfig,
  ServiceApplicationType,
} from "../package-config";
import { ApplicationLoadBalancedFargateService } from "aws-cdk-lib/aws-ecs-patterns";
import { CfnOutput } from "aws-cdk-lib";

export interface ServicesProps {
  config: PackageInfraConfig;
  vpc: Vpc;
}

export class Services extends Construct {
  readonly cluster: Cluster;
  readonly taskdefs: { [key: string]: FargateTaskDefinition };
  readonly services: { [key: string]: FargateService };

  constructor(scope: Construct, id: string, props: ServicesProps) {
    super(scope, id);

    const ecsConfig = props.config.services.find((r) =>
      PackageServiceContainerEcsConfig.has(r)
    );

    // Use Fargate for ECS
    if (ecsConfig) {
      this.cluster = new Cluster(this, `${id}-cluster`, {
        vpc: props.vpc,
        enableFargateCapacityProviders: true,
      });
    }

    this.taskdefs = {};
    this.services = {};

    const vpc: Vpc = props.vpc;

    ecsConfig?.details
      .map((s) => s as PackageServiceContainerEcsConfig)
      .forEach((s) => {
        if (
          PackageServiceContainerEcsConfig.serviceApplicationType(
            s.application
          ) == ServiceApplicationType.PUBLIC
        ) {
          const prefix = `${id}-${s.name}`;

          // const asset = new DockerImageAsset(this, `${prefix}_image`, {
          //   directory: path.join(__dirname, '../../../../../' + s.dockerfilePath),
          //   networkMode: NetworkMode.HOST,
          // });

          const image = ContainerImage.fromRegistry(s.containerImageName ?? 'hello-world'); // deploy from public container on DockerHub
          //const image = ContainerImage.fromDockerImageAsset(asset); // deploy from local docker file

          const taskDefinition = new FargateTaskDefinition(
            this,
            `${prefix}-taskDef`
          );

          taskDefinition.addContainer(`${prefix}-container`, {
            image: image,
            containerName: `${prefix}-container`,
            portMappings: [{ containerPort: 8001 }],
          });

          const loadBalancedFargateService =
            new ApplicationLoadBalancedFargateService(
              this,
              `${prefix}-service`,
              {
                cluster: this.cluster,
                memoryLimitMiB: s.mem,
                desiredCount: s.replicas,
                cpu: s.cpu,
                taskDefinition: taskDefinition,
                // taskImageOptions: {
                //   image: image,
                //   containerName: `${prefix}-container`,
                //   containerPort: 8001,
                // },
                taskSubnets: {
                  //subnets: [ec2.Subnet.fromSubnetId(this, 'subnet', 'VpcISOLATEDSubnet1Subnet80F07FA0')],
                  subnets: vpc.privateSubnets,
                },
                loadBalancerName: `${prefix}-alb`,
                serviceName: `${prefix}-service`,
              }
            );

            new CfnOutput(loadBalancedFargateService, 'Service:Arn', { value: loadBalancedFargateService.service.serviceArn, description: 'ARN of the loadbalanced service in ECS Fargate'});
            new CfnOutput(loadBalancedFargateService, 'Service:LoadBalancerArn', { value: loadBalancedFargateService.loadBalancer.loadBalancerArn, description: 'ARN for this loadbalanced service in ECS Fargate'});
            new CfnOutput(loadBalancedFargateService, 'Service:Url', { value: loadBalancedFargateService.loadBalancer.loadBalancerDnsName, description: 'Url for this loadbalanced service in ECS Fargate'});

          this.services[s.name] = loadBalancedFargateService.service;
          this.taskdefs[s.name] = loadBalancedFargateService.taskDefinition;
        } else if (
          PackageServiceContainerEcsConfig.serviceApplicationType(
            s.application
          ) == ServiceApplicationType.TASK
        ) {
          const prefix = `${id}-${s.name}`;
          const taskdef = new FargateTaskDefinition(this, `${prefix}-taskdef`, {
            ...{ cpu: s.cpu, memoryLimitMiB: s.mem },
          });

          // const asset = new DockerImageAsset(this, `${prefix}-image`, {
          //   directory: path.join(
          //     __dirname,
          //     "../../../../../" + s.dockerfilePath
          //   ),
          //   networkMode: NetworkMode.HOST,
          // });

          const appContainer = taskdef.addContainer(`${prefix}-container`, {
            image: ContainerImage.fromRegistry(s.containerImageName ?? 'hello-world'),
            //image: ContainerImage.fromDockerImageAsset(asset),
          });

          appContainer.addPortMappings({
            containerPort: 8001,
            protocol: Protocol.TCP,
          });

          const service = new FargateService(this, `${prefix}-service`, {
            serviceName: s.name,
            cluster: this.cluster,
            taskDefinition: taskdef,
          });


          new CfnOutput(service, 'Service:Arn', { value: service.serviceArn, description: 'ARN of the service in ECS Fargate'});
          

          this.taskdefs[s.name] = taskdef;
          this.services[s.name] = service;
        }
      });
  }
}
