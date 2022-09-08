import styled, { css } from 'styled-components'

const H1 = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.titleSizes.h1};
    font-weight: ${theme.fontWeight.big};
  `}
`

const H2 = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.titleSizes.h2};
    font-weight: ${theme.fontWeight.big};
  `}
`

const H3 = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.titleSizes.h3};
    font-weight: ${theme.fontWeight.big};
  `}
`

const H4 = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.titleSizes.h4};
    font-weight: ${theme.fontWeight.big};
  `}
`

const H5 = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.titleSizes.h5};
    font-weight: ${theme.fontWeight.big};
  `}
`

const H6 = styled.h6`
  ${({ theme }) => css`
    font-size: ${theme.titleSizes.h6};
    font-weight: ${theme.fontWeight.big};
  `}
`

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
}
