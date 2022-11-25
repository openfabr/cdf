# FAQ

## What is the main purpose of this, given product X (Terraform, Pulumi or others) serves us well already?

For every framework, there are opinions behind it. As far as OpenFABR CDF goes, our opinions are:
There should be more real coding in the IaC space, to bring more application developers to the space;
There should be much less repetition in IaC space too, because at times we feel that DevOps/Cloud engineers are building more or less the same thing, again and again;

The likes of Terraform and Pulumi are solving some problems in the same space, however using an analogy between programming language and framework (such as Java vs Spring, Python vs Django and Ruby vs RoR), they are laying a foundation for the language level;
Continuing with that analogy, we believe OpenFABR CDF is the framework in the IaC space to define boundaries between application developers and DevOps/Cloud engineers and facilitate collaboration in a loosely coupled manner.

## How could it be a framework if there is no mention of any particular (programming or infrastructure) language?

We envisage an ecosystem where multiple code-centric, imperative IaC runtimes (AWS CDK, Terraform CDK and Pulumi, to name a few) coexist. We support that and we believe in giving people the choice when it comes to developing code for Custom modules. Bear in mind that as of OpenFABR CDF v0.1, the supported runtime is the same as the one used for the underlying implementation package. This constraint is likely to stay because the purpose of using Custom modules is for users to code infrastructure at the cloud vendor level; the way to achieve this is tightly coupled with the APIs offered by IaC runtimes.

## How can I start adopting it?

For an engineering organisation, especially the ones already having a divide between product and platform engineering, adopting OpenFABR CDF means that the platform engineering function will supply implementation packages defined by OpenFABR CDF and the product engineering side will use them via OpenFABR CDF to design cloud infrastructure, independently from each other.

For a new engineering organisation, it could be a good starting point before any platform engineering function is officially formed. Software engineers in the organisation can take on the tasks on both sides. OpenFABR CDF not only becomes a technical framework, but also a loosely coupled way of working.

In other scenarios, such as for an engineering organisation seeking support in cloud infrastructure, or for a DevOps/Cloud consultancy offering such support, we envisage some SaaS products will emerge to fill the need for both users and Package Authors.

## What is the relationship between this and FABR Infra, the commercial SaaS product?

We at FABR are the authors of OpenFABR CDF. However, we consciously avoid mentioning any commercial products we offer as a company.
We intend to keep OpenFABR CDF as a framework independent of any vendor offering (including ours). It leaves space for not only engineering organisations implementing it internally but also other SaaS companies developing and supporting products built on top of it.
