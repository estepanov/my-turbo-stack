import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from '..'

describe('auth', () => {
  it('resolves with an id', async () => {
    const mockReq = {} as NextApiRequest
    const mockRes = {} as NextApiResponse
    const session = await getServerSession({ req: mockReq, res: mockRes })
    expect(session).toEqual({ id: '123' })
  })
})
