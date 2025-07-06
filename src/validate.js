"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnv = validateEnv;
var dotenv_1 = require("dotenv");
var schema_1 = require("./schema");
var chalk_1 = require("chalk");
console.log("Loading .env...");
(0, dotenv_1.config)();
console.log("Loaded process.env:", process.env);
function validateEnv() {
    var result = schema_1.envSchema.safeParse(process.env);
    if (!result.success) {
        console.error(chalk_1.default.red("\n❌ Environment validation failed: "));
        result.error.errors.forEach(function (err) {
            console.error(chalk_1.default.yellow("\u2022 ".concat(err.path.join("."), ": ")) + chalk_1.default.white(err.message));
        });
        process.exit(1);
    }
    console.log(chalk_1.default.green("✅ Environment validated successfully."));
    return result.data;
}
