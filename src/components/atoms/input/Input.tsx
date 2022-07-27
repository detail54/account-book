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
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  placeHolder?: string
  paddingY?: TSize<'zero'>
  inputRef?: React.RefObject<HTMLInputElement>
}

const Input: React.FC<IProps> = ({
  type = 'text',
  inputStyle = 'BasicInput',
  value,
  placeHolder = '',
  onChange,
  onKeyPress,
  paddingY,
  inputRef,
}) => {
  const InputEl = Inputs[inputStyle]

  return (
    <InputEl
      type={type}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeHolder}
      paddingY={paddingY}
      ref={inputRef}
    />
  )
}

Input.defaultProps = {
  type: 'text',
  inputStyle: 'BasicInput',
  placeHolder: undefined,
  paddingY: undefined,
  onKeyPress: undefined,
  inputRef: undefined,
}

export default Input
