import { NextPage } from 'next'
import React from 'react'
import { signIn } from 'next-auth/react'
import Button from 'components/atoms/button/Button'

const SessionTimeout: NextPage = () => {
  return (
    <div>
      session-timeout
      <Button content='로그인' size='md' onClick={signIn} />
    </div>
  )
}

export default SessionTimeout
