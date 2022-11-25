# Implementation Details

## File Formats & Parsers for Plan and Package Definitions

It is a conscious decision NOT to pick a file format such as JSON or XML for OpenFABR CDF. Semantics is mandatory to define OpenFABR CDF however the actual serialisation of those semantics can be done in any format.

JSON has been the de-facto choice recently, but XML can be a better choice in certain scenarios. Both come with schema support (via JSON-Schema and XML Schema). In future releases, OpenFABR CDF will likely be shipped with those format-specific schema files to facilitate adoption, and parsers in popular programming languages such as TypeScript, Java and Python.

## Support for Custom

Given the nature of the Custom module, which allows users to augment a Plan created by other building blocks with custom coding according to the underlying implementation package’s runtime, it is expected that the implementation package can run those code blocks as part of an infrastructure provisioning execution.

The implementation package should arrange all created blocks in the same Plan to be available as input for any Custom module. How the code looks like varies among different IaC runtimes (AWS CDK, Terraform CDK and Pulumi) but at a conceptual level, it should be a construct with properties which contains all the other blocks, looked up by their names, for the Custom module to code against.

As of OpenFABR CDF v0.1, it is assumed that code in the Custom module is always vetted for malicious intent. In an intra-organisation scenario, users are usually trusted to write code in a Custom module, safeguarded by sensible QA processes. In an inter-organisation or SaaS scenario, it is important to have procedures in place to make sure the security aspect of any Custom modules.

## Future Plan

Both the package definition file and implementation package could find themselves in an artefact repository of some sort that supports publishing (by Package Authors) and retrieving (by users), as part of key infrastructure to support broader adoption of OpenFABR CDF at the Internet scale. Equally, there could be a need to support private repositories for organisational use internally.

It also requires a hot-loading infrastructure to

- Apply loaded package definition to the plan a user is working on.
- And install the corresponding implementation package to run infrastructure provisioning.
