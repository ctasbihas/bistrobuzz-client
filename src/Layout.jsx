import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer/Footer";
import NavBar from "./Shared/NavBar/NavBar";

const Layout = () => {
    return (
        // <div className="max-w-7xl mx-auto">
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;