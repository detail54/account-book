/* eslint-disable import/no-named-as-default */
import Text from 'components/atoms/text/Text'
import React from 'react'
import { TFontColor } from 'styled-components'
import GridStyles from './GridItem.styles'

export interface IGridItem {
  title?: string
  titleColor?: TFontColor
  texts?: string[]
  textsColor?: TFontColor[]
  active?: boolean
}

const GridItem: React.FC<IGridItem> = ({
  title,
  titleColor,
  texts,
  textsColor,
  active,
}) => {
  const { Item, Contents } = GridStyles

  return (
    <Item active={active}>
      {title && (
        <Text
          type='BoldText'
          text={title}
          fontSize='large'
          fontColor={titleColor}
          paddingY='xxs'
          paddingX='xxs'
        />
      )}
      <Contents>
        {texts &&
          texts.map((text, index) => (
            <Text
              key={`grid-text-${text}`}
              text={text}
              flex={1}
              paddingY='xxxs'
              fontColor={textsColor && textsColor[index]}
            />
          ))}
      </Contents>
    </Item>
  )
}

export default GridItem
