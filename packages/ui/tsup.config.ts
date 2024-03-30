import { defineConfig, Options } from 'tsup'

export default defineConfig((options: Options) => ({
  clean: true,
  sourcemap: true,
  legacyOutput: true,
  dts: true,
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  external: ['react', 'react-dom'],
  ...options,
}))
