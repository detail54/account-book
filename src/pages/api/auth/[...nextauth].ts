/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from 'utils/prismaClient'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'account-book-login',
      credentials: {
        userName: {
          label: 'Username',
          type: 'text',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: {
            userName: credentials?.userName,
          },
        })
        console.log('user:::', user)
        if (user) return user

        return user || null
      },
    }),
  ],
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
      console.log('session:::', session)
      return session
    },
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
  pages: {
    signIn: '/login',
    signOut: '/',
  },
})
