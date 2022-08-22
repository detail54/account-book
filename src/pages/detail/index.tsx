import useAccount from 'hooks/useAccount'
import { NextPage } from 'next'
import React from 'react'
import { useRecoilState } from 'recoil'
// store
import { selectDashBoardDateState } from 'store/atoms'

const Detail: NextPage = () => {
  const [selectDate, setSelectDate] = useRecoilState(selectDashBoardDateState)
  const { getAccount } = useAccount()
  const { data: accountData } = getAccount(selectDate)
  const memo = accountData?.length && accountData[0].memo
  return (
    <div>
      {accountData &&
        accountData.map((data) => <div key={data.id}>{data.amount}</div>)}
    </div>
  )
}

export default Detail
