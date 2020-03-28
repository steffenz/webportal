import React from "react";
import Homescreen from "./../components/Homescreen";
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *, html, body { margin:0; padding:0; }

    html { font-size:10px; }

    body {
        background: #5A5A5A;
        padding: 5% 10% 5% 10%;
        font-family: 'Roboto', sans-serif;
        font-size:1.4rem;
    }
  
`

export default(() => (
    <React.Fragment>
        <GlobalStyles/>
        <Homescreen/>
    </React.Fragment>
))