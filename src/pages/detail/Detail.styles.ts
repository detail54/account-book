import styled, { css } from 'styled-components'

const Wrap = styled.div`
  width: 100%;
  justify-content: space-evenly;
`

const Section = styled.section`
  ${({ theme }) => css`
    flex-direction: column;
    flex: 1;
    margin: ${theme.margins.big};

    & > span {
      margin-bottom: ${theme.margins.xl};
    }
  `}
`

const ListItemContentWrap = styled.div`
  width: 100%;
  justify-content: space-between;
`

const ListItemContent = styled.div`
  width: 100%;
  justify-content: left;
`

export default {
  Wrap,
  Section,
  ListItemContentWrap,
  ListItemContent,
}
