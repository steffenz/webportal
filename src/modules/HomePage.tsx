import React from 'react';
import styled from 'styled-components';
import { modules } from './'
import { RouteComponentProps } from "react-router-dom";

interface HomePageProps extends RouteComponentProps {
    someProp?: string
}

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

const AppGrid = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const HomePage: React.SFC<HomePageProps> = (props) => {
    return (
        <AppGrid>
            { modules.map((app, key) => (
                <AppIcon key={key}/>
            ))}
        </AppGrid>
    )
}

export default HomePage;