import React from 'react'
// interface
import Image, { StaticImageData } from 'next/image'
import { TSize } from 'styled-components'
// style
import Buttons from './Button.styles'

interface IProps {
  src: string | StaticImageData
  width: number
  height: number
  marginY?: TSize<'zero'>
  marginX?: TSize<'zero'>
  onClick: () => void
}

const ImgButton: React.FC<IProps> = ({
  src,
  width,
  height,
  marginY,
  marginX,
  onClick,
}) => {
  const ButtonEl = Buttons.ImgButton
  return (
    <ButtonEl marginX={marginX} marginY={marginY} onClick={onClick}>
      <Image src={src} width={width} height={height} />
    </ButtonEl>
  )
}

ImgButton.defaultProps = {
  marginY: undefined,
  marginX: undefined,
}

export default ImgButton
