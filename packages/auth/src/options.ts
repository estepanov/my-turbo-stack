import { env } from './env'
import type { AuthOptions } from 'next-auth'

export const authOptions: AuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  providers: [],
}
