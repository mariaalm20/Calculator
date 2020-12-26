import React from 'react'

import {Container,ContainerButton} from './styles'
import Button from '../components/Calculator'

const Main = () => { 

  return(
    <Container>
      <ContainerButton>
        <Button />
      </ContainerButton>
    </Container>
  )
}

export default Main