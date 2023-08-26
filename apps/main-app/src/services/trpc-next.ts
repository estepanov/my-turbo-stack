import type { AppRouter } from 'trpc-api'
import { createTRPCNext } from '@trpc/next'
import { commonSettings } from './trpc-config'

export const api = createTRPCNext<AppRouter>({
  config() {
    return commonSettings
  },
  ssr: false,
})

export { type RouterInputs, type RouterOutputs } from 'trpc-api'
