import styled, { css, IListStyleProps } from 'styled-components'

const List = styled.ul<IListStyleProps>`
  ${({ height, paddingX, paddingY, divide, boxShadow, theme }) => css`
    height: ${height && theme.calcRem(height)};
    overflow-y: ${height && 'scroll'};
    padding-top: ${paddingY && theme.paddings[paddingY]};
    padding-bottom: ${paddingY && theme.paddings[paddingY]};
    padding-left: ${paddingX && theme.paddings[paddingX]};
    padding-right: ${paddingX && theme.paddings[paddingX]};
    box-shadow: ${boxShadow && theme.boxShadow};
    width: 100%;
    flex-direction: column;
    ::-webkit-scrollbar {
      width: ${theme.calcRem(5)};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.grey_4};
    }

    & > li {
      border-bottom: ${divide && `1px solid ${theme.colors.themeColor}`};
    }

    & > li:nth-last-child(1) {
      border: none;
    }
  `}
`

export default {
  List,
}
