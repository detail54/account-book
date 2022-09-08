import React from 'react'
// style
import SkeletonStyles from './Skeleton.styles'

interface IProps {
  children: JSX.Element
  isLoading: boolean
  width: number
  height: number
  borderRadius: number
}

const Skeleton: React.FC<IProps> = ({
  children,
  isLoading,
  width,
  height,
  borderRadius,
}) => {
  const { Wrap, AnimationBar, DefaultBox } = SkeletonStyles

  return (
    <>
      {isLoading ? (
        <Wrap height={height} width={width}>
          <DefaultBox borderRadius={borderRadius}>
            <AnimationBar />
          </DefaultBox>
        </Wrap>
      ) : (
        children
      )}
    </>
  )
}

export default Skeleton
