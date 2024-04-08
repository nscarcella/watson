import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

export const OPTIONS = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
}

export const handler = NextAuth(OPTIONS)

export {
  handler as GET,
  handler as POST,
}