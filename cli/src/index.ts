#!/usr/bin/env node
import { program } from '@commander-js/extra-typings';
import { packages, projects } from './commands';

// @ts-ignore
import { version } from '../package.json';

/**
 * cdf-cli main command wrapper
 */
program
    .name("cdf-cli")
    .version(version, "-v, --version", "output the version number")
    .description("A CLI for the CDF project")

/**
 * Register the projects command
 */
program.addCommand(packages());

/**
 * Register the packages command
 */
program.addCommand(projects());

program.parse(process.argv);
