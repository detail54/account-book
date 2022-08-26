/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-nested-ternary */
import React from 'react'
// components
import Grid from 'components/organisms/grid/Grid'
import ImgButton from 'components/atoms/button/ImgButton'
import Text from 'components/atoms/text/Text'
// store
import { useRecoilState } from 'recoil'
import { themeState } from 'store/atoms'
// type
import { IGridItem } from 'components/molecules/gridItem/GridItem'
import { TAlign, TFontSize, TSize } from 'styled-components'
// image
import leftArrow from '../../../../public/assets/images/icon/arrow_left.png'
import rightArrow from '../../../../public/assets/images/icon/arrow_right.png'
// style
import Styles from './Calendar.styles'

interface IProps {
  date: Date
  smallDateSelectBox?: boolean
  contents?: { [key: string]: string }[]
  height: number
  dateAlign?: TAlign
  datePadding?: TSize<'zero'>
  dateFontSize?: TFontSize
  contentsFontSize?: TFontSize
  onChangeDate: (type: 'prev' | 'next') => void
  handleSelectDate: (date: number) => void
}

const Calendar: React.FC<IProps> = ({
  date,
  smallDateSelectBox,
  contents,
  height,
  dateAlign,
  datePadding,
  dateFontSize,
  contentsFontSize,
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
        titleFontSize: dateFontSize,
        titleAlign: dateAlign,
        texts: Object.values(content),
        textsColor: ['blue', 'red'],
        textFontSize: contentsFontSize,
        active: true,
        itemPadding: datePadding,
        onClick: () => {
          handleSelectDate(index + 1)
        },
      }
    })

  const defaultGridContents: IGridItem[] = Array.from(
    { length: lastDate.getDate() },
    (v, i) => i,
  ).map((_, index) => {
    const day = new Date(
      `${date.getFullYear()}-${date.getMonth() + 1}-${index + 1}`,
    ).getDay()
    const dateFormat =
      String(index + 1).length === 1 ? `0${index + 1}` : String(index + 1)

    return {
      title: dateFormat,
      titleColor: day === 0 ? 'red' : day === 6 ? 'blue' : 'themeColor',
      titleFontSize: dateFontSize,
      titleAlign: dateAlign,
      textsColor: ['blue', 'red'],
      active: true,
      itemPadding: datePadding,
      onClick: () => {
        handleSelectDate(index + 1)
      },
    }
  })

  const beforeContents = Array.from(
    { length: firstDate.getDay() },
    (v, i) => i,
  ).map((_) => {
    return {}
  })

  const afterContents = Array.from(
    { length: 6 - lastDate.getDay() },
    (v, i) => i,
  ).map((_) => {
    return {}
  })

  return (
    <Wrap>
      <DateBox smallDateSelectBox={smallDateSelectBox} height={height}>
        <ImgButton
          src={leftArrow}
          width={smallDateSelectBox ? 15 : 30}
          height={smallDateSelectBox ? 15 : 30}
          invertImgColor={isDarkTheme}
          onClick={() => onChangeDate('prev')}
        />
        <Text text={dateStr} fontSize={smallDateSelectBox ? 'base' : 'xxl'} />
        <ImgButton
          src={rightArrow}
          width={smallDateSelectBox ? 15 : 30}
          height={smallDateSelectBox ? 15 : 30}
          invertImgColor={isDarkTheme}
          onClick={() => onChangeDate('next')}
        />
      </DateBox>
      <Grid
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
