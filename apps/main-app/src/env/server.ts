import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'
import { env as trpcEnv } from '@myturbostack/trpc-api/env'
import { env as authEnv } from '@myturbostack/auth/env'

export const env = createEnv({
  extends: [trpcEnv, authEnv],
  server: {
    NODE_ENV: z
      .enum(['development', 'production'])
      .optional()
      .default('development'),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
})
