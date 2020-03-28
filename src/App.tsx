import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Routes from './routes/Routes'

const Global = createGlobalStyle`
  body {
    background: #5A5A5A;
  }
`

const Container = styled.div`
  width:600px;
  margin: auto;
` 


export default(() => (
  <React.Fragment>
    <Global/>
    <Container>
      <Routes />
    </Container>
  </React.Fragment>
))
