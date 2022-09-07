import styled, { css, IDateSelectBoxStyleProps } from 'styled-components'

const Wrap = styled.div<IDateSelectBoxStyleProps>`
  width: 100%;
  position: relative;
  flex: ${({ flex }) => flex && flex};
`

const DateBox = styled.div<IDateSelectBoxStyleProps>`
  ${({ theme, align }) => css`
    width: 100%;
    cursor: pointer;
    justify-content: ${align && align};

    & > span:nth-of-type(1) {
      margin-right: ${theme.margins.md};
    }
  `}
`

const CalendarBox = styled.div`
  ${({ theme }) => css`
    width: 270px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    flex-direction: column;
    justify-content: left;
    box-shadow: ${theme.boxShadow};
    background-color: ${theme.backgroundColor};
  `}
`

const SelectWrap = styled.div`
  ${({ theme }) => css`
    width: 100%;
    justify-content: space-around;
    padding-top: ${theme.paddings.md};
    padding-bottom: ${theme.paddings.md};
    padding-right: ${theme.paddings.xl};
    padding-left: ${theme.paddings.xl};

    & > select {
      margin: ${`0 ${theme.margins.xxs}`};
    }

    & > span:nth-of-type(1) {
      margin-right: ${theme.margins.xl};
    }
  `}
`

export default {
  Wrap,
  DateBox,
  CalendarBox,
  SelectWrap,
}
