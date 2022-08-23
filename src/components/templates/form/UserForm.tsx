/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useRef } from 'react'
// components
import Text from 'components/atoms/text/Text'
import Input from 'components/atoms/input/Input'
import Button from 'components/atoms/button/Button'
import { validationMsg } from 'config/messages'
// styles
import Form from './UserForm.styles'

export type TChangeValueType = 'userName' | 'password' | 'passwordCheck'

export interface IUserInfo {
  userName: string
  password: string
  passwordCheck?: string
}
interface IProps {
  type: '로그인' | '회원가입'
  userInfo: IUserInfo
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: TChangeValueType,
  ) => void
  onSubmit: () => void
  error?: string
}

const UserForm: React.FC<IProps> = ({
  type,
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
    if (error?.includes(validationMsg.ERROR_BLANKED_ID)) {
      idRef.current?.focus()
    }

    if (
      error?.includes(validationMsg.ERROR_BLANKED_PW) ||
      error?.includes(validationMsg.ERROR_DIFFERENT_PW)
    ) {
      pwRef.current?.focus()
    }

    if (error?.includes(validationMsg.ERROR_DIFFERENT_PWCHECK)) {
      pwCheckRef.current?.focus()
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
        {type === '회원가입' && (
          <>
            <Text
              text='비밀번호 확인'
              paddingY='sm'
              type='BoldText'
              fontColor='black'
            />
            <Input
              type='password'
              value={passwordCheck!}
              onChange={(e) => onChange(e, 'passwordCheck')}
              onKeyPress={onKeyPress}
              paddingY='sm'
              inputRef={pwCheckRef}
            />
          </>
        )}
        {error && <Text text={error} paddingY='xs' fontColor='red' />}
        <Button text={type} onClick={onSubmit} size='md' marginY='sm' />
      </Form>
    </>
  )
}

export default UserForm
