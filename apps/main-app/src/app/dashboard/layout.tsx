import { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@myturbostack/auth/options'

export default async function LayoutPrivate({
  children,
}: {
  children: ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/')
  }

  return <>{children}</>
}
