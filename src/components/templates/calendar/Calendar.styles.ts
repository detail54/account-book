import styled from 'styled-components'

const Wrap = styled.section`
  width: 100%;
  flex-direction: column;
`

const DateBox = styled.div`
  margin-bottom: ${({ theme }) => theme.margins.big};

  span {
    margin: ${({ theme }) => `0 ${theme.margins.md} 0 ${theme.margins.md}`};
  }
`

export default {
  Wrap,
  DateBox,
}
