import React, { useId } from 'react'
// conponents & type
import { TColor, TFontColor, TSize } from 'styled-components'
import ListItem, {
  TListItem,
  IListItemProps,
} from 'components/molecules/listItem/ListItem'
// style
import Lists from './List.styles'

type ListTypee = 'List'

interface IProps {
  type: ListTypee
  listItemType: TListItem
  contents: IListItemProps[] | undefined
  bgColor?: TColor
  fontColor?: TFontColor
  paddingX?: TSize<'zero'>
  paddingY?: TSize<'zero'>
}

const List: React.FC<IProps> = ({
  type,
  listItemType,
  bgColor,
  fontColor,
  paddingX = 'zero',
  paddingY = 'zero',
  contents,
}) => {
  const ListEl = Lists[type]
  const basicListItem =
    contents &&
    contents.map((content) => (
      <ListItem
        key={useId()}
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
      />
    ))
  return (
    <ListEl paddingX={paddingX} paddingY={paddingY}>
      {basicListItem}
    </ListEl>
  )
}

List.defaultProps = {
  bgColor: undefined,
  fontColor: undefined,
  paddingX: undefined,
  paddingY: undefined,
}

export default List
