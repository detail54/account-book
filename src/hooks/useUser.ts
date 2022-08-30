import { IAddUser } from 'config/interface'
import { useMutation } from './useReactQuery'
import API_URL from '../config/urls'

const useUser = () => {
  const addUser = () => {
    return useMutation<IAddUser, IAddUser>(API_URL.USERS)
  }

  return {
    addUser,
  }
}

export default useUser
