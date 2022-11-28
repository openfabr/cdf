import { Vpc } from "aws-cdk-lib/aws-ec2";
import { DockerImageAsset, NetworkMode } from "aws-cdk-lib/aws-ecr-assets";
import { Cluster, ContainerImage, FargateService, FargateTaskDefinition, Protocol } from "aws-cdk-lib/aws-ecs";
import { Construct } from "constructs";
import { PackageInfraConfig, PackageServiceContainerEcsConfig, ServiceApplicationType } from "../package-config";
import * as path from "path";
import { ApplicationLoadBalancedFargateService } from "aws-cdk-lib/aws-ecs-patterns";

export interface ServicesProps {
  config: PackageInfraConfig,
  vpc: Vpc,
}

export class Services extends Construct {
  readonly cluster: Cluster;
  readonly taskdefs: FargateTaskDefinition[];
  readonly services: FargateService[];

  constructor(scope: Construct, id: string, props: ServicesProps) {
    super(scope, id);

    const ecsConfig = props.config.services.find(r => PackageServiceContainerEcsConfig.has(r));

    // Use Fargate for ECS
    this.cluster = new Cluster(this, `${id}-cluster`, {
      vpc: props.vpc,
      enableFargateCapacityProviders: true,
    });
    this.taskdefs = [];
    this.services = [];

    const vpc: Vpc = props.vpc


    ecsConfig?.details.map(s => s as PackageServiceContainerEcsConfig).forEach(s => {
      

      if (PackageServiceContainerEcsConfig.serviceApplicationType(s.application) == ServiceApplicationType.PUBLIC) {
        const prefix = `${id}-${s.name}`;

        const asset = new DockerImageAsset(this, `${prefix}_image`, {
          directory: path.join(__dirname, '../../../../../' + s.dockerfilePath),
          networkMode: NetworkMode.HOST,
        });

        const loadBalancedFargateService = new ApplicationLoadBalancedFargateService(this, `${prefix}-service`, {
          cluster: this.cluster,
          memoryLimitMiB: 1024,
          desiredCount: 1,
          cpu: 512,
          taskImageOptions: {
            image: ContainerImage.fromDockerImageAsset(asset),
            containerName: `${prefix}-container`,
            containerPort: 8001
          },
          taskSubnets: {
            //subnets: [ec2.Subnet.fromSubnetId(this, 'subnet', 'VpcISOLATEDSubnet1Subnet80F07FA0')],
            subnets: vpc.privateSubnets
          },
          loadBalancerName: `${prefix}-alb`,
          serviceName: `${prefix}-service`,
        });
        

        this.services.push(loadBalancedFargateService.service);
        this.taskdefs.push(loadBalancedFargateService.taskDefinition);
      }
      
      else if (PackageServiceContainerEcsConfig.serviceApplicationType(s.application) == ServiceApplicationType.TASK) {
        const prefix = `${id}-${s.name}`;
        const taskdef = new FargateTaskDefinition(this, `${prefix}-taskdef`, {
          ... { cpu: s.cpu, memoryLimitMiB: s.mem, },
        });

        const asset = new DockerImageAsset(this, `${prefix}-image`, {
          directory: path.join(__dirname, '../../../../../' + s.dockerfilePath),
          networkMode: NetworkMode.HOST,
        })

        const appContainer = taskdef.addContainer(`${prefix}-container`, {
          //image: ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
          image: ContainerImage.fromDockerImageAsset(asset)
        })

        appContainer.addPortMappings({
          containerPort: 8001,
          protocol: Protocol.TCP,
        });


        const service = new FargateService(this, `${prefix}-service`, {
          serviceName: s.name,
          cluster: this.cluster,
          taskDefinition: taskdef,
        });

        this.taskdefs.push(taskdef);
        this.services.push(service);

      }
    });
  }
}

