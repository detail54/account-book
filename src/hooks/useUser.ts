import { IUser } from './api/interface'
import API_URL from './api/urls'
import { TQueryErr, useQuery } from './useReactQuery'

const useUser = () => {
  const getUsers = (onError?: TQueryErr) => {
    return useQuery<IUser>(API_URL.USERS, undefined, onError)
  }

  return {
    getUsers,
  }
}

export default useUser
