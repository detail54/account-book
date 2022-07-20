import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'utils/prismaClient'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { body, headers, query, method } = req

  const apiMethod = method || 'GET'

  const handler: { [key: string]: () => void } = {
    GET: async () => {
      const data = await prisma.user.findMany()
      res.json(data)
    },
    POST: async () => {
      console.log('post hihi')
    },
  }

  handler[apiMethod]()
}
