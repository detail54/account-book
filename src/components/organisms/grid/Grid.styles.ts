import styled, { css, IGridStyleProps } from 'styled-components'

const Container = styled.div<IGridStyleProps>`
  ${({ theme, gridColumnsCount, gridRowsCount, gap }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: ${`repeat(${gridColumnsCount}, 1fr)`};
    grid-template-rows: ${gridRowsCount && `repeat(${gridRowsCount}, 1fr)`};
    gap: ${gap && `${theme.gaps[gap]} ${theme.gaps[gap]}`};
  `}
`

export default {
  Container,
}
