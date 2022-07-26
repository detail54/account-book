import UserForm, { TChangeValueType } from 'components/templates/form/UserForm'
import { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
import Wrap from './Login.styles'

const Login: NextPage = () => {
  const [userInfo, setUserInfo] = useState({
    userName: '',
    password: '',
  })

  const login = async () => {
    const response = await signIn('account-book-login', {
      userName: userInfo.userName,
      password: userInfo.password,
      redirect: false,
    })
    console.log('response:::')
  }

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: TChangeValueType,
  ) => {
    if (type === 'userName') {
      setUserInfo({
        ...userInfo,
        userName: e.currentTarget.value,
      })
    } else {
      setUserInfo({
        ...userInfo,
        password: e.currentTarget.value,
      })
    }
  }

  return (
    <Wrap>
      <UserForm
        userName={userInfo.userName}
        password={userInfo.password}
        onChange={onChange}
        onSubmit={login}
      />
    </Wrap>
  )
}

export default Login
