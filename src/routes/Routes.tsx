import React from "react";
import { Route, withRouter } from "react-router-dom";
import routes from "./app.routes"
import AnimatedSwitch from './AnimatedSwitch';
import { RouteComponentProps } from "react-router-dom";


const Routes: React.SFC<RouteComponentProps> = (props) => {
    return (
        <AnimatedSwitch {...props}>
            { routes.map ( 
                route => 
                <Route  {...route} 
                        key={route.path} 
                        path={route.path} 
                        exact={route.exact} 
                        component={route.component} />
            )}
        </AnimatedSwitch>
    )
}

export default withRouter(Routes);