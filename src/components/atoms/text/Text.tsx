import React from 'react'
// interface
import { TFontColor, TSize } from 'styled-components'
// styles
import Texts from './Text.styles'

type TText = 'Text' | 'BoldText'

interface IProps {
  type?: TText
  fontColor?: TFontColor
  paddingY?: TSize<'zero'>
  text: string | number | JSX.Element | undefined
}

const Text: React.FC<IProps> = ({
  type = 'Text',
  fontColor,
  paddingY,
  text,
}) => {
  const TextEl = Texts[type]
  return (
    <TextEl fontColor={fontColor} paddingY={paddingY}>
      {text}
    </TextEl>
  )
}

Text.defaultProps = {
  type: undefined,
  fontColor: undefined,
  paddingY: undefined,
}

export default Text
