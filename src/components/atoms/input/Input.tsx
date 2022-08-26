import React from 'react'
import { TAlign, TSize } from 'styled-components'
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
  align?: TAlign
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
  align,
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
      align={align}
      paddingY={paddingY}
      flex={flex}
      ref={inputRef}
    />
  )
}

export default Input
