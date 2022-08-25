import { NextPage } from 'next'
import React, { useState } from 'react'
// type
import { IIncome, IAccount } from 'config/interface'

const Write: NextPage = () => {
  const [addIncomDatas, setAddIncomeDatas] = useState<IIncome[]>([])
  const [addAccountData, setAddAcountDatas] = useState<IAccount[]>([])

  const handleChangeData = () => {}

  return <div>index</div>
}

export default Write
