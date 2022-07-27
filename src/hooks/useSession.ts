import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import api from '../utils/axios'
import API_URL from './config/urls'

export const fetchSession = async () => {
  const res = await api.get(API_URL.SESSION)
  const { data: session } = res

  if (Object.keys(session).length) {
    return session
  }

  return null
}

export const useSession = (required?: boolean) => {
  const router = useRouter()
  const redirect = '/'
  const query = useQuery([API_URL.SESSION], fetchSession, {
    onSettled(data) {
      if (data || !required) return
      router.push(redirect)
    },
  })

  return query
}
