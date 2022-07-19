import React from 'react'
// components
import Text from 'components/atoms/text/Text'
import Input from 'components/atoms/input/Input'
import Button from 'components/atoms/button/Button'
// styles
import Form from './AddPosttForm.styles'

interface IProps {
  title: string
  body: string
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeBody: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: () => void
}

const AddPostForm: React.FC<IProps> = ({
  title,
  body,
  onChangeTitle,
  onChangeBody,
  onSubmit,
}) => {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Text text='title' paddingY='md' />
      <Input value={title} onChange={onChangeTitle} paddingY='sm' />
      <Text text='body' paddingY='md' />
      <Input value={body} onChange={onChangeBody} paddingY='sm' />
      <Button text='add' onClick={onSubmit} size='md' marginY='sm' />
    </Form>
  )
}

export default AddPostForm
