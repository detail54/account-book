import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import type { NextPage } from 'next'
import { getCookie } from 'cookies-next'
// style
import Wrap from './index.styles'

interface IProps {
  token: string
}

const Home: NextPage<IProps> = ({ token }) => {
  useEffect(() => {
    if (token) sessionStorage.setItem('session-token', token)
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
