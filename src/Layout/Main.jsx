import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";

const Layout = () => {
    const { pathname } = useLocation();
    return (
        // <div className="max-w-7xl mx-auto">
        <div>
            {pathname === "/register" || <NavBar /> && pathname === "/login" || <NavBar/>}
            <Outlet />
            <Toaster/>
            {pathname === "/register" || <Footer /> && pathname === "/login" || <Footer/>}
        </div>
    );
};

export default Layout;