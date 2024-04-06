import UserDashboard from "../User/UserDashboard/UserDashboard";

const DashboardHome = () => {
    return (
        <div>
            <h1 className="text-3xl font-semibold font-cinzel">
                Hi, Welcome Back!
            </h1>

            {/* Admin Stats */}
            {/* <AdminDashboard /> */}

            {/* User Stats */}
            <UserDashboard />
        </div>
    );
};

export default DashboardHome;
