import styled from 'styled-components'

const HeaderEl = styled.header`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.black_1};
  color: ${({ theme }) => theme.fontColors.white};
`

export default HeaderEl
