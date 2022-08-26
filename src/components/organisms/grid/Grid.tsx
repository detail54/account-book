/* eslint-disable react/no-array-index-key */
import GridItem, { IGridItem } from 'components/molecules/gridItem/GridItem'
import React from 'react'
// style
import { TSize } from 'styled-components'
import GridStyles from './Grid.styles'

interface IProps {
  width?: number
  height?: number
  gridColumnsCount: number
  gridRowsCount?: number
  gap?: TSize
  contents: IGridItem[]
}

const Grid: React.FC<IProps> = ({
  width,
  height,
  gridColumnsCount,
  gridRowsCount,
  contents,
  gap,
}) => {
  const { Container } = GridStyles

  return (
    <Container
      gridColumnsCount={gridColumnsCount}
      gridRowsCount={gridRowsCount}
      gap={gap}
      width={width}
      height={height}
    >
      {contents.map((content, index) => {
        return (
          <GridItem
            key={`grid-item${index}`}
            title={content.title}
            titleColor={content.titleColor}
            titleFontSize={content.titleFontSize}
            titleAlign={content.titleAlign}
            texts={content.texts}
            textsColor={content.textsColor}
            textFontSize={content.textFontSize}
            active={content.active}
            itemPadding={content.itemPadding}
            onClick={content.onClick}
          />
        )
      })}
    </Container>
  )
}

export default Grid
