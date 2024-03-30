import { Hero, Link } from 'react-daisyui'
import { CounterButton } from '../CounterButton'
import { NewTabLink } from '../NewTabLink'

export const HeroDemo = () => {
  return (
    <Hero
      className='bg-center bg-cover bg-no-repeat bg-fixed bg-opacity-50 min-h-[80vh]'
      style={{
        backgroundImage:
          'url(https://source.unsplash.com/random/800x600?nature)',
      }}
    >
      <Hero.Overlay />
      <Hero.Content className='text-center'>
        <div className='max-w-md space-y-8'>
          <h1 className='text-5xl font-bold'>
            my{' '}
            <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary'>
              turbo stack
            </span>
          </h1>

          <CounterButton />

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
          <Link className='btn' color='primary' href='/'>
            Get Started
          </Link>
        </div>
      </Hero.Content>
    </Hero>
  )
}
