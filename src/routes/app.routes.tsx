// import HomePage from "../modules/HomePage";
import Home from "../modules/home/Home";
import Clock from "../components/clock/Clock";
import Phone from "../modules/phone";

import { RouteComponentProps } from "react-router-dom";
import SmallShops from "../modules/small-shops/SmallShops";

type Routes = {
    name: string,
    hideFromHomescreen?: boolean,
    path: string,
    component: React.ComponentType<RouteComponentProps<any>>,
    exact?: boolean,
}

const routes:Routes[] = [
    {
        name: "Home",
        component: Home,
        path: "/",
        exact: true,
        hideFromHomescreen: true
    }, 
    {
        name: "Shops",
        component: SmallShops,
        path: "/shops"
    },
    {
        name: "Phone",
        component: Phone.component,
        path: "/phone",
    }
]

export default routes;  