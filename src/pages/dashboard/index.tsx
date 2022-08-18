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
import DashBoardStyles from './DashBoard.styles'
// component
const Skeleton = dynamic(() => import('components/atoms/skeleton/Skeleton'))
const Text = dynamic(() => import('components/atoms/text/Text'))
const Calendar = dynamic(() => import('components/templates/calendar/Calendar'))

const index: NextPage = () => {
  const router = useRouter()
  const { format, changeNextMonth, changePrevMonth, getDateObj, getLastDate } =
    useDate()
  const { getDashBoardData } = useDashBoard()

  const dateFormat = format('YYYY-MM')
  const { data: dashBoardData } = getDashBoardData(dateFormat)

  const [selectDate, setSelectDate] = useRecoilState(selectDashBoardDateState)

  const { Wrap, TotalInfo } = DashBoardStyles

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
      <TotalInfo>
        <Text
          text={`수익: ${
            dashBoardData ? dashBoardData.totalIncome.toLocaleString() : 0
          }`}
          fontColor='red'
          fontSize='xl'
          type='BoldText'
        />
        <Text
          text={`지출: ${
            dashBoardData ? dashBoardData.totalExpenditure.toLocaleString() : 0
          }`}
          fontColor='blue'
          fontSize='xl'
          type='BoldText'
        />
      </TotalInfo>
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
