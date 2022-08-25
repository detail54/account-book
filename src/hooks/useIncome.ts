import { IIncome } from '../config/interface'
import API_URL from '../config/urls'
import { useMutation, useQuery } from './useReactQuery'

const useIncome = () => {
  const getIncome = (date: string) => {
    return useQuery<IIncome[]>(API_URL.INCOME, { date })
  }

  const addIncome = (date: string) => {
    return useMutation<IIncome[], IIncome>(
      API_URL.POSTS,
      { date },
      (oldData: IIncome[], newData: IIncome) => [...oldData, newData],
    )
  }

  return {
    getIncome,
    addIncome,
  }
}

export default useIncome
