import { useCallback } from 'react'
// type
import { TErrorHandlers } from 'config/interface'
// lib
import { AxiosError } from 'axios'
// error handler
import defaultQueryErrHandlers from '../config/defaultQueryErrHandlers'
import defaultMutationErrHandlers from '../config/defaultMutationErrHandlers'

const useApiError = (handlers?: TErrorHandlers) => {
  const handleQueryError = useCallback(
    (error: AxiosError) => {
      const httpStatus = error.response?.status || 0
      const handler = handlers || defaultQueryErrHandlers

      if (httpStatus) {
        handler[httpStatus](error)
      } else {
        defaultQueryErrHandlers.default(error)
      }
    },
    [handlers],
  )

  const handleMutationError = useCallback(
    (error: AxiosError, variables: unknown, context: unknown) => {
      const httpStatus = error.response?.status || 0
      const handler = handlers || defaultMutationErrHandlers

      if (httpStatus) {
        handler[httpStatus](error)
      } else {
        defaultMutationErrHandlers.default(error)
      }
    },
    [handlers],
  )

  return { handleQueryError, handleMutationError }
}

export default useApiError
