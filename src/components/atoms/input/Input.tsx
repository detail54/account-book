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
  width?: number | string
  paddingY?: TSize<'zero'>
  flex?: number
  inputRef?: React.RefObject<HTMLInputElement>
}

const Input: React.FC<IProps> = ({
  type = 'text',
  inputStyle = 'BasicInput',
  value,
  placeHolder = '',
  onChange,
  onKeyPress,
  width,
  paddingY,
  flex,
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
      width={width}
      paddingY={paddingY}
      flex={flex}
      ref={inputRef}
    />
  )
}

export default Input
