'use client'
import { log } from '@myturbostack/logger'
import { HeroDemo } from '@myturbostack/ui'
import { PiBook, PiCoffee } from 'react-icons/pi'
import { Divider, Link } from 'react-daisyui'
import { trpc, TRpcReactQueryProvider } from '../services/trpc-react'
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
              className='btn btn-neutral mx-1 btn-wide'
              color='primary'
              href='https://myturbostack.dev/'
            >
              <PiBook className='text-2xl' /> Documentation
            </Link>
            <Divider responsive vertical>
              OR
            </Divider>
            <Link
              href='https://www.buymeacoffee.com/estepanov'
              className='btn btn-secondary mx-1 btn-wide'
            >
              Buy me a coffee <PiCoffee className='text-2xl' />
            </Link>
          </>
        }
      />
      <div>
        {(api?.isLoading || api?.isFetching) && (
          <p className='text-white'>loading</p>
        )}
        {api?.isError && (
          <p className='text-error'>error: {JSON.stringify(api.error?.data)}</p>
        )}
        {api?.data && (
          <pre className='text-secondary'>{JSON.stringify(api.data)}</pre>
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
