import React from 'react'
// interface
import Button, { ButtonType } from 'components/atoms/button/Button'
import { TColor, TFontColor, TSize } from 'styled-components'
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
  bgColor?: TColor
  itemNumber?: number | string
  content?: TContent
  button?: ButtonType
  buttonSize?: TSize
  buttonText?: string
  hover?: boolean
  active?: boolean
  onClick?: () => void
  buttonClick?: () => void
}

const ListItem: React.FC<IListItemProps> = ({
  type,
  paddingX,
  paddingY,
  fontColor,
  bgColor,
  itemNumber = 0,
  content,
  button,
  buttonSize = 'md',
  buttonText = 'no buttonText',
  hover,
  active,
  onClick,
  buttonClick = () => {},
}) => {
  const ListItemEl = ListItems[type]
  const numberEl = (type === 'NumberListItem' ||
    type === 'NumberAndButtonListItem') && <Text text={itemNumber} />
  const buttonEl = (type === 'ButtonListItem' ||
    type === 'NumberAndButtonListItem') && (
    <Button
      buttonStyle={button}
      size={buttonSize}
      text={buttonText}
      onClick={buttonClick}
    />
  )

  return (
    <ListItemEl
      paddingX={paddingX}
      paddingY={paddingY}
      fontColor={fontColor}
      bgColor={bgColor}
      onClick={onClick}
      cursor={onClick && 'pointer'}
      hover={hover}
      active={active}
    >
      {numberEl}
      {typeof content === 'string' || typeof content === 'number' ? (
        <Text text={content} fontColor={fontColor} />
      ) : (
        content
      )}
      {buttonEl}
    </ListItemEl>
  )
}

export default ListItem
