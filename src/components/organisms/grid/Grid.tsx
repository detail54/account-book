/* eslint-disable react/no-array-index-key */
import GridItem, { IGridItem } from 'components/molecules/gridItem/GridItem'
import React from 'react'
// style
import { TSize } from 'styled-components'
import GridStyles from './Grid.styles'

interface IProps {
  gridColumnsCount: number
  gridRowsCount?: number
  gap?: TSize
  contents: IGridItem[]
}

const Grid: React.FC<IProps> = ({
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
    >
      {contents.map((content, index) => {
        return (
          <GridItem
            key={`grid-item${index}`}
            title={content.title}
            titleColor={content.titleColor}
            texts={content.texts}
            textsColor={content.textsColor}
            active={content.active}
          />
        )
      })}
    </Container>
  )
}

export default Grid
