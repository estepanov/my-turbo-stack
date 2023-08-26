import { getServerSession } from '..'

describe('auth', () => {
  it('resolves with an id', async () => {
    const session = await getServerSession({ sessionId: '123' })
    expect(session).toEqual({ id: '123123' })
  })
})
