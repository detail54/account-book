import useAccount from 'hooks/useAccount'
import { NextPage } from 'next'
import React from 'react'

const Detail: NextPage = () => {
  const { getAccount } = useAccount()
  const { data: accountData } = getAccount()
  const memo = accountData?.length && accountData[0].memo
  return <div>{memo}</div>
}

export default Detail
