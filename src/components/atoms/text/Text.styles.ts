import styled, { css, ITextStyleProps } from 'styled-components'

const Text = styled.span<ITextStyleProps>`
  ${({ fontColor, fontSize, paddingY, flex, theme }) => css`
    font-size: ${fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.base};
    color: ${fontColor
      ? theme.fontColors[fontColor]
      : theme.fontColors.themeColor};
    padding-top: ${paddingY && theme.paddings[paddingY]};
    padding-bottom: ${paddingY && theme.paddings[paddingY]};
    flex: ${flex && flex};
  `}
`

const BoldText = styled(Text)`
  font-weight: ${({ theme }) => theme.fontWeight.xl};
`

export default {
  Text,
  BoldText,
}
