/* eslint-disable import/no-named-as-default */
import Text from 'components/atoms/text/Text'
import React from 'react'
import { TAlign, TFontColor, TFontSize, TSize } from 'styled-components'
import GridStyles from './GridItem.styles'

export interface IGridItem {
  title?: string
  titleColor?: TFontColor
  titleFontSize?: TFontSize
  titleAlign?: TAlign
  texts?: string[]
  textsColor?: TFontColor[]
  textFontSize?: TFontSize
  itemPadding?: TSize<'zero'>
  active?: boolean
  onClick?: () => void
}

const GridItem: React.FC<IGridItem> = ({
  title,
  titleColor,
  titleFontSize,
  titleAlign,
  texts,
  textsColor,
  textFontSize,
  itemPadding,
  active,
  onClick,
}) => {
  const { Item, Contents } = GridStyles

  return (
    <Item
      titleAlign={titleAlign}
      active={active}
      itemPadding={itemPadding}
      onClick={onClick}
    >
      {title && (
        <Text
          type='BoldText'
          text={title}
          fontSize={titleFontSize || 'large'}
          fontColor={titleColor}
          paddingY='xxs'
          paddingX='xxs'
        />
      )}
      {texts && (
        <Contents>
          {texts.map((text, index) => (
            <Text
              key={`grid-text-${text || index}`}
              text={text}
              flex={1}
              paddingY='xxxs'
              fontSize={textFontSize || 'large'}
              fontColor={textsColor && textsColor[index]}
            />
          ))}
        </Contents>
      )}
    </Item>
  )
}

export default GridItem
