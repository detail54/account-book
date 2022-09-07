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
    return useMutation<IAddAccount[], IAddAccount[]>(
      {
        url: API_URL.ACCOUNTS,
      },
      'POST',
    )
  }

  const updateAccount = () => {
    return useMutation<IAccount, IAccount>(
      {
        url: API_URL.ACCOUNTS,
      },
      'PUT',
    )
  }

  return {
    getAccount,
    addAccounts,
    updateAccount,
  }
}

export default useAccount
