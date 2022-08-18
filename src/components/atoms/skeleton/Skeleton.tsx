import React from 'react'
// style
import SkeletonStyles from './Skeleton.styles'

interface IProps {
  children: JSX.Element
  isLoading: boolean
  height: number
}

const Skeleton: React.FC<IProps> = ({ children, isLoading, height }) => {
  const { Wrap, AnimationBar, DefaultBox } = SkeletonStyles

  return (
    <Wrap height={height}>
      {isLoading ? (
        <DefaultBox>
          <AnimationBar />
        </DefaultBox>
      ) : (
        children
      )}
    </Wrap>
  )
}

export default Skeleton
