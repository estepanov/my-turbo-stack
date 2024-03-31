import { Hero } from 'react-daisyui'
import { NewTabLink } from '../NewTabLink'
import { ReactNode } from 'react'

export const HeroDemo = ({ actions }: { actions?: ReactNode }) => {
  return (
    <Hero
      className='bg-center bg-cover bg-no-repeat bg-fixed bg-opacity-50 min-h-[100vh]'
      style={{
        backgroundImage:
          'url(https://source.unsplash.com/random/800x600?nature)',
      }}
    >
      <Hero.Overlay />
      <Hero.Content className='text-center'>
        <div className='space-y-12 max-w-2xl'>
          <h1 className='text-5xl font-bold drop-shadow-lg shadow-white'>
            my{' '}
            <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary'>
              turbo stack
            </span>
          </h1>

          <p className='max-w-md p-4 bg-secondary/80 text-secondary-content rounded-box'>
            <span className='block font-extrabold mb-2'>Built With</span>
            <NewTabLink href='https://turbo.build/repo'>
              Turborepo
            </NewTabLink> +{' '}
            <NewTabLink href='https://nextjs.org/'>Next.js</NewTabLink> +{' '}
            <NewTabLink href='https://authjs.dev/'>Auth.js</NewTabLink> +{' '}
            <NewTabLink href='https://trpc.io/'>trpc</NewTabLink> +{' '}
            <NewTabLink href='https://tailwindcss.com/'>tailwindcss</NewTabLink>{' '}
            + <NewTabLink href='https://daisyui.com/'>Daisyui</NewTabLink>
          </p>
          <div className='flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 justify-center items-center'>
            {actions}
          </div>
        </div>
      </Hero.Content>
    </Hero>
  )
}
