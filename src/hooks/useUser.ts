import api from 'utils/axios'
import { UseMutationResult } from 'react-query'
import { AxiosError, AxiosResponse } from 'axios'
import API_URL from './config/urls'
import { useMutation } from './useReactQuery'

const useUserMutation = <T, S>(
  url: string,
  params?: object,
): UseMutationResult<AxiosResponse, AxiosError, T | S> => {
  return useMutation<T, S>(
    url,
    (data) => api.post<S>(url, { data, params }),
    params,
  )
}

const useUser = () => {
  const addUser = () => {
    return useUserMutation(API_URL.USERS)
  }

  return {
    addUser,
  }
}

export default useUser
