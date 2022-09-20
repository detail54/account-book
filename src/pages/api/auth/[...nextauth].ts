/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from 'utils/prismaClient'
import { validationMsg } from 'config/messages'
import jwt, { JwtPayload } from 'jsonwebtoken'

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
        console.log('authhihihihihihi')

        if (!user) throw new Error(validationMsg.ERROR_NOT_EXIST_ID)
        if (user) {
          if (user.password !== credentials?.password) {
            throw new Error(validationMsg.ERROR_DIFFERENT_PW)
          } else {
            return {
              id: user.id,
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
    encode: async ({ secret, token }) => {
      const encodedToken = jwt.sign(token!, secret)

      return encodedToken
    },
    decode: async ({ secret, token }) => {
      const verify = jwt.verify(token!, secret) as JwtPayload

      return verify
    },
  },
  session: {
    maxAge: 60 * 5,
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token
        token.id = user?.id
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      session.id = token.id

      return session
    },
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
  pages: {
    signIn: '/signin',
    signOut: '/signin',
    error: '/signin',
  },
  events: {},
})
