/* eslint-disable no-nested-ternary */
import React from 'react'
// components
import Grid from 'components/organisms/grid/Grid'
import ImgButton from 'components/atoms/button/ImgButton'
import Text from 'components/atoms/text/Text'
// store
import { useRecoilState } from 'recoil'
import { themeState } from 'store/atoms'
// interface
import { IGridItem } from 'components/molecules/gridItem/GridItem'
// image
import leftArrow from '../../../../public/assets/images/icon/arrow_left.png'
import rightArrow from '../../../../public/assets/images/icon/arrow_right.png'
// style
import Styles from './Calendar.styles'

interface IProps {
  date: Date
  contents?: { [key: string]: string }[]
  onChangeDate: (type: 'prev' | 'next') => void
  handleSelectDate: (date: number) => void
}

const Calendar: React.FC<IProps> = ({
  date,
  contents,
  onChangeDate,
  handleSelectDate,
}) => {
  const [isDarkTheme] = useRecoilState(themeState)
  const { Wrap, DateBox } = Styles
  const dateStr = `${date.getFullYear()}-${date.getMonth() + 1}`
  const firstDate = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0)

  const gridContents: IGridItem[] | undefined =
    contents &&
    contents.map((content, index) => {
      const day = new Date(
        `${date.getFullYear()}-${date.getMonth() + 1}-${index + 1}`,
      ).getDay()
      const dateFormat =
        String(index + 1).length === 1 ? `0${index + 1}` : String(index + 1)

      return {
        title: dateFormat,
        titleColor: day === 0 ? 'red' : day === 6 ? 'blue' : 'themeColor',
        texts: Object.values(content),
        textsColor: ['blue', 'red'],
        active: true,
        onClick: () => {
          handleSelectDate(index + 1)
        },
      }
    })

  const defaultGridContents: IGridItem[] = Array.from(
    { length: lastDate.getDate() },
    (v, i) => i,
  ).map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_, index) => {
      const day = new Date(
        `${date.getFullYear()}-${date.getMonth() + 1}-${index + 1}`,
      ).getDay()
      const dateFormat =
        String(index + 1).length === 1 ? `0${index + 1}` : String(index + 1)

      return {
        title: dateFormat,
        titleColor: day === 0 ? 'red' : day === 6 ? 'blue' : 'themeColor',
        textsColor: ['blue', 'red'],
        active: true,
        onClick: () => {
          handleSelectDate(index + 1)
        },
      }
    },
  )

  const beforeContents = Array.from(
    { length: firstDate.getDay() },
    (v, i) => i,
  ).map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_) => {
      return {}
    },
  )

  const afterContents = Array.from(
    { length: 6 - lastDate.getDay() },
    (v, i) => i,
  ).map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_) => {
      return {}
    },
  )

  return (
    <Wrap>
      <DateBox>
        <ImgButton
          src={leftArrow}
          width={30}
          height={30}
          invertImgColor={isDarkTheme}
          onClick={() => onChangeDate('prev')}
        />
        <Text text={dateStr} fontSize='xxl' />
        <ImgButton
          src={rightArrow}
          width={30}
          height={30}
          invertImgColor={isDarkTheme}
          onClick={() => onChangeDate('next')}
        />
      </DateBox>
      <Grid
        height={553}
        gridColumnsCount={7}
        gap='sm'
        contents={
          gridContents
            ? beforeContents.concat(gridContents.concat(afterContents))
            : beforeContents.concat(defaultGridContents.concat(afterContents))
        }
      />
    </Wrap>
  )
}

export default Calendar
