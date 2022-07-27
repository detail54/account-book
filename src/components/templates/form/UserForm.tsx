/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useRef } from 'react'
// components
import Text from 'components/atoms/text/Text'
import Input from 'components/atoms/input/Input'
import Button from 'components/atoms/button/Button'
// styles
import Form from './UserForm.styles'

export type TChangeValueType = 'userName' | 'password' | 'passwordCheck'

export interface IUserInfo {
  userName: string
  password: string
  passwordCheck?: string
}
interface IProps {
  userInfo: IUserInfo
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: TChangeValueType,
  ) => void
  onSubmit: () => void
  error?: string
}

const UserForm: React.FC<IProps> = ({
  userInfo,
  onChange,
  onSubmit,
  error,
}) => {
  const idRef = useRef<HTMLInputElement>(null)
  const pwRef = useRef<HTMLInputElement>(null)
  const pwCheckRef = useRef<HTMLInputElement>(null)
  const { userName, password, passwordCheck } = userInfo

  useEffect(() => {
    if (error?.includes('아이디')) {
      idRef.current?.focus()
    }

    if (error?.includes('비밀번호')) {
      pwRef.current?.focus()
    }
  }, [error])

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit()
    }
  }

  return (
    <>
      <Form>
        <Text text='아이디' paddingY='sm' type='BoldText' fontColor='black' />
        <Input
          value={userName}
          onChange={(e) => onChange(e, 'userName')}
          onKeyPress={onKeyPress}
          paddingY='sm'
          inputRef={idRef}
        />
        <Text text='비밀번호' paddingY='sm' type='BoldText' fontColor='black' />
        <Input
          value={password}
          type='password'
          onChange={(e) => onChange(e, 'password')}
          onKeyPress={onKeyPress}
          paddingY='sm'
          inputRef={pwRef}
        />
        {Object.keys(userInfo).includes('passwordCheck') && (
          <>
            <Text
              text='비밀번호 확인'
              paddingY='sm'
              type='BoldText'
              fontColor='black'
            />
            <Input
              value={passwordCheck!}
              onChange={(e) => onChange(e, 'passwordCheck')}
              onKeyPress={onKeyPress}
              paddingY='sm'
              inputRef={pwCheckRef}
            />
          </>
        )}
        {error && <Text text={error} paddingY='md' fontColor='red' />}
        <Button text='로그인' onClick={onSubmit} size='md' marginY='sm' />
      </Form>
    </>
  )
}

UserForm.defaultProps = {
  error: undefined,
}

export default UserForm
