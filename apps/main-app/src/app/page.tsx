'use client'
import { log } from '@myturbostack/logger'
import { CounterButton, NewTabLink } from '@myturbostack/ui'
import { TRpcReactQueryProvider, trpc } from '../services/trpc-react'
import { env } from '../env/client'

const Page = () => {
  log('Hey! This is Home.')
  const api = trpc.post.all.useQuery()
  return (
    <div className='container'>
      <h1 className='title'>
        my <span>turbo stack</span>
      </h1>
      <CounterButton />
      <p className='description'>
        Built With{' '}
        <NewTabLink href='https://turbo.build/repo'>Turborepo</NewTabLink> +{' '}
        <NewTabLink href='https://nextjs.org/'>Next.js</NewTabLink>
      </p>
      {(api?.isLoading || api?.isFetching) && (
        <p className='description'>loading</p>
      )}
      {api?.isError && (
        <p className='description'>error: {api.error?.data?.httpStatus}</p>
      )}
      {api?.data && (
        <pre className='description'>{JSON.stringify(api.data)}</pre>
      )}
    </div>
  )
}

if (
  env.NEXT_PUBLIC_NODE_ENV === 'development' &&
  typeof window !== 'undefined' &&
  env.NEXT_PUBLIC_MSW === 'enabled'
) {
  const { worker } = require('../mocks/browser')
  worker.start()
}

export default function Home() {
  return (
    <TRpcReactQueryProvider>
      <Page />
    </TRpcReactQueryProvider>
  )
}
