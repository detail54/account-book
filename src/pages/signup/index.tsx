import React, { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
// type
import { IUserInfo, TChangeValueType } from 'components/templates/form/UserForm'
// hook
import useUser from 'hooks/useUser'
import { validationMsg } from 'config/messages'
// style
import Wrap from '../../styles/pages/SignUp.styles'
// component
const Text = dynamic(() => import('components/atoms/text/Text'))
const UserForm = dynamic(() => import('components/templates/form/UserForm'))

const SignUp: NextPage = () => {
  const [errorMsg, setErrorMsg] = useState<string | undefined>()
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    userName: '',
    password: '',
    passwordCheck: '',
  })

  const router = useRouter()
  const { addUser } = useUser()
  const addUserMutation = addUser()

  const signUp = async () => {
    if (!userInfo.userName) {
      setErrorMsg(validationMsg.ERROR_BLANKED_ID)
      return
    }

    if (!userInfo.password) {
      setErrorMsg(validationMsg.ERROR_BLANKED_PW)
      return
    }

    if (!userInfo.passwordCheck) {
      setErrorMsg(validationMsg.ERROR_BLANKED_PWCHECK)
      return
    }

    if (userInfo.password !== userInfo.passwordCheck) {
      setErrorMsg(validationMsg.ERROR_DIFFERENT_PWCHECK)
      return
    }

    try {
      await addUserMutation.mutateAsync({
        userName: userInfo.userName,
        password: userInfo.password,
      })
      router.push('/signin')
    } catch (e) {
      setErrorMsg('error')
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
      <Text text='회원가입' paddingY='xl' type='BoldText' fontSize='xxl' />
      <UserForm
        type='회원가입'
        userInfo={userInfo}
        onChange={onChange}
        onSubmit={signUp}
        error={errorMsg}
      />
    </Wrap>
  )
}

export default SignUp
