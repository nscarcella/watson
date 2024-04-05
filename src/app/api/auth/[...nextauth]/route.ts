import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

export const options = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
}

export const handler = NextAuth(options)

export {
  handler as GET,
  handler as POST,
}