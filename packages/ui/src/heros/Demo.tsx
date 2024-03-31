import { Hero } from 'react-daisyui'
import { ReactNode } from 'react'
import { NewTabLink } from '../NewTabLink'

export const HeroDemo = ({ actions }: { actions?: ReactNode }) => {
  return (
    <Hero>
      <Hero.Overlay
        className='bg-center bg-cover bg-no-repeat opacity-30 bg-fixed min-h-[100vh]'
        style={{
          backgroundImage:
            'url(https://source.unsplash.com/random/800x600?nature)',
        }}
      />
      <Hero.Content className='text-center'>
        <div className='space-y-12 max-w-2xl justify-center items-center flex flex-col'>
          <h1 className='text-5xl font-bold drop-shadow-lg shadow-white'>
            my{' '}
            <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary'>
              turbo stack
            </span>
          </h1>

          <div className='text-xl font-bold max-w-md'>
            <div className=''>
              The last full-stack{' '}
              <span className='text-accent'>TypeScript</span> boilerplate
              you&apos;ll ever need.
            </div>
          </div>

          <p className='max-w-lg p-6 bg-accent/80 text-accent-content rounded-box'>
            <span className='italic'>Built with</span>{' '}
            <NewTabLink href='https://turbo.build/repo'>Turborepo</NewTabLink>,{' '}
            <NewTabLink href='https://nextjs.org/'>Next.js</NewTabLink>,{' '}
            <NewTabLink href='https://authjs.dev/'>Auth.js</NewTabLink>,{' '}
            <NewTabLink href='https://trpc.io/'>trpc</NewTabLink>,{' '}
            <NewTabLink href='https://mswjs.io/'>msw</NewTabLink>,{' '}
            <NewTabLink href='https://tailwindcss.com/'>tailwindcss</NewTabLink>
            , <NewTabLink href='https://daisyui.com/'>Daisyui</NewTabLink>, and{' '}
            <NewTabLink href='https://react-icons.github.io/react-icons/'>
              react-icons
            </NewTabLink>
          </p>

          <div className='text-xl font-bold max-w-md'>
            <div className=''>
              All this and it is{' '}
              <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary'>
                100% free.
              </span>
            </div>
          </div>

          <div className='flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 justify-center items-center'>
            {actions}
          </div>
        </div>
      </Hero.Content>
    </Hero>
  )
}
