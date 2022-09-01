import { IDashBoard } from '../config/interface'
import API_URL from '../config/urls'
import { useQuery } from './useReactQuery'

const useDashBoard = () => {
  const getDashBoardData = (date: string) => {
    return useQuery<IDashBoard>(
      API_URL.DASH_BOARD,
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
    getDashBoardData,
  }
}

export default useDashBoard
