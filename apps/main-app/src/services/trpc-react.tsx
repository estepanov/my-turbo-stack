'use client'
import type { AppRouter } from 'trpc-api'
import { createTRPCReact } from '@trpc/react-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode, useState } from 'react'
import { commonSettings } from './trpc-config'

export const trpc = createTRPCReact<AppRouter>()

const Provider = trpc.Provider

export const TRpcReactQueryProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() => trpc.createClient(commonSettings))

  return (
    <Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  )
}

export { type RouterInputs, type RouterOutputs } from 'trpc-api'
