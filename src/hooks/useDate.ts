import { useState } from 'react'

const useDate = () => {
  const [date, setDate] = useState<Date>(new Date())

  const changeNextMonth = () => {
    let changeDate
    if (date.getMonth() === 11) {
      changeDate = new Date(date.getFullYear() + 1, 0)
    } else {
      changeDate = new Date(date.getFullYear(), date.getMonth() + 1)
    }
    setDate(changeDate)
  }

  const changePrevMonth = () => {
    let changeDate
    if (date.getMonth() === 0) {
      changeDate = new Date(date.getFullYear() - 1, 11)
    } else {
      changeDate = new Date(date.getFullYear(), date.getMonth() - 1)
    }
    setDate(changeDate)
  }
  return {
    date,
    changeNextMonth,
    changePrevMonth,
  }
}

export default useDate
