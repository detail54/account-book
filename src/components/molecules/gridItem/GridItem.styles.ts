import styled, { css, IGridItemStyleProps } from 'styled-components'

const Item = styled.div<IGridItemStyleProps>`
  ${({ theme, active }) => css`
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    transition: 0.3s;
    border: 1px solid transparent;
    padding: ${theme.paddings.xs};
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
        background-color: ${theme.subBackgroundColor};
      }
    `}
  `}
`

const Contents = styled.div`
  flex-direction: column;
  align-items: flex-start;
  padding-left: ${({ theme }) => theme.paddings.xs};
  margin-top: ${({ theme }) => theme.margins.md};
`

export default {
  Item,
  Contents,
}
