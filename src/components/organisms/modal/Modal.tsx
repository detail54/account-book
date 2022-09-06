import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
// style
import ModalStyles from './Modal.styles'
// image
import close from '../../../../public/assets/images/icon/close.png'
// component
const Title = dynamic(() => import('components/atoms/title/Title'))
const ImgButton = dynamic(() => import('components/atoms/button/ImgButton'))

interface IProps {
  isOpen: boolean
  header?: string
  children: JSX.Element
  onClose: () => void
}

const Modal: React.FC<IProps> = ({ isOpen, header, children, onClose }) => {
  const { Wrap, CloseButtonWrap, Blind } = ModalStyles
  const modalRef = useRef<HTMLDivElement>(null)

  return (
    <>
      {isOpen && (
        <>
          <Wrap ref={modalRef}>
            <CloseButtonWrap>
              <ImgButton
                src={close}
                width={15}
                height={15}
                onClick={onClose}
                invertImgColor
              />
            </CloseButtonWrap>
            {header && <Title text={header} />}
            {children}
          </Wrap>
          <Blind blindBg={isOpen} onClick={onClose} />
        </>
      )}
    </>
  )
}

export default Modal
