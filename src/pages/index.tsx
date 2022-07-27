import type { NextPage } from 'next'
import { useSession } from 'hooks/useSession'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const { data: session, isLoading } = useSession()

  if (isLoading) {
    return <>Loading...</>
  }

  if (!session) return <></>

  return <>Main</>
}

export default Home
