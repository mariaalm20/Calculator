import styled from 'styled-components/native'

interface TextProps {
  isCaracter?: boolean;
}


export const Container = styled.TouchableOpacity`
  background-color: #E60C73;
  width: 80px;
  height: 80px;
  elevation: 30;
  border-radius: 40px;
  border: 8px solid #E60C73;
  align-items: center;
  justify-content: center;
  margin:10px;
`

export const TextButton = styled.Text<TextProps>`
  font-size: 25px;
  font-weight: 900;
  color: ${props => props.isCaracter ? "#4b4b4b" : "#f2f2f2"};
`