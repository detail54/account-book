import styled, {
  css,
  IButtonStyleProps,
  IImgButtonStyleProps,
} from 'styled-components'

const Button = styled.button<IButtonStyleProps>`
  ${({
    size,
    fontColor,
    fontSize,
    bgColor,
    marginX,
    marginY,
    paddingX,
    paddingY,
    theme,
  }) => css`
    width: ${theme.buttonWidth[size]};
    height: ${theme.buttonHeight[size]};
    font-size: ${fontSize && theme.fontSizes[fontSize]};
    color: ${fontColor ? theme.fontColors[fontColor] : theme.fontColors.black};
    background-color: ${bgColor ? theme.colors[bgColor] : theme.colors.white};
    padding-top: ${paddingY && theme.paddings[paddingY]};
    padding-bottom: ${paddingY && theme.paddings[paddingY]};
    padding-left: ${paddingX && theme.paddings[paddingX]};
    padding-right: ${paddingX && theme.paddings[paddingX]};
    margin-top: ${marginY && theme.margins[marginY]};
    margin-bottom: ${marginY && theme.margins[marginY]};
    margin-left: ${marginX && theme.margins[marginX]};
    margin-right: ${marginX && theme.margins[marginX]};
    align-items: center;
    justify-content: center;
  `}
`

const BasicButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.black_4};
`

const RoundButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.black_4};
  border-radius: ${(props) => props.theme.calcRem(10)};
`

const ImgButton = styled.button<IImgButtonStyleProps>`
  ${({ theme, marginX, marginY, invertImgColor }) => css`
    margin-top: ${marginY && theme.margins[marginY]};
    margin-bottom: ${marginY && theme.margins[marginY]};
    margin-left: ${marginX && theme.margins[marginX]};
    margin-right: ${marginX && theme.margins[marginX]};
    background-color: Transparent;
    border: none;
    filter: ${invertImgColor &&
    'invert(100%) sepia(0%) saturate(0%) hue-rotate(176deg) brightness(112%) contrast(101%)'};
  `}

  transition: 0.3s;
`

export default {
  BasicButton,
  RoundButton,
  ImgButton,
}
