import API_URL from './config/urls'
import { TMutationErr, usePostMutation } from './useReactQuery'

const useUser = () => {
  const addUser = (onError?: TMutationErr) => {
    return usePostMutation(API_URL.USERS, undefined, undefined, onError)
  }

  return {
    addUser,
  }
}

export default useUser
