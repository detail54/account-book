import { getCookie } from 'cookies-next'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'utils/prismaClient'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { body, headers, query, method } = req
  const token = getCookie('next-auth.session-token', { req, res }) as string

  if (!token) {
    return
  }

  const base64Payload = token.split('.')[1]
  const payload = Buffer.from(base64Payload, 'base64')
  const userId = JSON.parse(payload.toString()).id

  const apiMethod = method || 'GET'

  const handler: { [key: string]: () => void } = {
    GET: async () => {
      try {
        const data = await prisma.account.findMany({
          where: {
            id: userId,
          },
        })

        res.status(200).json(data)
      } catch (e) {
        res.status(500).json(e)
      }
    },
  }

  handler[apiMethod]()
}
