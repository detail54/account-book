import { signIn, signOut } from 'next-auth/react'
import type { NextPage } from 'next'
import { useSession } from 'hooks/useSession'

const Home: NextPage = () => {
  const [session, loading] = useSession()

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button type='button' onClick={() => signOut()}>
          Sign out
        </button>
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <button type='button' onClick={() => signIn()}>
        Sign in
      </button>
    </>
  )
}

export default Home
