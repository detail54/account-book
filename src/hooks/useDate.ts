import { useState } from 'react'

export type TDateFormat =
  | 'YYYY'
  | 'YYYY-MM'
  | 'YYYY-MM-DD'
  | 'YYYY-MM-DD HH:MM'
  | 'YYYY-MM-DD HH:MM:SS'
  | undefined

const useDate = (dateProps?: Date) => {
  const [dateObj, setDateObj] = useState<Date>(dateProps || new Date())

  const getDateObj = () => {
    return dateObj
  }

  const getYear = () => {
    return dateObj.getFullYear()
  }

  const setYear = (year: number) => {
    const beforeDate = new Date(dateObj)
    beforeDate.setFullYear(year)

    setDateObj(beforeDate)
  }

  const getMonth = () => {
    return dateObj.getMonth() + 1
  }

  const setMonth = (month: number) => {
    const beforeDate = new Date(dateObj)
    beforeDate.setMonth(month)

    setDateObj(beforeDate)
  }

  const getDate = () => {
    return dateObj.getDate()
  }

  const setDate = (dateNumber: number) => {
    const beforeDate = new Date(dateObj)
    beforeDate.setDate(dateNumber)

    setDateObj(beforeDate)
  }

  const getHour = () => {
    return dateObj.getHours()
  }

  const setHour = (hour: number) => {
    const beforeDate = new Date(dateObj)
    beforeDate.setHours(hour)

    setDateObj(beforeDate)
  }

  const getMinute = () => {
    return dateObj.getMinutes()
  }

  const setMinute = (minute: number) => {
    const beforeDate = new Date(dateObj)
    beforeDate.setMinutes(minute)

    setDateObj(beforeDate)
  }

  const getSeconds = () => {
    return dateObj.getSeconds()
  }

  const setSeconds = (seconds: number) => {
    const beforeDate = new Date(dateObj)
    beforeDate.setSeconds(seconds)

    setDateObj(beforeDate)
  }

  const getLastDate = () => {
    return new Date(dateObj.getFullYear(), dateObj.getMonth(), 0).getDate()
  }

  const changeNextMonth = () => {
    if (dateObj.getMonth() === 11) {
      setDateObj(
        new Date(
          dateObj.getFullYear() + 1,
          0,
          1,
          dateObj.getHours(),
          dateObj.getMinutes(),
          dateObj.getSeconds(),
        ),
      )
    } else {
      setDateObj(
        new Date(
          dateObj.getFullYear(),
          dateObj.getMonth() + 1,
          1,
          dateObj.getHours(),
          dateObj.getMinutes(),
          dateObj.getSeconds(),
        ),
      )
    }
  }

  const changePrevMonth = () => {
    if (dateObj.getMonth() === 0) {
      setDateObj(
        new Date(
          dateObj.getFullYear() - 1,
          11,
          1,
          dateObj.getHours(),
          dateObj.getMinutes(),
          dateObj.getSeconds(),
        ),
      )
    } else {
      setDateObj(
        new Date(
          dateObj.getFullYear(),
          dateObj.getMonth() - 1,
          1,
          dateObj.getHours(),
          dateObj.getMinutes(),
          dateObj.getSeconds(),
        ),
      )
    }
  }

  const format = (type: TDateFormat) => {
    const leftPad = (value: number) => {
      return value < 10 ? `0${value}` : `${value}`
    }

    const year = dateObj.getFullYear().toString()
    const month = leftPad(dateObj.getMonth() + 1)
    const day = leftPad(dateObj.getDate())
    const hour = leftPad(dateObj.getHours())
    const minute = leftPad(dateObj.getMinutes())
    const second = leftPad(dateObj.getSeconds())

    switch (type) {
      case 'YYYY':
        return year
      case 'YYYY-MM':
        return [year, month].join('-')
      case 'YYYY-MM-DD':
        return [year, month, day].join('-')
      case 'YYYY-MM-DD HH:MM':
        return `${[year, month, day].join('-')} ${[hour, minute].join(':')}`
      case 'YYYY-MM-DD HH:MM:SS':
        return `${[year, month, day].join('-')} ${[hour, minute, second].join(
          ':',
        )}`
      default:
        return dateObj.toString()
    }
  }

  return {
    getDateObj,
    setDateObj,
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
    getLastDate,
    changeNextMonth,
    changePrevMonth,
    format,
  }
}

export default useDate
