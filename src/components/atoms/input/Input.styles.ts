import styled, { css, IStyleProps } from 'styled-components'

const Input = styled.input<IStyleProps>`
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  ${({ paddingY, theme }) => css`
    font-size: ${theme.fontSizes.base};
    padding-top: ${paddingY && theme.paddings[paddingY]};
    padding-bottom: ${paddingY && theme.paddings[paddingY]};
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
