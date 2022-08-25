import styled, { css } from 'styled-components'

const Wrap = styled.div`
  width: 100%;
  justify-content: space-evenly;
  align-items: flex-start;

  & > section:nth-of-type(1) {
    flex: 1;
  }

  & > section:nth-of-type(2) {
    flex: 2;
  }

  & > section:nth-of-type(3) {
    flex: 2.5;
  }
`

const Section = styled.section`
  ${({ theme }) => css`
    flex-direction: column;
    align-items: center;
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
