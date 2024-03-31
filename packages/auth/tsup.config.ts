import { defineConfig, Options } from 'tsup'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig((options: Options) => ({
  ...options,
  entryPoints: ['src/index.ts', 'src/env.ts', 'src/options.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: isProd,
  minify: isProd,
  target: 'esnext',
  sourcemap: true,
}))
