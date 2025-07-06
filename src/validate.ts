import {config} from 'dotenv';
import {envSchema} from './schema'
import chalk from 'chalk'

config();

export function validateEnv() {

    const result = envSchema.safeParse(process.env);

    if(!result.success) {
        console.error(chalk.red("\n❌ Environment validation failed: "))
        result.error.errors.forEach((err) => {
            console.error(
                chalk.yellow(`• ${err.path.join(".")}: `) + chalk.white(err.message)
            );
        })
        process.exit(1);
    }

    console.log(chalk.green("✅ Environment validated successfully."));

    return result.data
}