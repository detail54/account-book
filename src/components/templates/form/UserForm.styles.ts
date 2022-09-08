import styled from 'styled-components'

const Form = styled.form`
  width: 20vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow};

  & span {
    justify-content: left;
  }

  & input {
    margin-bottom: 10px;
  }
`

export default Form
