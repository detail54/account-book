import styled, { css, IButtonStyleProps } from 'styled-components'

const Button = styled.button<IButtonStyleProps>`
  ${({
    size,
    fontColor,
    bgColor,
    marginX,
    marginY,
    paddingX,
    paddingY,
    theme,
  }) => css`
    width: ${theme.buttonWidth[size]};
    height: ${theme.buttonHeight[size]};
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
  border: 1px solid black;
`

const RoundButton = styled(Button)`
  border: 1px solid black;
  border-radius: ${(props) => props.theme.calcRem(10)};
`

export default {
  BasicButton,
  RoundButton,
}
