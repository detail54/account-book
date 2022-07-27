import React from 'react'
// interface
import { TColor, TFontColor, TSize } from 'styled-components'
// styles
import Buttons from './Button.styles'

export type ButtonType = 'BasicButton' | 'RoundButton'

interface IProps {
  type?: 'button' | 'submit' | 'reset'
  buttonStyle?: ButtonType
  size: TSize
  fontColor?: TFontColor
  bgColor?: TColor
  marginY?: TSize<'zero'>
  marginX?: TSize<'zero'>
  text: string
  onClick: () => void
}

const Button: React.FC<IProps> = ({
  type = 'button',
  buttonStyle = 'BasicButton',
  size,
  fontColor,
  bgColor,
  marginY,
  marginX,
  text,
  onClick,
}) => {
  const ButtonEl = Buttons[buttonStyle]
  return (
    <ButtonEl
      type={type}
      onClick={onClick}
      size={size}
      fontColor={fontColor}
      bgColor={bgColor}
      marginY={marginY}
      marginX={marginX}
    >
      {text}
    </ButtonEl>
  )
}

Button.defaultProps = {
  type: 'button',
  buttonStyle: 'BasicButton',
  fontColor: 'black',
  bgColor: 'white',
  marginY: undefined,
  marginX: undefined,
}

export default Button
