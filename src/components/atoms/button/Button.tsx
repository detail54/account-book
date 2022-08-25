import React from 'react'
// interface
import { TColor, TFontColor, TFontSize, TSize } from 'styled-components'
// styles
import Buttons from './Button.styles'

export type ButtonType = 'BasicButton' | 'RoundButton'

interface IProps {
  type?: 'button' | 'submit' | 'reset'
  buttonStyle?: ButtonType
  size: TSize
  fontColor?: TFontColor
  fontSize?: TFontSize
  bgColor?: TColor
  marginY?: TSize<'zero'>
  marginX?: TSize<'zero'>
  text: string
  onClick?: () => void
}

const Button: React.FC<IProps> = ({
  type = 'button',
  buttonStyle = 'BasicButton',
  size,
  fontColor,
  fontSize,
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
      fontSize={fontSize}
      bgColor={bgColor}
      marginY={marginY}
      marginX={marginX}
    >
      {text}
    </ButtonEl>
  )
}

export default Button
