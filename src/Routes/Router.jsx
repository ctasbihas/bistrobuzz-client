import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Layout from "../Layout/Main";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import MyCart from "../Pages/Dashboard/User/MyCart/MyCart";
import Home from "../Pages/Main/Home/Home";
import Login from "../Pages/Main/Login/Login";
import Menu from "../Pages/Main/Menu/Menu";
import Register from "../Pages/Main/Register/Register";
import Shop from "../Pages/Main/Shop/Shop";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import AddItem from "../Pages/Dashboard/Admin/AddItem/AddItem";
import ManageItems from "../Pages/Dashboard/Admin/ManageItems/ManageItems";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/menu",
                element: <Menu />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "myCart",
                element: <MyCart />
            },
            {
                path: "allUsers",
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: "addItem",
                element: <AdminRoute><AddItem/></AdminRoute>
            },
            {
                path: "manageItems",
                element: <AdminRoute><ManageItems/></AdminRoute>
            }
        ]
    }
])