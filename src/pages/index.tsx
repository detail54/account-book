import type { NextPage } from 'next'
import { useSession } from 'hooks/useSession'

const Home: NextPage = () => {
  const { data: session } = useSession()

  if (!session) return <></>

  return <>Main</>
}

export default Home
