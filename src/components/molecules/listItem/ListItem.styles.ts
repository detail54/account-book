import styled, { css, IListItemStyleProps } from 'styled-components'

const ListItem = styled.li<IListItemStyleProps>`
  ${({
    fontColor,
    bgColor,
    paddingX,
    paddingY,
    cursor,
    hover,
    active,
    theme,
  }) => css`
    color: ${fontColor ? theme.fontColors[fontColor] : theme.fontColors.black};
    background-color: ${bgColor ? theme.colors[bgColor] : theme.colors.white};
    padding-top: ${paddingY && theme.paddings[paddingY]};
    padding-bottom: ${paddingY && theme.paddings[paddingY]};
    padding-left: ${paddingX && theme.paddings[paddingX]};
    padding-right: ${paddingX && theme.paddings[paddingX]};
    cursor: ${cursor || 'default'};
    background-color: ${active
      ? theme.subBackgroundColor
      : theme.backgroundColor};

    ${hover &&
    css`
      &:hover {
        transition: 0.2s;
        background-color: ${theme.subBackgroundColor};
      }
    `}
  `}
`

const LeftListItem = styled(ListItem)`
  justify-content: left;
`

const NumberListItem = styled(LeftListItem)`
  & > span:nth-of-type(1) {
    display: flex;
    flex: 1;
    padding: 0 10px;
  }

  & > :nth-child(2) {
    flex: 10;
    padding: 0 10px;
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
  & > span:nth-of-type(1) {
    flex: 0;
  }
  & > span:nth-of-type(2) {
    flex: 1;
  }
`

export default {
  ListItem,
  NumberListItem,
  ButtonListItem,
  NumberAndButtonListItem,
}
