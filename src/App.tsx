import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Routes from './routes/Routes'
import { BrowserRouter } from "react-router-dom";

const Global = createGlobalStyle`
  body {
    background: #5A5A5A;
  }
`

export default(() => (
  <BrowserRouter>
    <React.Fragment>
      <Global/>
        <Routes />
    </React.Fragment>
  </BrowserRouter>
  ))
