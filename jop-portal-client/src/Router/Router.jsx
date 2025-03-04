import { createHashRouter } from "react-router-dom"
import App from "../App"
import Home from "../Pages/Home"
import Createjob from "../components/Createjob"

const router  = createHashRouter([
    {
        path: '/',	
        element: <App />,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/post-job',
                element:<Createjob />
            }
        ]
    }
])

export default router