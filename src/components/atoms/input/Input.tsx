import React from 'react'
import { TSize } from 'styled-components'
// styles
import Inputs from './Input.styles'

type TInput = 'BasicInput'

interface IProps {
  type?: TInput
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeHolder?: string
  paddingY?: TSize<'zero'>
}

const Input: React.FC<IProps> = ({
  type = 'BasicInput',
  value,
  placeHolder = '',
  onChange,
  paddingY,
}) => {
  const InputEl = Inputs[type]
  return (
    <InputEl
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
      paddingY={paddingY}
    />
  )
}

Input.defaultProps = {
  type: 'BasicInput',
  placeHolder: undefined,
  paddingY: undefined,
}

export default Input
