import React, { useState } from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
// type
import { IAddIncome, IAddAccount } from 'config/interface'
// styles
import WriteStyles from './Write.styles'
// components
const AddIncomeNAccountForm = dynamic(
  () => import('components/templates/form/AddIncomeNAccountForm'),
)

const Write: NextPage = () => {
  const initIncomeData: IAddIncome = {
    amount: '',
    memo: '',
    incomeDt: '',
  }

  const initAccountData: IAddAccount = {
    store: '',
    category: '',
    amount: '',
    memo: '',
    paymentDt: '',
  }

  const [addIncomeDatas, setAddIncomeDatas] = useState<IAddIncome[]>([])
  const [addAccountData, setAddAcountDatas] = useState<IAddAccount[]>([])

  const { Wrap } = WriteStyles

  const addList = (type: 'income' | 'account') => {
    if (type === 'income') {
      setAddIncomeDatas([...addIncomeDatas, initIncomeData])
    } else {
      setAddAcountDatas([...addAccountData, initAccountData])
    }
  }

  const handleChangeData = (
    type: 'income' | 'account',
    index: number,
    key: string,
    value: string | number,
  ) => {
    if (type === 'income') {
      const beforeData = [...addIncomeDatas]
      beforeData[index] = {
        ...beforeData[index],
        [key]: value,
      }

      setAddIncomeDatas(beforeData)
    } else {
      const beforeData = [...addAccountData]
      beforeData[index] = {
        ...beforeData[index],
        [key]: value,
      }

      setAddAcountDatas(beforeData)
    }
  }

  const onSubmit = () => {}

  return (
    <Wrap>
      <AddIncomeNAccountForm
        addIncomeDatas={addIncomeDatas}
        addAccountData={addAccountData}
        addList={addList}
        handleChangeData={handleChangeData}
        onSubmit={onSubmit}
      />
    </Wrap>
  )
}

export default Write
