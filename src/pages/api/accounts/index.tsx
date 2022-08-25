import { NextApiRequest, NextApiResponse } from 'next'
// lib
import { getCookie } from 'cookies-next'
import prisma from 'utils/prismaClient'
// interface
import { IAccount } from 'config/interface'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { body, headers, query, method } = req
  const token = getCookie('next-auth.session-token', { req, res }) as string
  const date = query.date as string

  if (!date) {
    res.status(500).json(new Error('not found "date" param'))
  }

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

        const data = await prisma.account.findMany({
          where: {
            userId,
            paymentDt: {
              gte: firstDate,
              lte: lastDate,
            },
          },
          select: {
            id: true,
            user: true,
            store: true,
            category: true,
            amount: true,
            memo: true,
            regDt: true,
            updatedDt: true,
            paymentDt: true,
          },
        })

        const resData: IAccount[] = data.map((account) => {
          return {
            store: account.store.name,
            category: account.store.name,
            amount: account.amount,
            memo: account.memo ? account.memo : undefined,
            paymentDt: account.paymentDt,
          }
        })

        res.status(200).json(resData)
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
