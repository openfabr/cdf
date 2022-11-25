# Situation

It is worth setting the scene for why a cloud infrastructure framework such as OpenFABR CDF comes into existence. 

Managing computer infrastructure still comes with a steep learning curve for application developers and significantly adds to their cognitive load. Infrastructure is more accessible than it has ever been thanks to the invention of the cloud. However, infrastructure needs have become more complicated at the same rate. So application developers now have easy access but to a complicated explosion of options. 

## Scenarios

There are two broad scenarios in mind:

- **An organisation with early engineering hires building its prototype and/or MVP.** it’s common for these first hires to be do-it-all software engineers. As the product grows so does the engineering team. Organisations typically grow the team by adding specialists as there’s full-time work in these areas. DevOps/Cloud/Platform engineers are one of these specialist areas.

- **An organisation using a third-party agency/consultancy to build its prototype and/or MVP.** They would handle the infrastructure as well. If the product is successful, things get moved in-house.

- **An organisation with mature prouduct built in-house.** They are likley to have internal infrastructure engineers.

We’ll elaborate and build on these with examples later.

## Personas Involved

In the above context OpenFABR CDF concerns two groups of engineers:

- **Application Developers** aka Product Engineers usually work in the product development division of the organisation. They are typically not experts in cloud infra and the associated tech stack. In any case, their focus is on building the core product and solving customer problems.

- **Infrastructure Engineers** aka DevOps/Cloud/Platform Engineers
  - **Organisation internal** - engineers working within an infrastructure team. These teams are typically called Platform Engineering, DevOps, or simply Infrastructure team. Typically their mission is to enable product engineers to focus on the product and be productive. Broadly achieved by building a common app runtime/hosting infrastructure and CI/CD pipelines with self-serve.
  - **third-party** such as a DevOps/Cloud consultancy, could also be **Package Authors** in this context because they provide expertise similar to an internal platform engineering team or division possess. 

## Trends

### Infrastructure as Code

Companies such as [Hashicorp](https://hashicorp.com) have led the modern way in [IaC](https://en.wikipedia.org/wiki/Infrastructure_as_code) movement in recent years, by expressing infrastructure in a declarative manner. The likes of [Pulumi](https://www.pulumi.com/docs/), [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/home.html) and [Terraform CDK](https://developer.hashicorp.com/terraform/cdktf) have further developed into imperative notions using programming languages (albeit via language bindings). Moreover, AWS CDK started offering high-level, composite constructs that target use cases rather than actual cloud services.

More and more application developers are now taking up the challenge of infrastructure provisioning thanks to those language bindings, meaning that they can use their favourite programming languages (comfort aspect) and potentially high-level, composite constructs to achieve their goals more quickly (speed aspect). Although the natural next step of infrastructure provisioning seems to be through high-level constructs, it would hit its ceiling once those common use cases are implemented. It could go further but would likely take an opinion-based approach that lacks the universal appeal outside the engineering organisation that implements them.

**Its influence on OpenFABR CDF: If imperative infrastructure provisioning is gaining traction among application developers, it calls for a framework layer to help them structure their codebase better, and build infrastructure faster.**

### Containerisation

Another industrial trend is the increasing adoption of containerisation, partly thanks to the popularity of Docker and Kubernetes. Think of it as achieving Sun’s vision of “Write Once, Run Everywhere” which was originally penned with Java at an application virtual machine (JVM) level, at a different (container) level where applications are packaged with an OS layer to produce container images ready to be deployed in a container cluster like K8s. 

With containerisation, it defines a well-adopted standard in the early part of CI/CD. It is not uncommon to see CI ending at container images publishing to artefact registries and CD taking over by extracting published images from the same artefact registries, therefore eliminating the need to have a dependency on the CI process. Here container images become the happy medium between CI and CD, via artefact registries.  

**Its influence on OpenFABR CDF: It is safe to assume that the app runtime can be abstracted at the container level.**

### Platform Engineering

Many good-sized engineering organisations (50-100 engineers in a tech startup, up to the scale of a Big Tech) have invested in setting up platform teams or divisions to manage cloud infrastructure centrally. Many have already taken the next step to create an internal DevOps platform in various forms. By creating this abstraction layer between the platform and the product functions within the same organisation, it sets up a contract which is usually a result of surveys and interviews among application developers in product engineering teams. It enables platform engineers to innovate under the contract without affecting application developers’ ability to develop and release. 

**Its influence on OpenFABR CDF: The existence of the internal DevOps platform as the abstraction layer between application developers and platform engineers is a validation of the [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) approach. What OpenFABR CDF aims for is to standardise this approach by building a framework around the practices.**

## Motivation

Historically the challenge has been the lack of ways to establish clear collaborative boundaries between the two worlds with clean interfaces like APIs. Over the years patterns and technologies such as Infra as Code have developed effectively serving as APIs. But most of it has come from the infrastructure world so 1) still a whole new tech stack to learn relative to the app stack 2) the complicated infrastructure services from cloud vendors are presented as is. 

We want to help improve this situation significantly. We hope to see an ecosystem with discussion flourishing around the framework defined by OpenFABR CDF. For the ecosystem to be successful DevOps/Cloud/Platform engineering effort is needed to build sensible abstractions from the cloud vendor level, to achieve the ease-of-use nature of the application level. 

We think using **actual coding or programming** in IaC is an important step forward and a key enabler to accelerating the build of easy-to-use abstractions.


