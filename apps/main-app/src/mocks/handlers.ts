import { trpcMsw } from './trpc-msw'

export const handlers = [
  trpcMsw.post.all.query((req, res, ctx) => {
    return res(ctx.status(200), ctx.data({ session: [0, 0, 0, 0, 0, 0, 0] }))
  }),
]
