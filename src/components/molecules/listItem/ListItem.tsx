import React from 'react'
// interface
import Button, { ButtonType } from 'components/atoms/button/Button'
import { TFontColor, TFontSize, TSize } from 'styled-components'
// components
import Text from 'components/atoms/text/Text'
// styles
import ListItems from './ListItem.styles'

export type TListItem =
  | 'ListItem'
  | 'NumberListItem'
  | 'ButtonListItem'
  | 'NumberAndButtonListItem'

type TContent = string | number | JSX.Element

export interface IListItemProps {
  type: TListItem
  paddingX?: TSize<'zero'>
  paddingY?: TSize<'zero'>
  fontColor?: TFontColor
  fontSize?: TFontSize
  bgColorNumber?: number
  itemNumber?: number | string
  content?: TContent
  button?: ButtonType
  buttonSize?: TSize
  buttonText?: string
  hover?: boolean
  active?: boolean
  numberFlex?: number
  numberWidth?: number
  onClick?: () => void
  buttonClick?: () => void
}

const ListItem: React.FC<IListItemProps> = ({
  type,
  paddingX,
  paddingY,
  fontColor,
  fontSize,
  bgColorNumber,
  itemNumber = 0,
  content,
  button,
  buttonSize = 'md',
  buttonText = 'no buttonText',
  hover,
  active,
  numberFlex,
  numberWidth,
  onClick,
  buttonClick = () => {},
}) => {
  const ListItemEl = ListItems[type]
  const numberEl = (type === 'NumberListItem' ||
    type === 'NumberAndButtonListItem') &&
    itemNumber && <Text text={itemNumber} fontSize={fontSize} />
  const buttonEl = (type === 'ButtonListItem' ||
    type === 'NumberAndButtonListItem') && (
    <Button
      buttonStyle={button}
      size={buttonSize}
      text={buttonText}
      fontSize={fontSize}
      onClick={buttonClick}
    />
  )

  return (
    <ListItemEl
      paddingX={paddingX}
      paddingY={paddingY}
      fontColor={fontColor}
      bgColorNumber={bgColorNumber}
      onClick={onClick}
      cursor={onClick && 'pointer'}
      hover={hover}
      active={active}
      numberFlex={numberFlex}
      numberWidth={numberWidth}
    >
      {numberEl}
      {typeof content === 'string' || typeof content === 'number' ? (
        <Text text={content} fontColor={fontColor} fontSize={fontSize} />
      ) : (
        content
      )}
      {buttonEl}
    </ListItemEl>
  )
}

export default ListItem
