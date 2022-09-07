import { IAddIncome, IIncome } from 'config/interface'
import API_URL from '../config/urls'
import { useMutation, useQuery } from './useReactQuery'

const useIncome = () => {
  const getIncome = (date: string) => {
    return useQuery<IIncome[]>(API_URL.INCOME, { date }, undefined, undefined, {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    })
  }

  const addIncomes = () => {
    return useMutation<IAddIncome[], IAddIncome[]>(
      {
        url: API_URL.INCOME,
      },
      'POST',
    )
  }

  const updateIncome = () => {
    return useMutation<IIncome, IIncome>(
      {
        url: API_URL.INCOME,
      },
      'PUT',
    )
  }

  return {
    getIncome,
    addIncomes,
    updateIncome,
  }
}

export default useIncome
