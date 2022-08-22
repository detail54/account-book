import styled, { css, ISkeletonStyleProps, keyframes } from 'styled-components'

const Wrap = styled.div<ISkeletonStyleProps>`
  ${({ theme, width, height }) => css`
    width: ${width && typeof width === 'number' ? theme.calcRem(width) : width};
    height: ${height && typeof height === 'number'
      ? theme.calcRem(height)
      : height};
  `}
`

const loading = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50%,
  100% {
    transform: translateX(100%);
  }
`

const AnimationBar = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${loading} 2s infinite linear;
  ${({ theme }) => css`
    background: ${`linear-gradient(to right, ${theme.colors.grey_1}, ${theme.colors.grey_2}, ${theme.colors.grey_4}, ${theme.colors.grey_2}, ${theme.colors.grey_1})`};
  `}
`

const DefaultBox = styled.div<ISkeletonStyleProps>`
  ${({ theme, borderRadius }) => css`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    border-radius: ${borderRadius && theme.calcRem(borderRadius)};
    background-color: ${theme.colors.white};
  `}
`

export default {
  Wrap,
  AnimationBar,
  DefaultBox,
}
