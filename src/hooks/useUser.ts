import { IAddUser } from 'config/interface'
import { useMutation } from './useReactQuery'
import API_URL from '../config/urls'

const useUser = () => {
  const addUser = () => {
    return useMutation<IAddUser, IAddUser>(
      {
        url: API_URL.USERS,
      },
      'POST',
    )
  }

  return {
    addUser,
  }
}

export default useUser
