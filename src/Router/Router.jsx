import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import Error from "../components/Error/Error";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import PrivetRoute from "./PrivetRouter/PrivetRouter";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: 'dashboard',
                element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>
            }
        ]
    },
    // {
    //     path: 'dashboard',
    //     element: <Dashboard></Dashboard>
    // }
])

export default Router;