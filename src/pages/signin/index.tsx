/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
// type
import { IUserInfo, TChangeValueType } from 'components/templates/form/UserForm'
// lib
import { signIn } from 'next-auth/react'
// hook
import { validationMsg } from 'config/messages'
// style
import Wrap from './SignIn.styles'
// component
const Text = dynamic(() => import('components/atoms/text/Text'))
const UserForm = dynamic(() => import('components/templates/form/UserForm'))

const SingIn: NextPage = () => {
  const router = useRouter()
  const url = router.query.callbackUrl as string
  const lastPage = url && new URL(url).searchParams.get('page')
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
      const path = lastPage
        ? `${process.env.NEXT_PUBLIC_HOST}/${lastPage}`
        : `${process.env.NEXT_PUBLIC_HOST}/dashboard`

      router.push(path)
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
