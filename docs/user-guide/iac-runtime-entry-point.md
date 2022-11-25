# IaC Runtime Entry Point

Each IaC Runtime (AWS CDK, Terraform CDK, Pulumi etc) has a code file entry point as one would expect with any program. This is where the final `InfraPlan` is built, turned into a Stack, and executed at runtime.

In the entry point code file call `Orchestrator` which combines the `Config` (config.json) and `Custom` constructs to create an Execution Plan (as defined by the respective IaC Runtime, see definition above) which gets executed when you run the respective IaC Runtime CLI’s deploy command.

The exact details of this entry point will of course vary by the IaC Runtime being chosen. Example: `/bin/bootstap.ts` for AWS CDK. `/main.ts` for TF CDK.

`Custom` modules - They are files containing source code, each of which is for customising a particular `Construct Instance`. It needs to follow the template for Custom modules set out by the respective implementation package as it is IaC Runtime-specific. It’s implementing `PackageCustomModule`.

`config.json` - this is where you specify the exact configuration of infrastructure to deploy. This can be provided at runtime.
