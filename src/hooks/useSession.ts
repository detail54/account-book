import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import api from '../utils/axios'
import API_URL from './api/urls'

export const fetchSession = async () => {
  const res = await api.get(API_URL.SESSION)
  const { data: session } = res

  if (Object.keys(res).length) {
    return session
  }

  return null
}

export const useSession = () => {
  const router = useRouter()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const redirect = process.env.NEXTAUTH_URL!
  const query = useQuery([API_URL.SESSION], fetchSession, {
    onSettled(data) {
      if (data) return
      router.push(redirect)
    },
  })

  return [query.data, query.status === 'loading']
}
