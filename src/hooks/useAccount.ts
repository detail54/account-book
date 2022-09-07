import { IAccount, IAddAccount } from 'config/interface'
import API_URL from '../config/urls'
import { useMutation, useQuery } from './useReactQuery'

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

  const addAccounts = () => {
    return useMutation<IAddAccount[], IAddAccount[]>(API_URL.ACCOUNTS)
  }

  return {
    getAccount,
    addAccounts,
  }
}

export default useAccount
