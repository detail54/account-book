import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    font-size: 1rem;
    margin: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColors.themeColor};
    
    #__next {
      display: block;
    }
  }
  section, article, header, main, footer, nav, span, div, ul, ol, li, a, h1, h2, h3, h4, h5, h6, button, p {
    display: flex;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
  ul, ol {
    list-style: none;
  }
  button, div, span, li {
    align-items: center;
    justify-content: center;
  }
  a {
    color: black;
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  // react-query devtools style
  .devtools {
    align-items: flex-start;
    & div, & span {
      display: block;
      align-items: initial;
      justify-content: initial;
    }
    & > div + div > div + div + div + div {
      display: flex;
      button {
        margin-right: 5px;
      }
      span {
        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }
`
