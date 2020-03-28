import React from 'react';
import styled from 'styled-components';
import routes from '../routes/app.routes'
import { RouteComponentProps } from "react-router-dom";

interface HomePageProps extends RouteComponentProps {
    someProp?: string
}

const AppIcon = styled.div`
  width: 128px;
  height: 128px;
  margin: 25px;
  background: orange;
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

    const handleRouteTo = (path:string) => {
        props.history.push(path)
    }
    return (
        <AppGrid>
            { routes.map((route, key) => (
                <AppIcon key={key} onClick={() => handleRouteTo(route.path)}>{route.name}</AppIcon>
            ))}
        </AppGrid>
    )
}

export default HomePage;