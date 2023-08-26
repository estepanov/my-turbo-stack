import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '../trpc'

export const postRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return { session: ctx.session ? [1, 2, 3, 4, 5] : [1, 2] }
  }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      return { id: input.id }
    }),
  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        content: z.string().min(1),
      }),
    )
    .mutation(({ input }) => {
      return { title: input.title, content: input.content }
    }),
  delete: publicProcedure.input(z.string()).mutation(({ input }) => {
    return { id: input }
  }),
})
