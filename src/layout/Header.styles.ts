import styled, { css } from 'styled-components'

const HeaderEl = styled.header`
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => css`
    background-color: ${theme.colors.black_1};
    color: ${theme.fontColors.white};
    padding-top: ${theme.paddings.sm};
    padding-bottom: ${theme.paddings.sm};
  `}
`

const UserInfo = styled.h3`
  width: 70%;
  margin-left: ${({ theme }) => theme.margins.md};
`

const Buttons = styled.div`
  justify-content: space-around;
  margin-right: 15px;
  button {
    flex: 1;
  }
`

export default {
  HeaderEl,
  UserInfo,
  Buttons,
}
