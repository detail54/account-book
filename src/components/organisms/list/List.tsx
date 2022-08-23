import React from 'react'
// conponents & type
import { TColor, TFontColor, TSize } from 'styled-components'
import ListItem, {
  TListItem,
  IListItemProps,
} from 'components/molecules/listItem/ListItem'
// style
import Lists from './List.styles'

type ListTypee = 'List'
export type TContents = Omit<IListItemProps, 'type'>[]

interface IProps {
  type: ListTypee
  listItemType: TListItem
  contents?: TContents
  height?: number
  bgColor?: TColor
  fontColor?: TFontColor
  paddingX?: TSize<'zero'>
  paddingY?: TSize<'zero'>
  divide?: boolean
  boxShadow?: boolean
}

const List: React.FC<IProps> = ({
  type,
  listItemType,
  contents,
  height,
  bgColor,
  fontColor,
  paddingX = 'zero',
  paddingY = 'zero',
  divide,
  boxShadow,
}) => {
  const ListEl = Lists[type]
  const basicListItem =
    contents &&
    contents.map((content, index) => (
      <ListItem
        key={`list-item-${
          typeof content.content === 'string' ? content.content : index
        }`}
        type={listItemType}
        paddingX={content.paddingX}
        paddingY={content.paddingY ? content.paddingY : 'zero'}
        fontColor={fontColor}
        bgColor={bgColor}
        itemNumber={content.itemNumber}
        content={content.content}
        button={content.button}
        buttonSize={content.buttonSize}
        buttonText={content.buttonText}
        onClick={content.onClick}
        buttonClick={content.buttonClick}
        hover={content.hover}
        active={content.active}
      />
    ))
  return (
    <ListEl
      height={height}
      paddingX={paddingX}
      paddingY={paddingY}
      divide={divide}
      boxShadow={boxShadow}
    >
      {basicListItem}
    </ListEl>
  )
}

export default List
