import styled from 'styled-components'

const MainEl = styled.main`
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: ${({ theme }) => `0 ${theme.paddings.big}`};

  & > div {
    max-width: 1560px;
  }
`

export default MainEl
