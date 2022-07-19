import styled, { css, IStyleProps } from 'styled-components'

const ListItem = styled.li<IStyleProps>`
  ${({ fontColor, bgColor, paddingX, paddingY, theme }) => css`
    color: ${fontColor ? theme.fontColors[fontColor] : theme.fontColors.black};
    background-color: ${bgColor ? theme.colors[bgColor] : theme.colors.white};
    padding-top: ${paddingY && theme.paddings[paddingY]};
    padding-bottom: ${paddingY && theme.paddings[paddingY]};
    padding-left: ${paddingX && theme.paddings[paddingX]};
    padding-right: ${paddingX && theme.paddings[paddingX]};
  `}
  border-bottom: 1px solid black;
`

const LeftListItem = styled(ListItem)`
  justify-content: left;
`

const NumberListItem = styled(LeftListItem)`
  span:nth-child(1) {
    flex: 0;
    padding: 0 10px;
  }
  span:nth-child(2) {
    flex: 1;
  }
`

const ButtonListItem = styled(LeftListItem)`
  & button {
    flex: 0;
  }
  span {
    flex: 1;
  }
`

const NumberAndButtonListItem = styled(LeftListItem)`
  & button {
    flex: 0;
  }
  span:nth-child(1) {
    flex: 0;
  }
  span:nth-child(2) {
    flex: 1;
  }
`

export default {
  ListItem,
  NumberListItem,
  ButtonListItem,
  NumberAndButtonListItem,
}
