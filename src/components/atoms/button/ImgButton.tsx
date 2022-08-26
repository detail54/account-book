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
  invertImgColor?: boolean
  flex?: number
  onClick?: () => void
}

const ImgButton: React.FC<IProps> = ({
  src,
  width,
  height,
  marginY,
  marginX,
  invertImgColor,
  flex,
  onClick = () => {},
}) => {
  const ButtonEl = Buttons.ImgButton
  return (
    <ButtonEl
      marginX={marginX}
      marginY={marginY}
      invertImgColor={invertImgColor && invertImgColor}
      flex={flex}
      onClick={onClick}
    >
      <Image src={src} width={width} height={height} />
    </ButtonEl>
  )
}

export default ImgButton
