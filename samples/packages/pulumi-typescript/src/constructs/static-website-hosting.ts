import * as aws from "@pulumi/aws";
import { Distribution, OriginAccessIdentity } from "@pulumi/aws/cloudfront";
import { Bucket } from "@pulumi/aws/s3";
import * as pulumi from "@pulumi/pulumi";

export type StaticWebsiteHostingArgs = {
  /**
   * (Optional) Attatch custom domain with TLS setup. If omitted no custom domain. 
   */
  customDomain?: string,
  /**
   * (optional) ACM certificate ARN for the target domain. Must be in the us-east-1 region.
   * If omitted an ACM certificate will be created.
   */
  certificateArn?: string
}

export class StaticWebsiteHosting extends pulumi.ComponentResource {
  public readonly namePrefix: string;
  public readonly outputs: any;
  public readonly contentBucket: aws.s3.Bucket | undefined;
  public readonly cloudfrontDistribution: aws.cloudfront.Distribution | undefined;
  private customDomain: string | undefined;
  private certArn: string | undefined;

  constructor(
    name: string, args?: StaticWebsiteHostingArgs | undefined,
    opts?: pulumi.ComponentResourceOptions | undefined,
    remote?: boolean | undefined
  ) {
    super('fabr:aws:static-website-hosting', name, {}, opts, remote)
    this.namePrefix = name;
    this.customDomain = args && args.customDomain;
    this.certArn = args && args.certificateArn;


    // Need to Generate an Origin Access Identity for CF to access the private S3 bucket.
    const originAccessIdentity = new aws.cloudfront.OriginAccessIdentity("originAccessIdentity", {
      comment: "this is needed to setup S3 polices and make the S3 bucket not public.",
    });


    this.contentBucket = this.createWebsiteContentBucket(this.namePrefix, originAccessIdentity);

    this.cloudfrontDistribution = this.createWebsiteCloudFrontDistribution(this.namePrefix, this.contentBucket, originAccessIdentity)

    // Export properties from this stack. This prints them at the end of `pulumi up` and
    // makes them easier to access from the pulumi.com.
    this.outputs = {
      contentBucketUri: pulumi.interpolate`s3://${this.contentBucket.bucket}`,
      contentBucketWebsiteEndpoint: this.contentBucket.websiteEndpoint,
      cloudFrontDomain: this.cloudfrontDistribution.domainName,
      customDomainEndpoint: this.customDomain ? pulumi.interpolate`https://${this.customDomain}/` : "no custome domain configured",
    }
    this.registerOutputs();
  }



  private createWebsiteContentBucket(namePrefix: string, originAccessIdentity: OriginAccessIdentity): Bucket {

    // contentBucket is the S3 bucket that the website's contents will be stored in.
    const contentBucket = new aws.s3.Bucket(`${namePrefix}-site-content`,
      {
        bucket: `${namePrefix}-staticsite-hosting-content`,
        // Configure S3 to serve bucket contents as a website. This way S3 will automatically convert
        // requests for "foo/" to "foo/index.html".
        website: {
          indexDocument: "index.html",
          errorDocument: "404.html",
        },
      }, { parent: this });


    const bucketPolicy = new aws.s3.BucketPolicy(`${namePrefix}-bucket-policy`, {
      bucket: contentBucket.id, // refer to the bucket created earlier
      policy: pulumi.all([originAccessIdentity.iamArn, contentBucket.arn]).apply(([oaiArn, bucketArn]) => JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              AWS: oaiArn,
            }, // Only allow Cloudfront read access.
            Action: ["s3:GetObject"],
            Resource: [`${bucketArn}/*`], // Give Cloudfront access to the entire bucket.
          },
        ],
      })),
    }, { parent: contentBucket });
    return contentBucket;
  }


  private createWebsiteCloudFrontDistribution(namePrefix: string, contentBucket: Bucket, originAccessIdentity: OriginAccessIdentity, customDomain?: string, certificateArn?: pulumi.Input<string>): Distribution {

    const tenMinutes = 60 * 10;

    // if config.includeWWW include an alias for the www subdomain
    //const distributionAliases = config.includeWWW ? [config.targetDomain, `www.${config.targetDomain}`] : [config.targetDomain];
    const distributionAliases: pulumi.Input<pulumi.Input<string>[]> | undefined = customDomain ? [customDomain] : undefined;


    const logBucketName = `${namePrefix}-${customDomain}-logs`
    // logsBucket is an S3 bucket that will contain the CDN's request logs.
    const logsBucket = new aws.s3.Bucket("pulumiStaticWebsiteRequestLogs",
      {
        bucket: logBucketName,
        acl: "private",
      }, { parent: this });


    // distributionArgs configures the CloudFront distribution. Relevant documentation:
    // https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html
    // https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html
    const distributionArgs: aws.cloudfront.DistributionArgs = {
      enabled: true, // enable origin shield
      // Alternate aliases the CloudFront distribution can be reached at, in addition to https://xxxx.cloudfront.net.
      // Required if you want to access the distribution via config.targetDomain as well.
      aliases: distributionAliases,
      // We only specify one origin for this distribution, the S3 content bucket.
      origins: [
        {
          originId: contentBucket.arn,
          //domainName: contentBucket.websiteEndpoint,
          domainName: contentBucket.bucketRegionalDomainName,
          s3OriginConfig: {
            originAccessIdentity: originAccessIdentity.cloudfrontAccessIdentityPath,
          },
        },
      ],
      waitForDeployment: false,
      defaultRootObject: "index.html",

      // A CloudFront distribution can configure different cache behaviors based on the request path.
      // Here we just specify a single, default cache behavior which is just read-only requests to S3.
      defaultCacheBehavior: {
        targetOriginId: contentBucket.arn,

        viewerProtocolPolicy: "redirect-to-https",
        allowedMethods: ["GET", "HEAD", "OPTIONS"],
        cachedMethods: ["GET", "HEAD", "OPTIONS"],

        forwardedValues: {
          cookies: { forward: "none" },
          queryString: false,
        },

        minTtl: 0,
        defaultTtl: tenMinutes,
        maxTtl: tenMinutes,
      },

      // "All" is the most broad distribution, and also the most expensive.
      // "100" is the least broad, and also the least expensive.
      priceClass: "PriceClass_100",

      // You can customize error responses. When CloudFront receives an error from the origin (e.g. S3 or some other
      // web service) it can return a different error code, and return the response for a different resource.
      customErrorResponses: [
        { errorCode: 404, responseCode: 404, responsePagePath: "/404.html" },
      ],

      restrictions: {
        geoRestriction: {
          restrictionType: "none",
        },
      },

      viewerCertificate: {
        // acmCertificateArn: certificateArn,  // Per AWS, ACM certificate must be in the us-east-1 region.
        // sslSupportMethod: "sni-only",
        cloudfrontDefaultCertificate: true,
      },

      loggingConfig: {
        bucket: logsBucket.bucketDomainName,
        includeCookies: false,
        prefix: `${namePrefix}-${customDomain}/`,
      },
    };


    const cdn = new aws.cloudfront.Distribution("cdn", distributionArgs, { parent: this });


    return cdn;
  }
}

