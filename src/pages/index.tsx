import useUser from 'hooks/useUser'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { getUsers } = useUser()
  const { data: usersData } = getUsers()
  return <>{usersData}</>
}

export default Home
