import styled from 'styled-components'

const Form = styled.form`
  width: 30vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);

  & span {
    justify-content: left;
  }

  & input {
    margin-bottom: 10px;
  }
`

export default Form
