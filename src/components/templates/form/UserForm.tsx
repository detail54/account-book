import React, { useEffect, useRef } from 'react'
// components
import Text from 'components/atoms/text/Text'
import Input from 'components/atoms/input/Input'
import Button from 'components/atoms/button/Button'
// styles
import Form from './UserForm.styles'

export type TChangeValueType = 'userName' | 'password' | 'passwordCheck'

interface IProps {
  userName: string
  password: string
  passwordCheck?: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: TChangeValueType,
  ) => void
  onSubmit: () => void
  error?: string
}

const UserForm: React.FC<IProps> = ({
  userName,
  password,
  passwordCheck,
  onChange,
  onSubmit,
  error,
}) => {
  const idRef = useRef<HTMLInputElement>(null)
  const pwRef = useRef<HTMLInputElement>(null)

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
        {passwordCheck && (
          <>
            <Text
              text='비밀번호 확인'
              paddingY='sm'
              type='BoldText'
              fontColor='black'
            />
            <Input
              value={passwordCheck}
              onChange={(e) => onChange(e, 'passwordCheck')}
              paddingY='sm'
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
  passwordCheck: '',
  error: undefined,
}

export default UserForm
