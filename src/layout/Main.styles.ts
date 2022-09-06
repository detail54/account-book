import styled, { css } from 'styled-components'

const MainEl = styled.main`
  width: 100%;
  height: 100%;
  justify-content: center;
  ${({ theme }) => css`
    padding: ${theme.paddings.big};
  `}

  & > div {
    max-width: 1560px;
  }
`

export default {
  MainEl,
}
