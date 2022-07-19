import styled from 'styled-components'

const PostsMain = styled.main`
  width: 100vw;
  display: block;
  padding: ${({ theme }) => `${theme.calcRem(70)} ${theme.calcRem(100)}`};
`

export default PostsMain
