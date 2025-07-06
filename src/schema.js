"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envSchema = void 0;
var zod_1 = require("zod");
exports.envSchema = zod_1.z.object({
    PORT: zod_1.z.string().regex(/^\d+$/, "PORT must be a number").default("3000"),
    NODE_ENV: zod_1.z.enum(["development", "production", "test"]),
    DATABASE_URL: zod_1.z.string().url(),
    ENABLE_LOGS: zod_1.z.string().optional()
});
