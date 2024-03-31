import { createEnv } from '@t3-oss/env-core'
import { env as authEnv } from '@myturbostack/auth/env'
import { env as trpcEnv } from '@myturbostack/trpc-api/env'
import { z } from 'zod'

const skip =
  !!process.env.SKIP_ENV_VALIDATION &&
  (process.env.SKIP_ENV_VALIDATION === 'true' ||
    process.env.SKIP_ENV_VALIDATION === '1')

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
  skipValidation: skip,
})
