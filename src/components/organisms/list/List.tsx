import React from 'react'
// conponents & type
import { TSize } from 'styled-components'
import ListItem, {
  TListItem,
  IListItemProps,
} from 'components/molecules/listItem/ListItem'
// style
import Lists from './List.styles'

type ListTypee = 'List'
export type TListContents = Omit<IListItemProps, 'type'>
export type TListHeader = Pick<
  IListItemProps,
  | 'paddingX'
  | 'paddingY'
  | 'fontColor'
  | 'fontSize'
  | 'bgColorNumber'
  | 'content'
  | 'hover'
  | 'numberFlex'
  | 'numberWidth'
>
export type TDefaultListItem = Pick<
  IListItemProps,
  | 'paddingX'
  | 'paddingY'
  | 'fontColor'
  | 'fontSize'
  | 'bgColorNumber'
  | 'content'
  | 'numberFlex'
  | 'numberWidth'
>

interface IProps {
  type: ListTypee
  listItemType: TListItem
  header?: TListHeader
  contents?: TListContents[]
  defaultContent?: TDefaultListItem
  height?: number
  paddingX?: TSize<'zero'>
  paddingY?: TSize<'zero'>
  divide?: boolean
  boxShadow?: boolean
}

const List: React.FC<IProps> = ({
  type,
  listItemType,
  header,
  contents,
  defaultContent,
  height,
  paddingX = 'zero',
  paddingY = 'zero',
  divide,
  boxShadow,
}) => {
  const ListEl = Lists[type]
  return (
    <ListEl
      height={height}
      paddingX={paddingX}
      paddingY={paddingY}
      divide={divide}
      boxShadow={boxShadow}
    >
      {header && (
        <ListItem
          key={`list-header-${
            typeof header.content === 'string' ? header.content : 'item'
          }`}
          type={listItemType}
          paddingX={header.paddingX}
          paddingY={header.paddingY ? header.paddingY : 'zero'}
          fontSize={header.fontSize}
          fontColor={header.fontColor}
          bgColorNumber={header.bgColorNumber}
          itemNumber=' '
          content={header.content}
          hover={header.hover}
          numberFlex={header.numberFlex}
          numberWidth={header.numberWidth}
        />
      )}
      {contents &&
        contents.map((content, index) => (
          <ListItem
            key={`list-item-${
              typeof content.content === 'string' ? content.content : index
            }`}
            type={listItemType}
            paddingX={content.paddingX}
            paddingY={content.paddingY ? content.paddingY : 'zero'}
            fontColor={content.fontColor}
            fontSize={content.fontSize}
            bgColorNumber={content.bgColorNumber}
            itemNumber={content.itemNumber}
            content={content.content}
            button={content.button}
            buttonSize={content.buttonSize}
            buttonText={content.buttonText}
            onClick={content.onClick}
            buttonClick={content.buttonClick}
            hover={content.hover}
            active={content.active}
            numberFlex={content.numberFlex}
            numberWidth={content.numberWidth}
          />
        ))}
      {!contents?.length && defaultContent && (
        <ListItem
          key='list-default'
          type='ListItem'
          paddingX={defaultContent.paddingX}
          paddingY={defaultContent.paddingY ? defaultContent.paddingY : 'zero'}
          fontColor={defaultContent.fontColor}
          fontSize={defaultContent.fontSize}
          bgColorNumber={defaultContent.bgColorNumber}
          content={defaultContent.content}
          numberFlex={defaultContent.numberFlex}
          numberWidth={defaultContent.numberWidth}
        />
      )}
    </ListEl>
  )
}

export default List
