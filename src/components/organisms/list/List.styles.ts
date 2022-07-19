import styled, { css, IStyleProps } from 'styled-components'

const List = styled.ul<IStyleProps>`
  ${({ paddingX, paddingY, theme }) => css`
    padding-top: ${paddingY && theme.paddings[paddingY]};
    padding-bottom: ${paddingY && theme.paddings[paddingY]};
    padding-left: ${paddingX && theme.paddings[paddingX]};
    padding-right: ${paddingX && theme.paddings[paddingX]};
  `}
  flex-direction: column;

  li:nth-child(1) {
    border-top: 1px solid black;
  }

  li:nth-last-child(1) {
    border: none;
  }
`

export default {
  List,
}
