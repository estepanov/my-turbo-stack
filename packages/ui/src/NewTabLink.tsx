import * as React from 'react'
export const NewTabLink = ({
  children,
  href,
  ...other
}: {
  children: React.ReactNode
  href: string
}) => {
  return (
    <a
      target='_blank'
      className='underline underline-offset-2 hover:underline-offset-4 font-bold transition-all'
      rel='noreferrer'
      href={href}
      {...other}
    >
      {children}
    </a>
  )
}
