/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react'
import { NextPage } from 'next'
import UserForm, {
  IUserInfo,
  TChangeValueType,
} from 'components/templates/form/UserForm'
import { signIn } from 'next-auth/react'
import Text from 'components/atoms/text/Text'
import Wrap from './SignIn.styles'

const SingIn: NextPage = () => {
  const [errorMsg, setErrorMsg] = useState<string | undefined>()
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    userName: '',
    password: '',
  })

  const login = async () => {
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
      <Text text='로그인' paddingY='xl' type='BoldText' fontSize='xxl' />
      <UserForm
        userInfo={userInfo}
        onChange={onChange}
        onSubmit={login}
        error={errorMsg}
      />
    </Wrap>
  )
}

export default SingIn
