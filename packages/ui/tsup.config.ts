import { defineConfig, Options } from 'tsup'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig((options: Options) => ({
  sourcemap: true,
  dts: true,
  clean: isProd,
  minify: isProd,
  entry: ['src/index.tsx'],
  target: 'esnext',
  format: ['cjs', 'esm'],
  external: ['react', 'react-dom', 'react-daisyui'],
  skipNodeModulesBundle: true,
  ...options,
}))
