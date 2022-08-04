import { NextPage } from 'next'
import React, { useEffect } from 'react'
import { signIn } from 'next-auth/react'
import Button from 'components/atoms/button/Button'

const SessionTimeout: NextPage = () => {
  return (
    <div>
      session-timeout
      <Button text='로그인' size='md' onClick={signIn} />
    </div>
  )
}

export default SessionTimeout
