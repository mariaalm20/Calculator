import styled from 'styled-components/native'

interface TextProps {
  isResult?: boolean;
}

export const Container = styled.View`
  background-color: #eee;
  width: 100%;
  height: 36%;
  justify-content: center;
  margin-bottom: 20px;
`
export const Content = styled.View`
  background-color:  #e1e1e1;
  width: 100%;
  height: 30%;
  elevation: 60;
  align-items: flex-end;
  margin-top: 30px;
  border-radius: 20px;
  border: 2px solid #E60C73;
  margin-bottom: 50px;
`

export const TextButton = styled.Text<TextProps>`
  font-size: 40px;
  color: ${props => props.isResult ? "#808080" : "#080602"};
  margin-right: 20px;
  margin-top: 20;
`