/* eslint-disable no-nested-ternary */
import styled, { css, IInputStyleProps } from 'styled-components'

const Input = styled.input<IInputStyleProps>`
  ${({ width, paddingY, flex, theme }) => css`
    width: ${width
      ? typeof width === 'number'
        ? theme.calcRem(width)
        : width
      : '100%'};
    border: none;
    border-bottom: 1px solid ${theme.colors.black_4};
    font-size: ${theme.fontSizes.base};
    padding-top: ${paddingY && theme.paddings[paddingY]};
    padding-bottom: ${paddingY && theme.paddings[paddingY]};
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
