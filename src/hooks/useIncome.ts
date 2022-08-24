import { IInCome } from '../config/interface'
import API_URL from '../config/urls'
import { useMutation, useQuery } from './useReactQuery'

const useIncome = () => {
  const getIncome = (date: string) => {
    return useQuery<IInCome[]>(API_URL.INCOME, { date })
  }

  const addIncome = (date: string) => {
    return useMutation<IInCome[], IInCome>(
      API_URL.POSTS,
      { date },
      (oldData: IInCome[], newData: IInCome) => [...oldData, newData],
    )
  }

  return {
    getIncome,
    addIncome,
  }
}

export default useIncome
