import { AxiosError } from 'axios'

// 에러 핸들러
export type TErrorHandlers = Record<
  number | string,
  (error: AxiosError) => void
>

// user
export interface IAddUser {
  userName: string
  password: string
}

// income
export interface IIncome {
  id: number
  amount: number
  memo?: string | null
  incomeDt: Date
}

export interface IAddIncome {
  amount: string
  memo: string
  incomeDt: string
}

// account
export interface IAccount {
  id: number
  store: string
  category: string
  amount: number
  memo?: string | null
  paymentDt: Date
}

export interface IAddAccount {
  store: string
  category: string
  amount: string
  memo: string
  paymentDt: string
}

// dashboard
export interface IDashBoard {
  list: {
    date: string
    income: number
    expenditure: number
  }[]
  totalIncome: number
  totalExpenditure: number
}
