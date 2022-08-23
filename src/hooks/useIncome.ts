import { IInCome } from '../config/interface'
import API_URL from '../config/urls'
import { useQuery } from './useReactQuery'

const useIncome = () => {
  const getIncome = (date: string) => {
    return useQuery<IInCome[]>(API_URL.INCOME, { date })
  }

  return {
    getIncome,
  }
}

export default useIncome
