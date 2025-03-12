import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyled = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  list-style: none;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
  margin: 40px 0;
`

export const Input = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`
export const Button = styled.button`
  padding: 8px 12px;
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const ButtonSave = styled(Button)`
  background-color: ${variables.verde};
`

export default GlobalStyled
