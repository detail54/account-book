import { getCookie } from 'cookies-next'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'utils/prismaClient'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { body, headers, query, method } = req
  const token = getCookie('next-auth.session-token', { req, res }) as string
  const date = query.date as string

  const base64Payload = token.split('.')[1]
  const payload = Buffer.from(base64Payload, 'base64')
  const userId = JSON.parse(payload.toString()).id

  const apiMethod = method || 'GET'

  console.log('date:::', date)

  const handler: { [key: string]: () => void } = {
    GET: async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const [year, month, _date] = date.split('-')
        const firstDate = new Date(
          Number(year),
          Number(month) - 1,
          Number(_date),
          0,
          0,
          0,
          0,
        )
        const lastDate = new Date(
          Number(year),
          Number(month) - 1,
          Number(_date),
          23,
          59,
          59,
          999,
        )
        console.log('firstDate:::', firstDate)
        console.log('lastDate:::', lastDate)

        const data = await prisma.income.findMany({
          where: {
            userId,
            incomeDt: {
              gte: firstDate,
              lte: lastDate,
            },
          },
          select: {
            id: true,
            user: true,
            amount: true,
            memo: true,
            regDt: true,
            updatedDt: true,
            incomeDt: true,
          },
        })

        console.log('data:::', data)

        res.status(200).json(data)
        res.end()
      } catch (e) {
        res.status(500).json(e)
        res.end()
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
