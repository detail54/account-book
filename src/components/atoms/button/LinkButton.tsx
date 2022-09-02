import React from 'react'
// lib
import Link from 'next/link'
// interface
import { TColor, TFontColor, TFontSize, TSize } from 'styled-components'
import { ButtonType } from './Button'
// styles
import Buttons from './Button.styles'

interface IProps {
  type?: ButtonType
  size: TSize
  fontColor?: TFontColor
  fontSize?: TFontSize
  bgColor?: TColor
  marginY?: TSize<'zero'>
  marginX?: TSize<'zero'>
  noneBorder?: boolean
  text: string
  link: string
}

const LinkButton: React.FC<IProps> = ({
  type = 'BasicButton',
  size,
  fontColor,
  fontSize,
  bgColor,
  marginY,
  marginX,
  noneBorder,
  text,
  link,
}) => {
  const ButtonEl = Buttons[type]
  return (
    <Link href={link}>
      <ButtonEl
        size={size}
        fontColor={fontColor}
        fontSize={fontSize}
        bgColor={bgColor}
        marginY={marginY}
        marginX={marginX}
        noneBorder={noneBorder}
      >
        {text}
      </ButtonEl>
    </Link>
  )
}

export default LinkButton
