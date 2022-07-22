import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import api from '../utils/axios'
import API_URL from './api/urls'

export const fetchSession = async () => {
  const res = await api.get(API_URL.SESSION)
  const { data: session } = res
  console.log('Api session::', session)
  if (Object.keys(session).length) {
    return session
  }

  return null
}

export const useSession = (required?: boolean) => {
  const router = useRouter()
  const redirect = '/api/auth/signin?error=SessionExpired'
  const query = useQuery([API_URL.SESSION], fetchSession, {
    onSettled(data) {
      console.log('settleData::', data)
      if (data || !required) return
      router.push(redirect)
    },
  })

  return [query.data, query.status === 'loading']
}
