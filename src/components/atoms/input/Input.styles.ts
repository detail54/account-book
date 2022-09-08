/* eslint-disable no-nested-ternary */
import styled, { css, IInputStyleProps } from 'styled-components'

const Input = styled.input<IInputStyleProps>`
  ${({ width, align, paddingY, flex, theme }) => css`
    width: ${width
      ? typeof width === 'number'
        ? theme.calcRem(width)
        : width
      : '100%'};
    border: none;
    color: ${theme.colors.themeColor};
    border-bottom: 1px solid ${theme.colors.themeColor};
    background-color: ${theme.backgroundColor};
    font-size: ${theme.fontSizes.base};
    padding-top: ${paddingY && theme.paddings[paddingY]};
    padding-bottom: ${paddingY && theme.paddings[paddingY]};
    text-align: ${align && align};
    flex: ${flex !== undefined && flex};
  `}

  &:focus {
    outline: none;
  }
`

const BasicInput = styled(Input)`
  font-weight: ${({ theme }) => theme.fontWeight.lg};
`

export default {
  BasicInput,
}
