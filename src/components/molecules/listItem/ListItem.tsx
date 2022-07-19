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

export interface IListItemProps {
  type: TListItem
  paddingX?: TSize<'zero'>
  paddingY: TSize<'zero'>
  fontColor?: TFontColor
  bgColor?: TColor
  itemNumber?: number
  content: string | number | JSX.Element | undefined
  button?: ButtonType
  buttonSize?: TSize
  buttonText?: string
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
  onClick = () => {
    // eslint-disable-next-line no-alert
    alert('no onClick attribute')
  },
  buttonClick,
}) => {
  const ListItemEl = ListItems[type]
  const numberEl = (type === 'NumberListItem' ||
    type === 'NumberAndButtonListItem') && <Text text={itemNumber} />
  const buttonEl = (type === 'ButtonListItem' ||
    type === 'NumberAndButtonListItem') && (
    <Button
      type={button}
      size={buttonSize}
      text={buttonText}
      onClick={onClick}
    />
  )

  return (
    <ListItemEl
      paddingX={paddingX}
      paddingY={paddingY}
      fontColor={fontColor}
      bgColor={bgColor}
      onClick={buttonClick}
    >
      {numberEl}
      <Text text={content} fontColor={fontColor} />
      {buttonEl}
    </ListItemEl>
  )
}

ListItem.defaultProps = {
  paddingX: undefined,
  fontColor: undefined,
  bgColor: undefined,
  itemNumber: undefined,
  button: undefined,
  buttonSize: undefined,
  buttonText: undefined,
  onClick: undefined,
  buttonClick: undefined,
}

export default ListItem
