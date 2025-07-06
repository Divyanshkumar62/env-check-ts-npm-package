import {z} from 'zod';

export const envSchema = z.object({
    PORT: z.string().regex(/^\d+$/, "PORT must be a number").default("3000"),
    NODE_ENV: z.enum(["development", "production", "test"]),
    DATABASE_URL: z.string().url(),
    ENABLE_LOGS: z.string().optional()
})