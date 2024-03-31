import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { server } from '../mocks/server'
import { trpcMsw } from '../mocks/trpc-msw'
import Page from './page'

describe('Page', () => {
  it('should render successfully', async () => {
    const result = [0, 1, 2, 1, 0, 1, 2]
    server.use(
      trpcMsw.post.all.query((req, res, ctx) => {
        return res(ctx.status(200), ctx.data({ session: result }))
      }),
    )
    const { getByText } = render(<Page />)
    getByText('loading')
    await waitFor(() => {
      expect(getByText(result.toString())).toBeTruthy()
    })
  })
})
