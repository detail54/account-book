import styled, { css } from 'styled-components'

const Contents = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`

const Content = styled.article`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 10px;
    padding: ${theme.paddings.lg};
    margin-bottom: ${theme.margins.big};
    border: 1px dashed ${theme.colors.themeColor};

    & > input {
      margin-top: ${theme.margins.lg};
    }
  `}
`

export default {
  Contents,
  Content,
}
