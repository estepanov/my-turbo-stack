'use client'
import { log } from '@myturbostack/logger'
import { HeroDemo } from '@myturbostack/ui'
import { Link } from 'react-daisyui'
import NextLink from 'next/link'
import { TRpcReactQueryProvider, trpc } from '../services/trpc-react'
import { env } from '../env/client'

const Page = () => {
  log('Hey! This is Home.')
  const api = trpc.post.all.useQuery()
  return (
    <>
      <HeroDemo
        actions={
          <>
            <Link
              className='btn mx-1'
              color='primary'
              href='https://myturbostack.dev/'
            >
              Documentation
            </Link>
            <NextLink href='/dashboard' className='btn btn-primary mx-1'>
              User Dashboard
            </NextLink>
          </>
        }
      />
      <div>
        {(api?.isLoading || api?.isFetching) && (
          <p className='text-white'>loading</p>
        )}
        {api?.isError && (
          <p className='text-error'>error: {api.error?.data?.httpStatus}</p>
        )}
        {api?.data && (
          <pre className='text-red'>{JSON.stringify(api.data)}</pre>
        )}
      </div>
    </>
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
