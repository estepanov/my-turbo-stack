import { createTRPCMsw } from 'msw-trpc'
import SuperJSON from 'superjson'
import type { AppRouter } from 'trpc-api'

export const trpcMsw = createTRPCMsw<AppRouter>({
  transformer: {
    input: SuperJSON,
    output: SuperJSON,
  },
})
