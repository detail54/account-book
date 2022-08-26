/* eslint-disable no-nested-ternary */
import styled, { css, ISelectStyleProps } from 'styled-components'

const Select = styled.select<ISelectStyleProps>`
  ${({ theme, width }) => css`
    width: ${width
      ? typeof width === 'string'
        ? width
        : theme.calcRem(width)
      : '100%'};
    padding: ${`${theme.paddings.xxxs} ${theme.paddings.xxs}`};

    &::-ms-expand {
      display: none;
    }
  `}
`

const Option = styled.option`
  width: 100%;
`

export default {
  Select,
  Option,
}
