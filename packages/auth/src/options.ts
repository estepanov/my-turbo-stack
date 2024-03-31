import type { AuthOptions } from 'next-auth'
import { env } from './env'

export const authOptions: AuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  providers: [],
}
