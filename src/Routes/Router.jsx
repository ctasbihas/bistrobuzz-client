import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Layout from "../Layout/Main";
import AddItem from "../Pages/Dashboard/Admin/AddItem/AddItem";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import ManageItems from "../Pages/Dashboard/Admin/ManageItems/ManageItems";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import MyCart from "../Pages/Dashboard/User/MyCart/MyCart";
import Payment from "../Pages/Dashboard/User/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/User/PaymentHistory/PaymentHistory";
import Home from "../Pages/Main/Home/Home";
import Login from "../Pages/Main/Login/Login";
import Menu from "../Pages/Main/Menu/Menu";
import Register from "../Pages/Main/Register/Register";
import Shop from "../Pages/Main/Shop/Shop";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../Pages/Main/ContactUs/ContactUs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/contact",
                element: <ContactUs />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
        ),
        children: [
            {
                path: "/dashboard",
                element: <DashboardHome />,
            },
            // Admin routes
            {
                path: "allUsers",
                element: (
                    <AdminRoute>
                        <AllUsers />
                    </AdminRoute>
                ),
            },
            {
                path: "addItem",
                element: (
                    <AdminRoute>
                        <AddItem />
                    </AdminRoute>
                ),
            },
            {
                path: "manageItems",
                element: (
                    <AdminRoute>
                        <ManageItems />
                    </AdminRoute>
                ),
            },
            // User routes
            {
                path: "myCart",
                element: <MyCart />,
            },
            {
                path: "payment",
                element: <Payment />,
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory />,
            },
        ],
    },
]);
