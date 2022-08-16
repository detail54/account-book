import { useState } from 'react'

type TDateFormat =
  | 'YYYY'
  | 'YYYY-MM'
  | 'YYYY-MM-DD'
  | 'YYYY-MM-DD HH:MM'
  | 'YYYY-MM-DD HH:MM:SS'
  | undefined

const useDate = (dateProps?: Date) => {
  const [date, setDate] = useState<Date>(dateProps || new Date())

  const format = (type: TDateFormat) => {
    const leftPad = (value: number) => {
      return value < 10 ? `0${value}` : `${value}`
    }

    const year = date.getFullYear().toString()
    const month = leftPad(date.getMonth() + 1)
    const day = leftPad(date.getDate())
    const hour = leftPad(date.getHours())
    const minute = leftPad(date.getMinutes())
    const second = leftPad(date.getSeconds())

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
        return date.toString()
    }
  }

  const getDateObj = () => {
    return date
  }

  const getYear = () => {
    return date.getFullYear()
  }

  const getMonth = () => {
    return date.getMonth() + 1
  }

  const getDate = () => {
    return date.getDate()
  }

  const getHour = () => {
    return date.getHours()
  }

  const getMinute = () => {
    return date.getMinutes()
  }

  const getSeconds = () => {
    return date.getSeconds()
  }

  const getLastDate = () => {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate()
  }

  const changeNextMonth = () => {
    if (date.getMonth() === 11) {
      setDate(new Date(date.getFullYear() + 1, 0))
    } else {
      setDate(new Date(date.getFullYear(), date.getMonth() + 1))
    }
  }

  const changePrevMonth = () => {
    if (date.getMonth() === 0) {
      setDate(new Date(date.getFullYear() - 1, 11))
    } else {
      setDate(new Date(date.getFullYear(), date.getMonth() - 1))
    }
  }

  return {
    format,
    setDate,
    getDateObj,
    getYear,
    getMonth,
    getDate,
    getHour,
    getMinute,
    getSeconds,
    getLastDate,
    changeNextMonth,
    changePrevMonth,
  }
}

export default useDate
