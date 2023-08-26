import { WithTRPCConfig } from '@trpc/next'
import superjson from 'superjson'
import { AppRouter } from 'trpc-api'
import { httpLink, loggerLink } from '@trpc/client'

const PORT = process.env.PORT || 3000

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return '' // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}` // SSR should use vercel url

  return `http://localhost:${PORT}` // dev SSR should use localhost
}

export const commonSettings: WithTRPCConfig<AppRouter> = {
  transformer: superjson,
  links: [
    loggerLink({
      enabled: (opts) =>
        process.env.NODE_ENV === 'development' ||
        (opts.direction === 'down' && opts.result instanceof Error),
    }),
    httpLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
}
