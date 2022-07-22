import React from 'react'
// components
import Text from 'components/atoms/text/Text'
import Input from 'components/atoms/input/Input'
import Button from 'components/atoms/button/Button'
// interface
import { IUser } from 'hooks/api/interface'
// styles
import Form from './SignUpForm.styles'

interface IProps {
  user: IUser
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeBody: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: () => void
}

const SignUpForm: React.FC<IProps> = ({
  user,
  onChangeTitle,
  onChangeBody,
  onSubmit,
}) => {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Text text='아이디' paddingY='md' />
      <Input value={user.userName} onChange={onChangeTitle} paddingY='sm' />
      <Text text='비밀번호' paddingY='md' />
      <Input value={user.password} onChange={onChangeBody} paddingY='sm' />
      <Text text='비밀번호 확인' paddingY='md' />
      <Input value={user.password} onChange={onChangeBody} paddingY='sm' />
      <Button text='add' onClick={onSubmit} size='md' marginY='sm' />
    </Form>
  )
}

export default SignUpForm
