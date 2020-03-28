import HomePage from "../modules/HomePage";
import Clock from "../modules/clock/Clock";
import { RouteComponentProps } from "react-router-dom";
import SmallShops from "../modules/small-shops/SmallShops";

type Routes = {
    name: string,
    path: string,
    component: React.ComponentType<RouteComponentProps<any>>,
    exact?: boolean
}

const routes:Routes[] = [
    {
        name: "Home",
        component: HomePage,
        path: "/",
        exact: true
    }, 
    {
        name: "Clock",
        component: Clock,
        path: "/clock",
    },
    {
        name: "Shops",
        component: SmallShops,
        path: "/shops"
    }
]

export default routes;