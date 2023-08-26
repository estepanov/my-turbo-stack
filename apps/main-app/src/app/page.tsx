'use client'
import { log } from 'logger'
import { CounterButton, NewTabLink } from 'ui'
import { TRpcReactQueryProvider, trpc } from '../services/trpc-react'

const Page = () => {
  log('Hey! This is Home.')
  const api = trpc.post.all.useQuery()
  return (
    <div className='container'>
      <h1 className='title'>
        Store <br />
        <span>Kitchen Sink</span>
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
        <p className='description'>{api.data.session.toString()}</p>
      )}
    </div>
  )
}

if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
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
