import { AxiosError } from 'axios'

// 에러 핸들러
export type TErrorHandlers = Record<
  number | string,
  (error: AxiosError) => void
>

// db 스키마
export interface IApiStoreCategory {
  name: string
  stores: IApiStore[]
  accounts: IApiAccount[]
}

export interface IApiStore {
  category: IApiStoreCategory
  name: string
  accounts: IApiAccount[]
}

export interface IApiAccount {
  id: number
  user: IApiUser
  store: IApiStore
  category: IApiStoreCategory
  amount: number
  memo?: string
  regDt: Date
  updatedDt: Date
  paymentDt: Date
}

export interface IApiInCome {
  id: number
  user: IApiUser
  amount: number
  memo?: string
  regDt: Date
  updatedDt: Date
  incomeDt: Date
}

export interface IApiUser {
  userName: string
  password: string
  accounts: IApiAccount[]
  regDt: Date
}

// income
export interface IIncome {
  amount: number
  memo?: string
  incomeDt: Date
}

// account
export interface IAccount {
  store: string
  category: string
  amount: number
  memo?: string
  paymentDt: Date
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
