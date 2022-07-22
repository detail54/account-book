import type { NextPage } from 'next'
import { useSession } from 'hooks/useSession'

const Home: NextPage = () => {
  const [session, loading] = useSession()

  if (loading) {
    return <>Loading...</>
  }

  if (!session) return <></>

  return <>Main</>
}

export default Home
