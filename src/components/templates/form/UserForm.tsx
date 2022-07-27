import React from 'react'
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
  return (
    <>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Text text='아이디' paddingY='sm' type='BoldText' />
        <Input
          value={userName}
          onChange={(e) => onChange(e, 'userName')}
          paddingY='sm'
        />
        <Text text='비밀번호' paddingY='sm' type='BoldText' />
        <Input
          value={password}
          type='password'
          onChange={(e) => onChange(e, 'password')}
          paddingY='sm'
        />
        {passwordCheck && (
          <>
            <Text text='비밀번호 확인' paddingY='sm' />
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
