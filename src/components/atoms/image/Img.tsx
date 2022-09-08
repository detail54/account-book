import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface IProps {
  src: string | StaticImageData
  width: number
  height: number
  invertImgColor?: boolean
}

const Img: React.FC<IProps> = ({ src, width, height, invertImgColor }) => {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      style={
        invertImgColor
          ? {
              filter:
                'invert(100%) sepia(0%) saturate(0%) hue-rotate(176deg) brightness(112%) contrast(101%)',
            }
          : undefined
      }
    />
  )
}

export default Img
