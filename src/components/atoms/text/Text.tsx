import React from 'react'
// interface
import { TFontColor, TFontSize, TSize } from 'styled-components'
// styles
import Texts from './Text.styles'

type TText = 'Text' | 'BoldText'

interface IProps {
  type?: TText
  fontColor?: TFontColor
  fontSize?: TFontSize
  paddingY?: TSize<'zero'>
  paddingX?: TSize<'zero'>
  text: string | number | JSX.Element | undefined
  flex?: number
}

const Text: React.FC<IProps> = ({
  type = 'Text',
  fontColor,
  fontSize,
  paddingY,
  paddingX,
  text,
  flex,
}) => {
  const TextEl = Texts[type]
  return (
    <TextEl
      fontColor={fontColor}
      paddingY={paddingY}
      paddingX={paddingX}
      fontSize={fontSize}
      flex={flex}
    >
      {text}
    </TextEl>
  )
}

export default Text
