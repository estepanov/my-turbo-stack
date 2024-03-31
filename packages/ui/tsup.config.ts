import { defineConfig, Options } from 'tsup'

export default defineConfig((options: Options) => ({
  sourcemap: true,
  dts: true,
  clean: true,
  entry: ['src/index.tsx'],
  target: 'esnext',
  format: ['cjs', 'esm'],
  external: ['react', 'react-dom', 'react-daisyui'],
  skipNodeModulesBundle: true,
  ...options,
}))
