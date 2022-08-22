import styled from 'styled-components'

const Wrap = styled.div`
  width: 100%;
  height: auto;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.paddings.big};
`

const TotalInfo = styled.div`
  width: 100%;
  justify-content: left;
  margin-bottom: ${({ theme }) => theme.margins.md};

  & span:nth-child(odd) {
    margin-right: ${({ theme }) => theme.margins.sm};
  }
  & span:nth-child(even) {
    margin-right: ${({ theme }) => theme.margins.md};
  }
`

export default {
  Wrap,
  TotalInfo,
}
