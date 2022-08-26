import styled, { css, IGridItemStyleProps } from 'styled-components'

const Item = styled.div<IGridItemStyleProps>`
  ${({ theme, titleAlign, active, itemPadding }) => css`
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: ${titleAlign || 'flex-start'};
    justify-content: space-between;
    border: 1px solid transparent;
    padding: ${itemPadding ? theme.paddings[itemPadding] : theme.paddings.xs};
    background-color: ${theme.backgroundColor};
    box-shadow: ${theme.boxShadow};

    ${active &&
    css`
      cursor: pointer;

      &:hover {
        width: 105%;
        height: 110%;
        z-index: 2;
        border: 1px solid ${theme.colors.grey_4};
        background-color: ${theme.subBackgroundColor[0]};
      }
    `}
  `}
`

const Contents = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding-left: ${({ theme }) => theme.paddings.xs};
  margin-top: ${({ theme }) => theme.margins.md};
`

export default {
  Item,
  Contents,
}
