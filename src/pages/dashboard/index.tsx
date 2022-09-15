/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
// hook
import useDate from 'hooks/useDate'
import useDashBoard from 'hooks/useDashBoard'
// store
import { useRecoilState } from 'recoil'
import { selectDashBoardDateState } from 'store/atoms'
// styte
import DashBoardStyles from '../../styles/pages/DashBoard.styles'
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectDate, setSelectDate] = useRecoilState(selectDashBoardDateState)

  const { Wrap, TotalInfo } = DashBoardStyles

  const calendarData =
    dashBoardData &&
    dashBoardData.list &&
    dashBoardData.list.map((data) => {
      return {
        income: `+ ${data.income.toLocaleString()}`,
        expenditure: `- ${data.expenditure.toLocaleString()}`,
      }
    })

  const onChangeDate = (type: 'prev' | 'next') => {
    if (type === 'next') changeNextMonth()
    else changePrevMonth()
  }

  const handleSelectDate = (date: number) => {
    setSelectDate(`${dateFormat}-${date < 10 ? `0${date}` : date}`)
    router.push('detail')
  }

  return (
    <Wrap>
      <TotalInfo>
        <Text text='수익:' fontColor='blue' fontSize='xl' type='BoldText' />
        <Skeleton
          width={100}
          height={24}
          borderRadius={5}
          isLoading={!dashBoardData}
        >
          <Text
            text={
              dashBoardData && dashBoardData.totalIncome
                ? dashBoardData.totalIncome.toLocaleString()
                : 0
            }
            fontColor='blue'
            fontSize='xl'
            type='BoldText'
          />
        </Skeleton>
        <Text text='지출:' fontColor='red' fontSize='xl' type='BoldText' />
        <Skeleton
          width={100}
          height={24}
          borderRadius={5}
          isLoading={!dashBoardData}
        >
          <Text
            text={
              dashBoardData && dashBoardData.totalExpenditure
                ? dashBoardData.totalExpenditure.toLocaleString()
                : 0
            }
            fontColor='red'
            fontSize='xl'
            type='BoldText'
          />
        </Skeleton>
      </TotalInfo>
      <Calendar
        date={getDateObj()}
        contents={calendarData}
        height={660}
        onChangeDate={onChangeDate}
        handleSelectDate={handleSelectDate}
      />
    </Wrap>
  )
}

export default index
