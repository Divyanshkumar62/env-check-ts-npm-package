# env-check-ts

>  A TypeScript CLI tool to validate `.env` files and auto-generate `.env.example` using a Zod schema.

---

## Why env-check-ts?

Managing environment variables is risky without validation.  
This tool helps you:

- Validate all required environment variables before your app runs
- Check variable types and allowed values using [Zod](https://zod.dev)
- Auto-generate a clean `.env.example` for your team
- Prevent runtime bugs due to misconfigured or missing envs

---

## Installation

Install globally:

```bash
npm install -g env-check-ts
```

or use directly without installing: 

```bash
npx env-check-ts validate
```

## Features
- CLI commands: validate, generate

- Type-safe validation via Zod

- Auto-generates .env.example from schema

- Zero-config, works out-of-the-box

- Easily extendable for teams and CI/CD

## Usage
1)Define Schema
Create `src/schema.ts`:

``` bash
import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.string(),
  DATABASE_URL: z.string().url(),
});
```

2)Validate `.env`
```bash
env-check-ts validate
```

`Example output`:

```bash
❌ Environment validation failed:
• NODE_ENV: Invalid enum value. Expected 'development' | 'production' | 'test', received 'dev'
• DATABASE_URL: Required
```

3)Generate `.env.example`
```bash
env-check-ts generate
```

`Example output`:

```bash
env

 NODE_ENV=development
 PORT=
 DATABASE_URL=
```

## Contributing
The project welcomes all constructive contributions. Contributions take many forms, from code for bug fixes and enhancements, to additions and fixes to documentation, additional tests, and many more!

```bash
git clone https://github.com/your-username/env-check-ts
cd env-check-ts
```
```bash
npm install
npm run dev
```

##  License
MIT