import { Command } from "@commander-js/extra-typings";

const prjcts = new Command("projects");

export const projects = () => {
  prjcts.description("Manage projects in the CDF ecosystem")

  prjcts
    .command("init name")
    .description("Generates scaffolding for a project from a template")
    .option("-l, --language <value>", "Project tooling language")
    .option("-r, --runtime <value>", "Project runtime")
    .option("-c, --cicd <value>", "Project CI/CD")
    .usage("<name> [options]")
    .action((name, options) => {
      console.log("init projects", name, options);
    });

  return prjcts;
}

