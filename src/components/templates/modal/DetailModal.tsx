import React, { useState } from 'react'
import dynamic from 'next/dynamic'
// type
import { IAccount, IIncome } from 'config/interface'
// style
import DetailModalStyles from './DetailModal.styles'
// components
const Modal = dynamic(() => import('components/organisms/modal/Modal'))
const Button = dynamic(() => import('components/atoms/button/Button'))
const DetailModalContents = dynamic(() => import('./DetailModalContents'))

interface IProps {
  open: boolean
  header: string
  data?: IAccount | IIncome
  incomeItemNames: Record<keyof Omit<IIncome, 'id'>, string>
  accountItemNames: Record<keyof Omit<IAccount, 'id'>, string>
  handleChangeData: (data: IAccount | IIncome) => void
  onClose: () => void
}

const DetailModal: React.FC<IProps> = ({
  open,
  header,
  data,
  incomeItemNames,
  accountItemNames,
  handleChangeData,
  onClose,
}) => {
  const { Contents } = DetailModalStyles
  const [modalData, setModalData] = useState<IAccount | IIncome | undefined>(
    data,
  )
  const [isReviseMode, setIsReviseMode] = useState<boolean>(false)

  const handleChangeModalData = (key: string, value: string) => {
    if (modalData) {
      setModalData({
        ...modalData,
        [key]: value,
      })
    }
  }

  const handleChangeButtonAttr = () => {
    if (!isReviseMode) {
      setIsReviseMode(true)
    } else if (modalData) {
      handleChangeData({
        ...modalData,
        amount: Number(String(modalData.amount).replace(/,/g, '')),
      })
    }
  }

  const buttons = [
    <Button
      key='수정버튼'
      content={isReviseMode ? '완료' : '수정하기'}
      onClick={handleChangeButtonAttr}
    />,
    <Button key='닫기버튼' content='닫기' onClick={onClose} />,
  ]

  return (
    <Modal
      isOpen={open}
      header={isReviseMode ? `${header} (수정중)` : header}
      onClose={onClose}
      buttons={buttons}
    >
      <Contents>
        <DetailModalContents
          isReviseMode={isReviseMode}
          modalData={modalData}
          incomeItemNames={incomeItemNames}
          accountItemNames={accountItemNames}
          handleChangeModalData={handleChangeModalData}
        />
      </Contents>
    </Modal>
  )
}

export default DetailModal
