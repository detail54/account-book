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
  user: IUser
  regDt: string
  updatedDt: string
  paymentDt: string
  category: IStoreCategory
  store: IStore
  amount: number
  memo?: string
}

export interface IUser {
  userName: string
  password: string
  accounts: IAccount[]
  regDt: string
}
