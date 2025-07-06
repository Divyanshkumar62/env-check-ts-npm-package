import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs"],
  outDir: "dist",
  target: "node18",
  clean: true,
  dts: false,
  minify: false,
  banner: {
    js: "#!/usr/bin/env node",
  },
});
