import { getCookie } from 'cookies-next'
import { IDashBoard } from 'config/interface'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'utils/prismaClient'

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
        const [year, month] = date.split('-')
        const lastDate = new Date(
          Number(year),
          Number(month),
          0,
          23,
          59,
          59,
          999,
        )
        const firstDate = new Date(
          lastDate.getFullYear(),
          lastDate.getMonth() - 1,
          1,
        )

        const accountDatas = await prisma.account.findMany({
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

        const incomeDatas = await prisma.income.findMany({
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

        const initResultData: IDashBoard = {
          list: [],
          totalIncome: 0,
          totalExpenditure: 0,
        }
        const resultData: IDashBoard = Array.from(
          { length: lastDate.getDate() },
          (v, i) => i + 1,
        ).reduce((acc, cur) => {
          const data = accountDatas.filter(
            (account) => account.paymentDt.getDate() === cur,
          )

          const returnDate = `${date}-${cur < 10 ? `0${cur}` : cur}`
          if (data) {
            const totalIncome = incomeDatas
              .filter((income) => income.incomeDt.getDate() === cur)
              .reduce((_acc, _cur) => {
                return _acc + _cur.amount
              }, 0)
            const totalExpenditure = data.reduce((_acc, _cur) => {
              return _acc + _cur.amount
            }, 0)

            return {
              ...acc,
              list: [
                ...acc.list,
                {
                  date: returnDate,
                  income: totalIncome,
                  expenditure: totalExpenditure,
                },
              ],
              totalIncome: acc.totalIncome + totalIncome,
              totalExpenditure: acc.totalExpenditure + totalExpenditure,
            }
          }

          return {
            ...acc,
            list: [
              ...acc.list,
              { date: returnDate, income: 0, expenditure: 0 },
            ],
          }
        }, initResultData)

        res.status(200).json(resultData)
        res.end()
      } catch (e) {
        res.status(500).json(e)
        res.end()
      }
    },
  }

  handler[apiMethod]()
}
