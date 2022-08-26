import styled, { css, ICalendarStyleProps } from 'styled-components'

const Wrap = styled.section<ICalendarStyleProps>`
  ${({ theme, height }) => css`
    width: 100%;
    flex-direction: column;
    height: ${height && theme.calcRem(height)};
  `}
`

const DateBox = styled.div<ICalendarStyleProps>`
  ${({ theme, smallDateSelectBox }) => css`
    margin-bottom: ${smallDateSelectBox ? theme.margins.sm : theme.margins.big};

    & span {
      margin: ${`0 ${theme.margins.md} 0 ${theme.margins.md}`};
    }
  `}
`

export default {
  Wrap,
  DateBox,
}
