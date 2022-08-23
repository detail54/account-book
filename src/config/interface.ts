// db 스키마
export interface IStoreCategory {
  name: string
  stores: IStore[]
  accounts: IAccount[]
}

export interface IStore {
  category: IStoreCategory
  name: string
  accounts: IAccount[]
}

export interface IAccount {
  id: number
  user: IUser
  store: IStore
  category: IStoreCategory
  amount: number
  memo?: string
  regDt: string
  updatedDt: string
  paymentDt: string
}

export interface IInCome {
  id: number
  user: IUser
  amount: number
  memo?: string
  regDt: string
  updatedDt: string
  incomeDt: string
}

export interface IUser {
  userName: string
  password: string
  accounts: IAccount[]
  regDt: string
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
