import { Outlet } from "react-router-dom";
import SideBar from "../Shared/SideBar/SideBar";

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content px-10 bg-[#F6F6F6]">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <SideBar/>
        </div>
    );
};

export default Dashboard;