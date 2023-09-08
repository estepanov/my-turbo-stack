import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Storybook dev demo',
    description: (
      <>
        View the storybook dev demo live on:{' '}
        <a href='https://storybook.myturbostack.dev/'>
          https://storybook.myturbostack.dev/
        </a>{' '}
        (static site)
      </>
    ),
  },
  {
    title: 'main app dev demo',
    description: (
      <>
        View the main app live on:{' '}
        <a href='https://main-app.myturbostack.dev'>
          https://main-app.myturbostack.dev
        </a>{' '}
        (full stack site)
      </>
    ),
  },
  {
    title: 'this documenation site',
    description: <>React based Docusaurus (static site)</>,
  },
]

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
