export { default } from 'next-auth/middleware'

export const config = {
  // https://next-auth.js.org/tutorials/securing-pages-and-api-routes#nextjs-middleware
  // https://nextjs.org/docs/pages/building-your-application/routing/middleware#matcher
  matcher: ['/admin/:path*', '/dashboard/:path*'],
}
