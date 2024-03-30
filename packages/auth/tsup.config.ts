import { defineConfig, Options } from 'tsup'

export default defineConfig((options: Options) => ({
  ...options,
  entryPoints: ['src/index.ts', 'src/env.ts', 'src/options.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  target: 'esnext',
}))
