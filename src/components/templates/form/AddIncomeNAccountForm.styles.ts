import styled from 'styled-components'

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const SectionWrap = styled.div`
  width: 100%;

  align-items: flex-start;
  & > section:nth-of-type(1) {
    margin-right: ${({ theme }) => theme.margins.big};
    flex: 1;
  }

  & > section:nth-of-type(2) {
    flex: 1.5;
  }
`

const Section = styled.section`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;

  & > h3 {
    margin-bottom: ${({ theme }) => theme.margins.md};
  }
`

const Buttons = styled.div`
  width: 100%;
  justify-content: right;

  & > button {
    margin: ${({ theme }) => `0 ${theme.margins.md}`};
  }
`

const ListItemContent = styled.div`
  width: 100%;
  justify-content: space-around;

  & > * {
    width: 100%;
    margin: ${({ theme }) => `0 ${theme.margins.xxs}`};
  }
`

export default {
  Form,
  SectionWrap,
  Section,
  Buttons,
  ListItemContent,
}
