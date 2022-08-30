import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'utils/prismaClient'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { body, headers, query, method } = req

  const apiMethod = method || 'GET'
  console.log('body.data:::')

  const handler: { [key: string]: () => void } = {
    GET: async () => {
      try {
        const data = await prisma.user.findMany()
        res.status(200).json(data)
      } catch (e) {
        res.status(500).json(e)
      }
    },
    POST: async () => {
      try {
        const data = await prisma.user.create({
          data: body.data,
        })
        res.status(200).json(data.userName)
      } catch (e) {
        res.status(500).json(e)
      }
    },
  }

  handler[apiMethod]()
}
