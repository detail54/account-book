import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'utils/prismaClient'

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log('userhihihihihihi')
  const { body, headers, query, method } = req

  const apiMethod = method || 'GET'

  const handler: { [key: string]: () => void } = {
    GET: async () => {
      try {
        const data = await prisma.user.findMany()
        res.status(200).json(data)
        res.end()
      } catch (e) {
        res.status(500).json(e)
        res.end()
      }
    },
    POST: async () => {
      try {
        const data = await prisma.user.create({
          data: body.data,
        })
        res.status(200).json(data.userName)
        res.end()
      } catch (e) {
        res.status(500).json(e)
        res.end()
      }
    },
  }

  handler[apiMethod]()
}
