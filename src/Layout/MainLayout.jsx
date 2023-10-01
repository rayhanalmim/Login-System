import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Component/Home";
import SingIn from "../Component/SingIn";
import SingUp from "../Component/SingUp";
import Data from "../Component/data";
import PrivateRoute from "../Private Route/PrivateRoute";
import BeforeLogin from "../Component/BeforeLogin";

const MainLayout = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element:<PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path:'/login',
                element:<BeforeLogin><SingIn></SingIn></BeforeLogin>
            },
            {
                path:'/join',
                element:<BeforeLogin><SingUp></SingUp></BeforeLogin>
            },
            {
                path:'/data',
                element:<PrivateRoute><Data></Data></PrivateRoute>
            }
        ]
    }
])

export default MainLayout;