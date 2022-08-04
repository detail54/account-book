import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { getCookie } from 'cookies-next'
// hook
import { useSession } from 'next-auth/react'
// style
import Wrap from './index.styles'

interface IProps {
  token: string
}

const Home: NextPage<IProps> = ({ token }) => {
  const router = useRouter()
  const { data: session } = useSession()

  useEffect(() => {
    if (token) sessionStorage.setItem('session-token', token)
  }, [])

  useEffect(() => {
    const sessionToken = sessionStorage.getItem('session-token')

    if (!session && sessionToken) router.push('session-timeout')
  }, [])

  return <Wrap>가계부</Wrap>
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie('next-auth.session-token', { req, res }) || ''

  return {
    props: {
      token,
    },
  }
}
