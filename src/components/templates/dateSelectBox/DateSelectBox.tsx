import dynamic from 'next/dynamic'
import React, { useEffect, useRef, useState } from 'react'
// hook
import useDate, { TDateFormat } from 'hooks/useDate'
// store
import { useRecoilState } from 'recoil'
import { themeState } from 'store/atoms'
// style
import DateSelectBoxStyles from './DateSelectBox.styles'
// image
import calendar from '../../../../public/assets/images/icon/calendar.png'
// component
const Text = dynamic(() => import('components/atoms/text/Text'))
const Calendar = dynamic(() => import('components/templates/calendar/Calendar'))
const SelectBox = dynamic(() => import('components/atoms/selectBox/SelectBox'))
const Img = dynamic(() => import('components/atoms/image/Img'))

interface IProps {
  date: Date
  viewDateType: TDateFormat
  onChange: (date: Date) => void
  flex?: number
}

const DateSelectBox: React.FC<IProps> = ({
  date,
  viewDateType,
  onChange,
  flex,
}) => {
  const { Wrap, DateBox, CalendarBox, SelectWrap } = DateSelectBoxStyles

  const CalendarRef = useRef<HTMLDivElement>(null)

  const [isDarkMode] = useRecoilState(themeState)
  const [isOpenCalendar, setIsOpenCalendar] = useState<boolean>(false)

  const {
    format,
    getDateObj,
    setDateObj,
    getLastDate,
    getYear,
    setYear,
    getMonth,
    setMonth,
    getDate,
    setDate,
    getHour,
    setHour,
    getMinute,
    setMinute,
    getSeconds,
    setSeconds,
    changePrevMonth,
    changeNextMonth,
  } = useDate(date)

  const handleOpenCalendar = () => {
    setIsOpenCalendar(true)
  }

  const handleCloseCalendar = () => {
    setIsOpenCalendar(false)
  }

  useEffect(() => {
    setDateObj(date)
  }, [date])

  useEffect(() => {
    const closeHandler = (e: MouseEvent) => {
      if (
        CalendarRef.current &&
        !CalendarRef.current.contains(e.target as Node)
      ) {
        handleCloseCalendar()
      }
    }

    window.addEventListener('click', closeHandler)

    return () => window.removeEventListener('click', closeHandler)
  }, [])

  const onChangeMonth = (type: 'prev' | 'next') => {
    if (type === 'prev') changePrevMonth()
    else changeNextMonth()
  }

  const handleSelectDate = (_date: number) => {
    setDate(_date)

    const beforeDate = new Date(getDateObj())
    const newDate = new Date(
      beforeDate.getFullYear(),
      beforeDate.getMonth(),
      _date,
      getHour(),
      getMinute(),
      getSeconds(),
    )
    onChange(newDate)
    handleCloseCalendar()
  }

  const firstYear = new Date(0).getFullYear()
  const allYearsData = Array.from(
    {
      length: new Date().getFullYear() - firstYear + 1,
    },
    (_, i) => firstYear + i,
  )
  const allMonthData = Array.from({ length: 12 }, (_, i) => i + 1)
  const allDateData = Array.from({ length: getLastDate() }, (_, i) => i + 1)
  const allHours = Array.from({ length: 24 }, (_, i) => i + 1)
  const allMinute = Array.from({ length: 59 }, (_, i) => i)
  const allSeconds = Array.from({ length: 59 }, (_, i) => i)

  return (
    <Wrap flex={flex} ref={CalendarRef}>
      <DateBox onClick={handleOpenCalendar}>
        <Text text={format(viewDateType)} />
        <Img
          src={calendar}
          width={20}
          height={20}
          invertImgColor={isDarkMode}
        />
      </DateBox>
      {isOpenCalendar && (
        <CalendarBox>
          <SelectWrap>
            <SelectBox
              width={80}
              contents={allYearsData}
              selectContent={getYear()}
              onChange={(e) => setYear(Number(e.currentTarget.value))}
            />
            <SelectBox
              width={50}
              contents={allMonthData}
              selectContent={getMonth()}
              onChange={(e) => setMonth(Number(e.currentTarget.value) - 1)}
            />
            <SelectBox
              width={50}
              contents={allDateData}
              selectContent={getDate()}
              onChange={(e) => {
                setDate(Number(e.currentTarget.value))
                handleCloseCalendar()
              }}
            />
          </SelectWrap>
          <Calendar
            date={getDateObj()}
            height={205}
            dateAlign='center'
            dateFontSize='xs'
            datePadding='xxxs'
            onChangeDate={onChangeMonth}
            handleSelectDate={handleSelectDate}
            smallDateSelectBox
          />
          <SelectWrap>
            <Text text='시간' />
            <SelectBox
              width={50}
              contents={allHours}
              selectContent={getHour()}
              onChange={(e) => setHour(Number(e.currentTarget.value))}
            />
            <Text text=':' />
            <SelectBox
              width={50}
              contents={allMinute}
              selectContent={getMinute()}
              onChange={(e) => setMinute(Number(e.currentTarget.value))}
            />
            <Text text=':' />
            <SelectBox
              width={50}
              contents={allSeconds}
              selectContent={getSeconds()}
              onChange={(e) => setSeconds(Number(e.currentTarget.value))}
            />
          </SelectWrap>
        </CalendarBox>
      )}
    </Wrap>
  )
}

export default DateSelectBox
