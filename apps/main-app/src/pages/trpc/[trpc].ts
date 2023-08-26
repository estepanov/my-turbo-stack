import { appRouter, createTRPCContext } from 'trpc-api'
import { createNextApiHandler } from '@trpc/server/adapters/next'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return createNextApiHandler({
    router: appRouter,
    createContext: createTRPCContext,
  })(req, res)
}

export default handler
