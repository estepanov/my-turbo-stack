import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter, createTRPCFetchContext } from 'trpc-api'

const handler = (request: Request) => {
  console.log(`incoming request ${request.url}`)
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    router: appRouter,
    createContext: createTRPCFetchContext,
  })
}

export { handler as GET, handler as POST }
