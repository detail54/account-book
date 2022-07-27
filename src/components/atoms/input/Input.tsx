import React from 'react'
import { TSize } from 'styled-components'
// styles
import Inputs from './Input.styles'

type TInput = 'BasicInput'

interface IProps {
  type?: string
  inputStyle?: TInput
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeHolder?: string
  paddingY?: TSize<'zero'>
}

const Input: React.FC<IProps> = ({
  type = 'text',
  inputStyle = 'BasicInput',
  value,
  placeHolder = '',
  onChange,
  paddingY,
}) => {
  const InputEl = Inputs[inputStyle]
  return (
    <InputEl
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
      paddingY={paddingY}
    />
  )
}

Input.defaultProps = {
  type: 'text',
  inputStyle: 'BasicInput',
  placeHolder: undefined,
  paddingY: undefined,
}

export default Input
