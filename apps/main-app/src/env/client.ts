import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  clientPrefix: 'NEXT_PUBLIC_',
  client: {
    NEXT_PUBLIC_NODE_ENV: z
      .enum(['development', 'production'])
      .optional()
      .default('development'),
    NEXT_PUBLIC_MSW: z
      .enum(['enabled', 'disabled'])
      .optional()
      .default('disabled'),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_MSW: process.env.NEXT_PUBLIC_MSW,
  },
})
