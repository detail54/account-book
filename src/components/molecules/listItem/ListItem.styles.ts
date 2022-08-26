/* eslint-disable no-nested-ternary */
import styled, { css, IListItemStyleProps } from 'styled-components'

const ListItem = styled.li<IListItemStyleProps>`
  ${({
    fontColor,
    fontSize,
    paddingX,
    paddingY,
    bgColorNumber,
    cursor,
    hover,
    active,
    theme,
  }) => css`
    font-size: ${fontSize && theme.fontSizes[fontSize]};
    color: ${fontColor ? theme.fontColors[fontColor] : theme.fontColors.black};
    padding-top: ${paddingY && theme.paddings[paddingY]};
    padding-bottom: ${paddingY && theme.paddings[paddingY]};
    padding-left: ${paddingX && theme.paddings[paddingX]};
    padding-right: ${paddingX && theme.paddings[paddingX]};
    cursor: ${cursor || 'auto'};

    ${bgColorNumber !== undefined || active
      ? css`
          &,
          & > * {
            background-color: ${theme.subBackgroundColor[bgColorNumber || 0]};
          }
        `
      : css`
          &,
          & > * {
            background-color: ${theme.backgroundColor};
          }
        `}

    ${hover &&
    css`
      &:hover {
        &,
        & > * {
          transition: 0.2s;
          background-color: ${theme.subBackgroundColor[0]};
        }
      }
    `}
  `}
`

const LeftListItem = styled(ListItem)`
  justify-content: left;
`

const NumberListItem = styled(LeftListItem)`
  ${({ numberFlex, numberWidth, theme }) => css`
    & > span:nth-of-type(1),
    & > button > span:nth-of-type(1) {
      display: flex;
      padding: 0 10px;
      width: ${numberWidth && theme.calcRem(numberWidth)};
      flex: ${!numberWidth && numberFlex};
    }

    & > :nth-child(2) {
      flex: 10;
      padding: 0 10px;
    }
  `}
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
