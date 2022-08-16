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

const data = [
  {
    earnings: '2,000,000',
    expenditure: '15,200',
  },
  {
    earnings: '0',
    expenditure: '25,200',
  },
  {
    earnings: '0',
    expenditure: '10,200',
  },
  {
    earnings: '0',
    expenditure: '1,500',
  },
  {
    earnings: '100,000',
    expenditure: '100,200',
  },
  {
    earnings: '0',
    expenditure: '15,200',
  },
  {
    earnings: '0',
    expenditure: '151,200',
  },
  {
    earnings: '0',
    expenditure: '200',
  },
  {
    earnings: '0',
    expenditure: '0',
  },
  {
    earnings: '0',
    expenditure: '0',
  },
  {
    earnings: '0',
    expenditure: '18,380',
  },
  {
    earnings: '0',
    expenditure: '0',
  },
  {
    earnings: '50,000',
    expenditure: '15,200',
  },
  {
    earnings: '0',
    expenditure: '4,500',
  },
  {
    earnings: '0',
    expenditure: '5,200',
  },
  {
    earnings: '10,000',
    expenditure: '8,900',
  },
  {
    earnings: '0',
    expenditure: '55,200',
  },
  {
    earnings: '0',
    expenditure: '15,200',
  },
  {
    earnings: '0',
    expenditure: '15,200',
  },
  {
    earnings: '0',
    expenditure: '15,200',
  },
  {
    earnings: '0',
    expenditure: '15,200',
  },
  {
    earnings: '0',
    expenditure: '15,200',
  },
  {
    earnings: '0',
    expenditure: '15,200',
  },
  {
    earnings: '0',
    expenditure: '15,200',
  },
  {
    earnings: '0',
    expenditure: '15,200',
  },
  {
    earnings: '0',
    expenditure: '15,200',
  },
  {
    earnings: '0',
    expenditure: '15,200',
  },
  {
    earnings: '0',
    expenditure: '15,200',
  },
  {
    earnings: '0',
    expenditure: '15,200',
  },
  {
    earnings: '0',
    expenditure: '15,200',
  },
  {
    earnings: '0',
    expenditure: '15,200',
  },
]

const index: NextPage = () => {
  const { format, changeNextMonth, changePrevMonth, getDateObj, getLastDate } =
    useDate()
  const date = format('YYYY-MM')
  const { getDashBoardData } = useDashBoard()
  const { data: dashBoardData } = getDashBoardData(date)
  console.log('dashBoardData:::', dashBoardData)

  const onChangeDate = (type: 'prev' | 'next') => {
    if (type === 'next') changeNextMonth()
    else changePrevMonth()
  }

  return (
    <Wrap>
      <Calendar
        date={getDateObj()}
        contents={data}
        onChangeDate={onChangeDate}
      />
    </Wrap>
  )
}

export default index
