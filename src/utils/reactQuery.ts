import { QueryClient } from 'react-query'

export default new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: 1000 * 60 * 2,
      cacheTime: 1000 * 60 * 5,
    },
  },
})
