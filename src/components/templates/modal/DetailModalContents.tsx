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
const DateSelectBox = dynamic(() => import('../dateSelectBox/DateSelectBox'))

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
        return isReviseMode ? value.toString() : value.toLocaleString()
      default:
        return value ? new Date(value).toLocaleString() : ''
    }
  }

  const itemNames =
    modalData && 'store' in modalData
      ? Object.values(accountItemNames)
      : Object.values(incomeItemNames)

  const content =
    modalData && 'store' in modalData ? (
      <>
        {Object.keys(accountItemNames).map((item, index) => {
          const accountData = modalData as IAccount
          const dataKey = item as keyof Omit<IAccount, 'id'>

          return (
            <Content key={`지출상세-${dataKey}`}>
              <Title type='H6' text={itemNames[index]} />
              {isReviseMode && index === 0 ? (
                <DateSelectBox
                  date={new Date(accountData.paymentDt)}
                  viewDateType='YYYY-MM-DD HH:MM:SS'
                  onChange={(_date: Date) =>
                    handleChangeModalData(item, _date.toISOString())
                  }
                  align='left'
                />
              ) : (
                <Input
                  value={accountData ? formatValue(accountData[dataKey]) : ''}
                  onChange={(e) =>
                    handleChangeModalData(item, e.currentTarget.value)
                  }
                  readOnly={!isReviseMode}
                />
              )}
            </Content>
          )
        })}
      </>
    ) : (
      <>
        {Object.keys(incomeItemNames).map((item, index) => {
          const incomeData = modalData as IIncome
          const dataKey = item as keyof Omit<IIncome, 'id'>

          return (
            <Content key={`지출상세-${dataKey}`}>
              <Title type='H6' text={itemNames[index]} />
              {isReviseMode && index === 0 ? (
                <DateSelectBox
                  date={new Date(incomeData.incomeDt)}
                  viewDateType='YYYY-MM-DD HH:MM:SS'
                  onChange={(_date: Date) =>
                    handleChangeModalData(item, _date.toISOString())
                  }
                  align='left'
                />
              ) : (
                <Input
                  value={incomeData ? formatValue(incomeData[dataKey]) : ''}
                  onChange={(e) =>
                    handleChangeModalData(item, e.currentTarget.value)
                  }
                  readOnly={!isReviseMode}
                />
              )}
            </Content>
          )
        })}
      </>
    )

  return <Contents>{content}</Contents>
}

export default DetailModalContents
