
import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws'
import * as awsx from '@pulumi/awsx'
import {StaticWebsiteHosting} from './static-website-hosting';
import { PackageInfraConfig } from '../package-config';
import { PackageServiceContainerEcsConfig, PackageServiceStaticWebsiteHostingConfig, ServiceAppType } from '../package-service-config';
import { RuntimeConfig } from '@openfabr/cdf';
import { log } from 'console';



export interface ServicesArgs {
  config: PackageInfraConfig,
  vpc: aws.ec2.Vpc | aws.ec2.DefaultVpc | Promise<aws.ec2.GetVpcResult>
}

export interface ecsCluster {
  cluster?: aws.ecs.Cluster,
  loadBalancer?: awsx.lb.ApplicationLoadBalancer | awsx.lb.NetworkLoadBalancer,
  services?: { [key: string]: awsx.ecs.FargateService }
}
/**
 * The CDF `Service` construct type is a subset of the Pulumi ComponentResource type therefore the concept doesn't have the exact same meaning as in CDK.
 */
export class Services extends pulumi.ComponentResource {

  readonly websites: { [key: string]: StaticWebsiteHosting };
  readonly ecsClusters: { [key: string]: ecsCluster };

  constructor(type: string, name: string, args?: ServicesArgs | undefined, opts?: pulumi.ComponentResourceOptions | undefined, remote?: boolean | undefined) {
    super(type, name, args, opts, remote);

    this.websites = {};
    this.ecsClusters = {};

    args?.config.services.forEach(s => {
      if (PackageServiceStaticWebsiteHostingConfig.has(s)) {
      
        s.details.map(w => w as PackageServiceStaticWebsiteHostingConfig).forEach(w => {
        
        this.websites[w.name] = new StaticWebsiteHosting(w.name)

        });
      } else if (PackageServiceContainerEcsConfig.has(s)) {

        const clusterName = `${s.name}`
        const _cluster: ecsCluster = {};
        _cluster.services = {};
        // create service def
        _cluster.cluster = new aws.ecs.Cluster(clusterName, {});

        // 32char limit and Pulumi adds 7char random to the name 
        const n: string = s.name.length + 3 + 7 > 32 ? s.name.substring(0, 21) : name
        const prefix = `${n}-lb`

        _cluster.loadBalancer = new awsx.lb.ApplicationLoadBalancer(prefix, {}, { parent: this });

        (s as RuntimeConfig<PackageServiceContainerEcsConfig>).details.forEach((c) => {
          if (PackageServiceContainerEcsConfig.serviceAppType(c.applicationType) == ServiceAppType.PUBLIC_LOADBALANCED) {
            log("service name: ", c.name);
            _cluster.services![c.name] = new awsx.ecs.FargateService(c.name, {
              cluster: _cluster.cluster!.arn,
              assignPublicIp: true,
              desiredCount: c.replicas,
              taskDefinitionArgs: {
                container: { // single container to keep the example simple
                  name: c.name,
                  image: c.containerImage, // format: "docker.io/janaka/test-api", Publish image on DockerHub
                  cpu: c.cpu,
                  memory: c.mem,
                  essential: true,
                  portMappings: [{
                    containerPort: 80,
                    targetGroup: _cluster.loadBalancer!.defaultTargetGroup,
                  }],
                },
              },
            },);
          } else if (PackageServiceContainerEcsConfig.serviceAppType(c.applicationType) == ServiceAppType.PRIVATE_LOADBALANCED) {
            // implementation here
          } else if (PackageServiceContainerEcsConfig.serviceAppType(c.applicationType) == ServiceAppType.PRIVATE_NOT_LOADBALANCED) {
            // implementation here
          }
      
        });

        this.ecsClusters[clusterName] = _cluster;
      }
    });

    this.registerOutputs();
  }
}
