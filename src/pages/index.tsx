import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
// hook
import { useSession } from 'hooks/useSession'
import useDate from 'hooks/useDate'
// style
import Wrap from './index.styles'
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

const Home: NextPage = () => {
  const { data: session } = useSession()
  const { date, changeNextMonth, changePrevMonth } = useDate()

  const onChangeDate = (type: 'prev' | 'next') => {
    if (type === 'next') changeNextMonth()
    else changePrevMonth()
  }

  if (!session) return <></>

  return (
    <Wrap>
      <Calendar date={date} contents={data} onChangeDate={onChangeDate} />
    </Wrap>
  )
}

export default Home
