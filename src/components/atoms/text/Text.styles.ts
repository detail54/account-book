import styled, { css, ITextStyleProps } from 'styled-components'

const Text = styled.span<ITextStyleProps>`
  ${({ fontColor, fontSize, paddingY, paddingX, flex, theme }) => css`
    font-weight: 400;
    font-size: ${fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.base};
    color: ${fontColor
      ? theme.fontColors[fontColor]
      : theme.fontColors.themeColor};
    padding-top: ${paddingY && theme.paddings[paddingY]};
    padding-bottom: ${paddingY && theme.paddings[paddingY]};
    padding-left: ${paddingX && theme.paddings[paddingX]};
    padding-right: ${paddingX && theme.paddings[paddingX]};
    flex: ${flex && flex};
  `}
`

const BoldText = styled(Text)`
  font-weight: ${({ theme }) => theme.fontWeight.big};
`

export default {
  Text,
  BoldText,
}
