interface IApiUrl {
  USERS: string
  ACCOUNTS: string
  INCOME: string
  STORES: string
  STORE_CATEGORYS: string
  DASH_BOARD: string
}

const API_URL: Readonly<IApiUrl> = {
  USERS: 'users',
  ACCOUNTS: 'accounts',
  INCOME: 'incomes',
  STORES: 'stores',
  STORE_CATEGORYS: 'store-categorys',
  DASH_BOARD: 'dashboard',
}

export default API_URL
