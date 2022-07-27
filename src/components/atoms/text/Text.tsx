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
  text: string | number | JSX.Element | undefined
}

const Text: React.FC<IProps> = ({
  type = 'Text',
  fontColor,
  fontSize,
  paddingY,
  text,
}) => {
  const TextEl = Texts[type]
  return (
    <TextEl fontColor={fontColor} paddingY={paddingY} fontSize={fontSize}>
      {text}
    </TextEl>
  )
}

Text.defaultProps = {
  type: undefined,
  fontColor: undefined,
  fontSize: undefined,
  paddingY: undefined,
}

export default Text
