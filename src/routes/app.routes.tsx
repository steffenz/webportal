import HomePage from "../modules/HomePage";

type Routes = {
    path: string,
    component: object,
    exact?: boolean
}

const routes:Routes[] = [
    {
        component: HomePage,
        path: "/",
    }
]

export default routes;