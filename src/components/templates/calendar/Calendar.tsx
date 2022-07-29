/* eslint-disable no-nested-ternary */
import React from 'react'
import { IGridItem } from 'components/molecules/gridItem/GridItem'
import Grid from 'components/organisms/grid/Grid'
// style
import Styles from './Calendar.styles'

interface IProps {
  date: string
  contents: { [key: string]: string }[]
}

const Calendar: React.FC<IProps> = ({ date, contents }) => {
  const { Wrap } = Styles
  const dateObj = new Date(date)
  const firstDay = new Date(
    dateObj.getFullYear(),
    dateObj.getMonth(),
    1,
  ).getDay()
  const lastDay = new Date(
    dateObj.getFullYear(),
    dateObj.getMonth() + 1,
    0,
  ).getDay()

  const gridContents: IGridItem[] = contents.map((content, index) => {
    const day = new Date(
      `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${index + 1}`,
    ).getDay()
    const dateFormat =
      String(index + 1).length === 1 ? `0${index + 1}` : String(index + 1)

    return {
      title: dateFormat,
      titleColor: day === 0 ? 'red' : day === 6 ? 'blue' : 'themeColor',
      texts: Object.values(content),
      textsColor: ['blue', 'red'],
      active: true,
    }
  })

  const beforeContents = Array.from({ length: firstDay }, (v, i) => i).map(
    (i) => {
      return {}
    },
  )

  const afterContents = Array.from({ length: 6 - lastDay }, (v, i) => i).map(
    (i) => {
      return {}
    },
  )

  return (
    <Wrap>
      <Grid
        gridColumnsCount={7}
        gap='sm'
        contents={beforeContents.concat(gridContents.concat(afterContents))}
      />
    </Wrap>
  )
}

export default Calendar
