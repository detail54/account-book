import styled from 'styled-components'

const MainEl = styled.main`
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: ${({ theme }) => theme.paddings.big};
  padding-bottom: 0;
  margin-bottom: ${({ theme }) => theme.margins.big};

  & > div {
    max-width: 1560px;
  }
`

export default MainEl
