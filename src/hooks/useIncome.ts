import { IAddIncome, IIncome } from '../config/interface'
import API_URL from '../config/urls'
import { useMutation, useQuery } from './useReactQuery'

const useIncome = () => {
  const getIncome = (date: string) => {
    return useQuery<IIncome[]>(API_URL.INCOME, { date })
  }

  const addIncomes = () => {
    return useMutation<IAddIncome[], IAddIncome[]>(API_URL.INCOME)
  }

  return {
    getIncome,
    addIncomes,
  }
}

export default useIncome
