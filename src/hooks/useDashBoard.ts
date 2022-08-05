import { IDashBoard } from './config/interface'
import API_URL from './config/urls'
import { useQuery } from './useReactQuery'

const useDashBoard = () => {
  const getDashBoardData = () => {
    return useQuery<IDashBoard>(API_URL.DASH_BOARD)
  }

  return {
    getDashBoardData,
  }
}

export default useDashBoard
