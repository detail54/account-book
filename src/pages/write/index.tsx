import React, { useState } from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
// hook
import useIncome from 'hooks/useIncome'
import useAccount from 'hooks/useAccount'
// type
import { IAddIncome, IAddAccount } from 'config/interface'
// styles
import WriteStyles from './Write.styles'
// components
const AddIncomeNAccountForm = dynamic(
  () => import('components/templates/form/AddIncomeNAccountForm'),
)

const Write: NextPage = () => {
  const router = useRouter()

  const { addIncomes } = useIncome()
  const { addAccounts } = useAccount()
  const incomeMutation = addIncomes()
  const accountMutation = addAccounts()

  const initIncomeData: IAddIncome = {
    amount: '',
    memo: '',
    incomeDt: new Date().toUTCString(),
  }

  const initAccountData: IAddAccount = {
    store: '',
    category: '',
    amount: '',
    memo: '',
    paymentDt: new Date().toUTCString(),
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

  const removeListItem = (type: 'income' | 'account', index: number) => {
    if (type === 'income') {
      const beforeData = [...addIncomeDatas]
      beforeData.splice(index, 1)

      setAddIncomeDatas(beforeData)
    } else {
      const beforeData = [...addAccountData]
      beforeData.splice(index, 1)

      setAddAcountDatas(beforeData)
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

  const onSubmit = async () => {
    const incomeDatas = addIncomeDatas.filter((data) => data.amount !== '')
    const accountDatas = addAccountData.filter((data) => data.amount !== '')

    if (incomeDatas.length) await incomeMutation.mutateAsync(incomeDatas)
    if (accountDatas.length) await accountMutation.mutateAsync(accountDatas)

    router.push('detail')
  }

  return (
    <Wrap>
      <AddIncomeNAccountForm
        addIncomeDatas={addIncomeDatas}
        addAccountData={addAccountData}
        addList={addList}
        removeListItem={removeListItem}
        handleChangeData={handleChangeData}
        onSubmit={onSubmit}
      />
    </Wrap>
  )
}

export default Write
