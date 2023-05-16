import { Command } from "@commander-js/extra-typings";

const pkgs = new Command("packages");

export const packages = () => {
  pkgs.description("Manage packages in a CDF ecosystem")

  pkgs
    .command("init name")
    .description("Generates scaffolding for a package from a template")
    .option("-l, --language <value>", "Package tooling language")
    .option("-r, --runtime <value>", "Package runtime")
    .option("-c, --cicd <value>", "Package CI/CD")
    .usage("<name> [options]")
    .action((name, options) => {
      console.log("init packages", name, options);
    });
  
  return pkgs;
}