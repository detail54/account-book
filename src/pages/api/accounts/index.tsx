/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NextApiRequest, NextApiResponse } from 'next'
// lib
import { getCookie } from 'cookies-next'
import prisma from 'utils/prismaClient'
// type
import { IAccount, IAddAccount } from 'config/interface'

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
        const date = query.date as string

        if (!date) {
          res.status(500).json(new Error('not found "date" param'))
          res.end()
        }

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
            id: account.id,
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
      const addIncomesData: IAddAccount[] = body.data

      const addAccounts = async (index: number) => {
        const accountData: IAddAccount = addIncomesData[index]

        if (!accountData) {
          return
        }

        let category = await prisma.storeCategory.findUnique({
          where: {
            name: accountData.category,
          },
        })

        if (!category) {
          await prisma.storeCategory.create({
            data: {
              name: accountData.category,
            },
          })

          category = await prisma.storeCategory.findUnique({
            where: {
              name: accountData.category,
            },
          })
        }

        let store = await prisma.store.findUnique({
          where: {
            name: accountData.store,
          },
        })

        if (!store) {
          await prisma.store.create({
            data: {
              name: accountData.store,
              categoryId: category!.id,
            },
          })

          store = await prisma.store.findUnique({
            where: {
              name: accountData.store,
            },
          })
        }

        await prisma.account.create({
          data: {
            userId,
            paymentDt: new Date(accountData.paymentDt),
            categoryId: category!.id,
            storeId: store!.id,
            amount: Number(accountData.amount),
            memo: accountData.memo,
          },
        })

        addAccounts(index + 1)
      }

      try {
        await addAccounts(0)

        res.status(200)
        res.end()
      } catch (e) {
        res.status(500)
        res.end()
      }
    },
    PUT: async () => {
      const updateAccountData: IAccount = body.data
      let category = await prisma.storeCategory.findUnique({
        where: {
          name: updateAccountData.category,
        },
      })

      if (!category) {
        await prisma.storeCategory.create({
          data: {
            name: updateAccountData.category,
          },
        })

        category = await prisma.storeCategory.findUnique({
          where: {
            name: updateAccountData.category,
          },
        })
      }

      let store = await prisma.store.findUnique({
        where: {
          name: updateAccountData.store,
        },
      })

      if (!store) {
        await prisma.store.create({
          data: {
            name: updateAccountData.store,
            categoryId: category!.id,
          },
        })

        store = await prisma.store.findUnique({
          where: {
            name: updateAccountData.store,
          },
        })
      }

      try {
        await prisma.account.update({
          where: {
            id: updateAccountData.id,
          },
          data: {
            paymentDt: new Date(updateAccountData.paymentDt),
            storeId: store!.id,
            categoryId: category!.id,
            amount: updateAccountData.amount,
            memo: updateAccountData.memo,
          },
        })

        res.status(200)
        res.end()
      } catch (e) {
        res.status(500)
        res.end()
      }
    },
    DELETE: async () => {
      const deleteAccountId: string = body

      try {
        await prisma.account.delete({
          where: {
            id: deleteAccountId,
          },
        })

        res.status(200)
        res.end()
      } catch (e) {
        res.status(500)
        res.end()
      }
    },
  }

  handler[apiMethod]()
}
