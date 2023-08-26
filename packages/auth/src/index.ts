import { type NextApiRequest, type NextApiResponse } from 'next'

export type Session = {
  id: string
}

interface GetServerSessionParams {
  req: NextApiRequest
  res: NextApiResponse
}

export const getServerSession = async ({ req, res }: GetServerSessionParams): Promise<Session> => {
  return Promise.resolve({
    id: '123',
  })
}
