export type Session = {
  id: string
}

interface SessionParams {
  sessionId?: string
}

export const getServerSession = async ({
  sessionId,
}: SessionParams): Promise<Session> => {
  return Promise.resolve({
    id: '123' + sessionId,
  })
}
