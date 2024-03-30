import { defineConfig, Options } from 'tsup'

export default defineConfig((options: Options) => ({
  ...options,
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
}))
