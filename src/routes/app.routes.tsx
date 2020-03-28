import React from "react"; 

type Routes = {
    path: string,
    component: object,
    exact?: boolean
}

const TestRoute = () => <h1>test</h1>
  
const routes:Routes[] = [
    {
        component: TestRoute,
        path: "/",
    }
]

export default routes;