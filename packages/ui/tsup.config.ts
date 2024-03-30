import { defineConfig, Options } from 'tsup'

export default defineConfig((options: Options) => ({
  banner: {
    js: "'use client'",
  },
  clean: true,
  sourcemap: true,
  ...options,
}))
