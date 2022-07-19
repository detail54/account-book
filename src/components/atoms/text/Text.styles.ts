import styled, { css, IStyleProps } from 'styled-components'

const Text = styled.span<IStyleProps>`
  ${({ fontColor, fontSize, paddingY, theme }) => css`
    font-size: ${fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.base};
    color: ${fontColor ? theme.fontColors[fontColor] : theme.fontColors.black};
    padding-top: ${paddingY && theme.paddings[paddingY]};
    padding-bottom: ${paddingY && theme.paddings[paddingY]};
  `}
`

const BoldText = styled(Text)`
  font-weight: ${({ theme }) => theme.fontWeight.xl};
`

export default {
  Text,
  BoldText,
}
