import { IAccount } from './config/interface'
import API_URL from './config/urls'
import { useQuery } from './useReactQuery'

const useAccount = () => {
  const getAccount = () => {
    return useQuery<IAccount[]>(API_URL.ACCOUNTS)
  }

  return {
    getAccount,
  }
}

export default useAccount
