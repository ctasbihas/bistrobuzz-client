import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Main";
import Login from "../Pages/Main/Login/Login";
import Home from "../Pages/Main/Home/Home";
import Menu from "../Pages/Main/Menu/Menu";
import Register from "../Pages/Main/Register/Register";
import Shop from "../Pages/Main/Shop/Shop";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/menu",
                element: <Menu/>
            },
            {
                path: "/shop",
                element: <Shop/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
        children: [
            {
                path: "mycart",
                element: <MyCart/>
            }
        ]
    }
])