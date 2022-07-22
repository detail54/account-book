import styled from 'styled-components'

const HeaderEl = styled.header`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.black_1};
  color: ${({ theme }) => theme.fontColors.white};
  align-items: center;
  justify-content: space-between;
`

const UserInfo = styled.h3`
  width: 70%;
  margin-left: ${({ theme }) => theme.margins.md};
`

export default {
  HeaderEl,
  UserInfo,
}
