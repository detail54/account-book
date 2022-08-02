import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'utils/prismaClient'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { body, headers, query, method } = req

  const apiMethod = method || 'GET'

  const handler: { [key: string]: () => void } = {
    GET: async () => {
      try {
        const data = await prisma.account.findUnique({
          where: {
            id: 1,
          },
        })
        res.status(200).json(data)
      } catch (e) {
        res.status(500).json(e)
      }
    },
    POST: async () => {
      try {
        const data = await prisma.account.create({
          data: body.data,
        })
        res.status(200).json(data)
      } catch (e) {
        res.status(500).json(e)
      }
    },
  }

  handler[apiMethod]()
}
