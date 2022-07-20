/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth'

export default NextAuth({
  providers: [],
  jwt: {
    maxAge: 60 * 30,
  },
  session: {
    maxAge: 60 * 30,
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken
      return session
    },
  },
})
