#!/usr/bin/env node

import { Command } from "commander";
import { validateEnv } from "./validate";
import { generateEnvExample } from "./generate";

const program = new Command();

program
    .name("env-check")
    .description("Validate your environment variables with a schema")
    .version("1.0.0");

program
    .command("validate")
    .description("Validate environment variables against the schema")
    .action(() => {
        validateEnv();
    })

program 
    .command("generate")
    .description("Generate a .env.example file from your schema")
    .action(() => {
        generateEnvExample();
    })


program.parse(process.argv)