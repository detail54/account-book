import React from 'react'
// lib
import Link from 'next/link'
// interface
import { TColor, TFontColor, TSize } from 'styled-components'
import { ButtonType } from './Button'
// styles
import Buttons from './Button.styles'

interface IProps {
  type?: ButtonType
  size: TSize
  fontColor?: TFontColor
  bgColor?: TColor
  marginY?: TSize<'zero'>
  marginX?: TSize<'zero'>
  text: string
  link: string
}

const LinkButton: React.FC<IProps> = ({
  type = 'BasicButton',
  size,
  fontColor,
  bgColor,
  marginY,
  marginX,
  text,
  link,
}) => {
  const ButtonEl = Buttons[type]
  return (
    <Link href={link}>
      <ButtonEl
        size={size}
        fontColor={fontColor}
        bgColor={bgColor}
        marginY={marginY}
        marginX={marginX}
      >
        {text}
      </ButtonEl>
    </Link>
  )
}

export default LinkButton
