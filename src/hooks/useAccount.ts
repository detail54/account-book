import { IAccount } from '../config/interface'
import API_URL from '../config/urls'
import { useQuery } from './useReactQuery'

const useAccount = () => {
  const getAccount = (date: string) => {
    return useQuery<IAccount[]>(
      API_URL.ACCOUNTS,
      { date },
      undefined,
      undefined,
      {
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
      },
    )
  }

  return {
    getAccount,
  }
}

export default useAccount
