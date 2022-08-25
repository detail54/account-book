import styled from 'styled-components'

const Wrap = styled.div`
  width: 100%;
  flex-direction: column;
`

const Form = styled.form`
  width: 90%;
  display: flex;
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

  & > span {
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

const ListItemContentWrap = styled.div`
  width: 100%;
  justify-content: space-between;
`

const ListItemContent = styled.div`
  width: 100%;
  justify-content: space-around;

  & > input {
    width: 80%;
    margin: ${({ theme }) => `0 ${theme.margins.xxs}`};
  }
`

export default {
  Wrap,
  Form,
  Section,
  Buttons,
  ListItemContentWrap,
  ListItemContent,
}
