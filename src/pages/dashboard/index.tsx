import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'
// hook
import useDate from 'hooks/useDate'
import useDashBoard from 'hooks/useDashBoard'
// styte
import Wrap from './DashBoard.styles'
// component
const Calendar = dynamic(() => import('components/templates/calendar/Calendar'))

const index: NextPage = () => {
  const { format, changeNextMonth, changePrevMonth, getDateObj, getLastDate } =
    useDate()
  const { getDashBoardData } = useDashBoard()

  const date = format('YYYY-MM')
  const { data: dashBoardData } = getDashBoardData(date)

  const initDataList = Array.from({ length: getLastDate() }, (v, i) => i).map(
    (_) => {
      return {
        income: `+ 0`,
        expenditure: `- 0`,
      }
    },
  )

  const formatDataList = dashBoardData
    ? dashBoardData.list.map((data) => {
        return {
          income: `+ ${data.income.toLocaleString()}`,
          expenditure: `- ${data.expenditure.toLocaleString()}`,
        }
      })
    : initDataList

  const onChangeDate = (type: 'prev' | 'next') => {
    if (type === 'next') changeNextMonth()
    else changePrevMonth()
  }

  return (
    <Wrap>
      <Calendar
        date={getDateObj()}
        contents={formatDataList}
        onChangeDate={onChangeDate}
      />
    </Wrap>
  )
}

export default index
