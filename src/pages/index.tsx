import type { NextPage } from 'next'
import { useSession } from 'hooks/useSession'
import Calendar from 'components/templates/calendar/Calendar'
import Wrap from './index.styles'

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

  if (!session) return <></>

  return (
    <Wrap>
      <Calendar date='2022-07' contents={data} />
    </Wrap>
  )
}

export default Home
