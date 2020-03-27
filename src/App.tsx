import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';


type Application = {
  name: string
}


const apps:Application[] = [
  { name: 'Phone' },
  { name: 'Groceries'},
  { name: 'Takout food'},
  { name: 'Images'},
  { name: 'Phone' },
  { name: 'Groceries'},
  { name: 'Takout food'},
  { name: 'Images'}
]

const Global = createGlobalStyle`
  body {
    background: #5A5A5A;
  }
`


const AppIcon = styled.div`
  width: 128px;
  height: 128px;
  background: orange;
  margin-top:25px;
  cursor:pointer;

  &:hover {
    background: pink;
  }
`;

const Container = styled.div`
  width:600px;
  margin: auto;
` 


const AppGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default(() => (
  <React.Fragment>
    <Global/>
    <Container>
      <AppGrid>
        { apps.map((app, key) => (
          <AppIcon key={key}/>
        ))}
      </AppGrid>
    </Container>
  </React.Fragment>
))
