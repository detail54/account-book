import React from 'react'
import dynamic from 'next/dynamic'
// hook
import useDate from 'hooks/useDate'
// type
import { IAccount, IIncome } from 'config/interface'
// style
import DetailModalStyles from './DetailModal.styles'
// components
const Title = dynamic(() => import('components/atoms/title/Title'))
const Input = dynamic(() => import('components/atoms/input/Input'))

interface IProps {
  isReviseMode: boolean
  modalData?: IAccount | IIncome
  incomeItemNames: Record<keyof Omit<IIncome, 'id'>, string>
  accountItemNames: Record<keyof Omit<IAccount, 'id'>, string>
  handleChangeModalData: (key: string, value: string) => void
}

const DetailModalContents: React.FC<IProps> = ({
  isReviseMode,
  modalData,
  incomeItemNames,
  accountItemNames,
  handleChangeModalData,
}) => {
  const { Contents, Content } = DetailModalStyles

  const date =
    modalData && 'store' in modalData
      ? modalData.paymentDt
      : modalData?.incomeDt
  const { format } = useDate(date && new Date(date))

  const formatValue = (value?: number | string | Date | null) => {
    if (value === date) {
      return format('YYYY-MM-DD HH:MM:SS')
    }

    switch (typeof value) {
      case 'string':
        return value
      case 'number':
        return value.toLocaleString()
      default:
        return value ? new Date(value).toLocaleString() : ''
    }
  }

  type TAccountKeys = keyof Omit<IAccount, 'id'>
  type TIncomeKeys = keyof Omit<IIncome, 'id'>

  const itemNames =
    modalData && 'store' in modalData
      ? Object.values(accountItemNames)
      : Object.values(incomeItemNames)

  const content =
    modalData && 'store' in modalData ? (
      <>
        {Object.keys(accountItemNames).map((item, index) => {
          const accountData = modalData as IAccount
          const dataKey = item as TAccountKeys

          return (
            <Content key={`지출상세-${dataKey}`}>
              <Title type='H6' text={itemNames[index]} />
              <Input
                value={accountData ? formatValue(accountData[dataKey]) : ''}
                onChange={(e) =>
                  handleChangeModalData(item, e.currentTarget.value)
                }
                readOnly={!isReviseMode}
              />
            </Content>
          )
        })}
      </>
    ) : (
      <>
        {Object.keys(incomeItemNames).map((item, index) => {
          const incomeData = modalData as IIncome
          const dataKey = item as TIncomeKeys

          return (
            <Content key={`지출상세-${dataKey}`}>
              <Title type='H6' text={itemNames[index]} />
              <Input
                value={incomeData ? formatValue(incomeData[dataKey]) : ''}
                onChange={(e) =>
                  handleChangeModalData(item, e.currentTarget.value)
                }
                readOnly={!isReviseMode}
              />
            </Content>
          )
        })}
      </>
    )

  return <Contents>{content}</Contents>
}

export default DetailModalContents
