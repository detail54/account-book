import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
// store
import { useRecoilState } from 'recoil'
import { themeState } from 'store/atoms'
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
  buttons?: JSX.Element[]
}

const Modal: React.FC<IProps> = ({
  isOpen,
  header,
  children,
  onClose,
  buttons,
}) => {
  const { Wrap, ButtonWrap, Blind } = ModalStyles
  const modalRef = useRef<HTMLDivElement>(null)
  const [isDarkMode] = useRecoilState(themeState)

  return (
    <>
      {isOpen && (
        <>
          <Wrap ref={modalRef}>
            <ButtonWrap align='right'>
              <ImgButton
                src={close}
                width={15}
                height={15}
                onClick={onClose}
                invertImgColor={isDarkMode}
              />
            </ButtonWrap>
            {header && <Title text={header} />}
            {children}
            {buttons && (
              <ButtonWrap>{buttons.map((button) => button)}</ButtonWrap>
            )}
          </Wrap>
          <Blind blindBg={isOpen} onClick={onClose} />
        </>
      )}
    </>
  )
}

export default Modal
