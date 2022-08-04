/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
// type
import { IUserInfo, TChangeValueType } from 'components/templates/form/UserForm'
// lib
import { signIn } from 'next-auth/react'
// hook
import { validationMsg } from 'hooks/config/messages'
// style
import Wrap from './SignIn.styles'
// component
const Text = dynamic(() => import('components/atoms/text/Text'))
const UserForm = dynamic(() => import('components/templates/form/UserForm'))

const SingIn: NextPage = () => {
  const [errorMsg, setErrorMsg] = useState<string | undefined>()
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    userName: '',
    password: '',
  })

  const login = async () => {
    if (!userInfo.userName) {
      setErrorMsg(validationMsg.ERROR_BLANKED_ID)
      return
    }

    if (!userInfo.password) {
      setErrorMsg(validationMsg.ERROR_BLANKED_PW)
      return
    }

    const result = await signIn('credentials', {
      userName: userInfo.userName,
      password: userInfo.password,
      redirect: false,
    })

    if (result?.error) {
      setErrorMsg(result.error)
    } else {
      // 커스텀 로그인의 경우 새로고침을 해야 세션 정상 반영되어 루트경로로 리다이렉트 시킴.
      window.location.href = process.env.NEXT_PUBLIC_HOST!
    }
  }

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: TChangeValueType,
  ) => {
    setUserInfo({
      ...userInfo,
      [type]: e.currentTarget.value,
    })
  }

  return (
    <Wrap>
      <Text text='로그인' paddingY='xl' type='BoldText' fontSize='xxl' />
      <UserForm
        type='로그인'
        userInfo={userInfo}
        onChange={onChange}
        onSubmit={login}
        error={errorMsg}
      />
    </Wrap>
  )
}

export default SingIn
