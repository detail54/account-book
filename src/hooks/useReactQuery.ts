import { AxiosError, AxiosResponse } from 'axios'
import {
  useQuery as useQueryOrigin,
  UseQueryOptions,
  UseQueryResult,
  useMutation as useMutationOrigin,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
  dehydrate,
  QueryFunctionContext,
} from 'react-query'
import queryClient from 'utils/reactQuery'
import { TErrorHandlers } from 'config/interface'
import useApiError from './useApiError'
import api from '../utils/axios'

export type TQueryKey = [string, object | undefined]
export type TQueryErr = (err: AxiosError) => void
export type TMutationErr = (
  error: AxiosError,
  variables: unknown,
  context: unknown,
) => void | Promise<unknown>

export const fetcher = async <T>({
  queryKey,
  pageParam,
}: Omit<QueryFunctionContext<TQueryKey>, 'meta'>): Promise<T> => {
  const [url, params] = queryKey
  const { data } = await api.get<T>(url, { params: { ...params, pageParam } })

  return data
}

export const usePrefetchQuery = async <T>(url: string, params?: object) => {
  await queryClient.prefetchQuery<T, AxiosError, T, TQueryKey>(
    [url, params],
    ({ queryKey }) => fetcher({ queryKey }),
  )

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  }
}

export const useQuery = <T>(
  url: string,
  params?: object,
  onError?: TQueryErr,
  errorHandlers?: TErrorHandlers,
  options?: Omit<
    UseQueryOptions<T, AxiosError, T, TQueryKey>,
    'queryKey' | 'onError'
  >,
): UseQueryResult<T, AxiosError> => {
  const { handleQueryError } = useApiError(errorHandlers)

  return useQueryOrigin<T, AxiosError, T, TQueryKey>(
    [url, params],
    ({ queryKey }) => fetcher({ queryKey }),
    {
      enabled: !!url,
      onError: onError || handleQueryError,
      useErrorBoundary: !onError,
      ...options,
    },
  )
}

export const useMutation = <T, S>(
  mutationData: {
    url: string
    params?: object
    updater?: (oldData: T, newData: S) => T
    onError?: TMutationErr
    errorHandlers?: TErrorHandlers
    options?: Omit<
      UseMutationOptions<AxiosResponse, AxiosError, T | S>,
      'mutationFn' | 'onMutate' | 'onSettled' | 'onError'
    >
  },
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE',
): UseMutationResult<AxiosResponse, AxiosError, T | S> => {
  const { url, params, updater, onError, errorHandlers, options } = mutationData
  const { handleMutationError } = useApiError(errorHandlers)

  const client = useQueryClient()

  const mutationFn = (data: T | S) => {
    switch (method) {
      case 'PUT':
        return api.put<S>(url, { data, params })
      case 'PATCH':
        return api.patch<S>(url, { data, params })
      default:
        return api.post<S>(url, { data, params })
    }
  }

  return useMutationOrigin<AxiosResponse, AxiosError, T | S>(
    (data) => mutationFn(data),
    {
      onMutate: async (data) => {
        await client.cancelQueries([url, params])

        const previousData = client.getQueriesData([url, params])

        client.setQueriesData<T>([url, params], (oldData) => {
          return updater && oldData ? updater(oldData, data as S) : (data as T)
        })

        return previousData
      },
      onError: onError || handleMutationError,
      onSettled: async () => {
        await client.invalidateQueries()
      },
      ...options,
    },
  )
}
