import styled, { IStyleProps } from 'styled-components'

const Wrap = styled.div<IStyleProps>`
  width: 100%;
  height: ${({ theme, height }) => height && theme.calcRem(height)};
`

const AnimationBar = styled.div`
  width: 10%;
  height: 100%;
  position: absolute;
`

const DefaultBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.colors.grey_1}, ${theme.colors.white}, ${theme.colors.grey_1}`};
`

export default {
  Wrap,
  AnimationBar,
  DefaultBox,
}
