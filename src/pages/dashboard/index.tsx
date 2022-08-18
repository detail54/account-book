import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React from 'react'
// hook
import useDate from 'hooks/useDate'
import useDashBoard from 'hooks/useDashBoard'
// store
import { useRecoilState } from 'recoil'
import { selectDashBoardDateState } from 'store/atoms'
// styte
import Wrap from './DashBoard.styles'
// component
const Calendar = dynamic(() => import('components/templates/calendar/Calendar'))

const index: NextPage = () => {
  const router = useRouter()
  const { format, changeNextMonth, changePrevMonth, getDateObj, getLastDate } =
    useDate()
  const { getDashBoardData } = useDashBoard()

  const dateFormat = format('YYYY-MM')
  const { data: dashBoardData } = getDashBoardData(dateFormat)

  const [selectDate, setSelectDate] = useRecoilState(selectDashBoardDateState)

  const calendarData = dashBoardData
    ? dashBoardData.list.map((data) => {
        return {
          income: `+ ${data.income.toLocaleString()}`,
          expenditure: `- ${data.expenditure.toLocaleString()}`,
        }
      })
    : Array.from({ length: getLastDate() }, (v, i) => i).map((_) => {
        return {
          income: `+ 0`,
          expenditure: `- 0`,
        }
      })

  const onChangeDate = (type: 'prev' | 'next') => {
    if (type === 'next') changeNextMonth()
    else changePrevMonth()
  }

  const handleSelectDate = (date: number) => {
    setSelectDate(date)
    router.push('detail')
  }

  return (
    <Wrap>
      <Calendar
        date={getDateObj()}
        contents={calendarData}
        onChangeDate={onChangeDate}
        handleSelectDate={handleSelectDate}
      />
    </Wrap>
  )
}

export default index
