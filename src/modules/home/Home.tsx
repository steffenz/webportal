import React from "react";
import IconGrid from "../../components/IconGrid";
import AppIcon from "../../components/AppIcon";
import routes from '../../routes/app.routes';
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

export default(({ history }: Props) => {
    const handleRouteTo = (path:string) => { history.push(path)}
    return(
    <div>
        <IconGrid>
            { routes.map((route, key) => {
                if(!route.hideFromHomescreen){
                    return <AppIcon 
                        onClick={() => handleRouteTo(route.path)}
                        title="bop"
                        />
                }
            })}
        </IconGrid>
    </div>
)})