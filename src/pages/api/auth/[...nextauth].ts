/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from 'utils/prismaClient'
import { validationMsg } from 'hooks/config/messages'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        userName: {
          label: 'Username',
          type: 'text',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            userName: credentials?.userName,
          },
        })

        if (!user) throw new Error(validationMsg.ERROR_NOT_EXIST_ID)
        if (user) {
          if (user.password !== credentials?.password) {
            throw new Error(validationMsg.ERROR_DIFFERENT_PW)
          } else {
            // DefaultUser type 키값에 맞춰서 리턴시 token콜백에서 추가 작업 불필요.
            /**
             * {
             *   name
             *   email
             *   image
             * }
             */
            return {
              name: user.userName,
            }
          }
        }

        return null
      },
    }),
  ],
  jwt: {
    maxAge: 60 * 5,
  },
  session: {
    maxAge: 60 * 5,
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken

      return session
    },
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
  pages: {
    signIn: '/signin',
    signOut: '/signin',
    error: '/signin',
  },
})
