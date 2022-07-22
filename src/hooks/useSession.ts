import { useQuery } from 'react-query'
import { useRouter } from 'next/router'

export const fetchSession = async () => {
  const res = await fetch('/api/auth/session')
  const session = await res.json()
  if (Object.keys(session).length) {
    return session
  }
  return null
}

export const useSession = () => {
  const router = useRouter()
  const redirect = 'http://localhost:3000'
  const query = useQuery(['session'], fetchSession, {
    onSettled(data) {
      if (data) return
      router.push(redirect)
    },
    staleTime: 60 * 1000 * 30,
    refetchInterval: 60 * 1000 * 5,
  })

  return [query.data, query.status === 'loading']
}
