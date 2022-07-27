import React, { useState } from 'react'
import { NextPage } from 'next'
import Text from 'components/atoms/text/Text'
import UserForm, {
  IUserInfo,
  TChangeValueType,
} from 'components/templates/form/UserForm'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'
import { validationMsg } from 'hooks/config/messages'
import Wrap from './SignUp.styles'

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
        accounts: {},
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
