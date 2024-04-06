import { useQuery } from "@tanstack/react-query";
import { useAdmin } from "../../../../hooks/useAdmin";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";
import { FaUsers, FaWallet } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const AdminDashboard = () => {
    const [isAdmin, loading] = useAdmin();
    const [axiosSecure] = useAxiosSecure();
    console.log(isAdmin, loading);

    const {
        data: adminStats = { revenue: 0, customers: 0, products: 0, orders: 0 },
    } = useQuery({
        queryKey: ["stats"],
        queryFn: async () => {
            const res = await axiosSecure("/admin-stats");
            return res.data;
        },
    });
    console.log(adminStats);
    const handleClick = () => {
        Notification.requestPermission().then((perm) => {
            if (perm === "granted") {
                new Notification("Hey there!", {
                    body: "Thanks for using our app!",
                    tag: "noti",
                });
            }
        });
    };
    return (
        <section>
            <h1>Admin</h1>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <div className="bg-gradient-to-r from-purple-500 to-pink-100 rounded-lg text-4xl text-white px-5 py-3 flex items-center justify-center gap-5">
                    <FaWallet onClick={handleClick} />
                    <h1 className="flex flex-col">
                        <span>{adminStats.revenue}</span>
                        <span className="text-2xl">Revenue</span>
                    </h1>
                </div>
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-200 rounded-lg text-4xl text-white px-5 py-3 flex items-center justify-center gap-5">
                    <FaUsers />
                    <h1 className="flex flex-col">
                        <span>{adminStats.customers}</span>

                        <span className="text-2xl">Customers</span>
                    </h1>
                </div>
                <div className="bg-gradient-to-r from-pink-500 to-pink-100 rounded-lg text-4xl text-white px-5 py-3 flex items-center justify-center gap-5">
                    <TbTruckDelivery />
                    <h1 className="flex flex-col">
                        <span>{adminStats.products}</span>

                        <span className="text-2xl">Products</span>
                    </h1>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-blue-200 rounded-lg text-4xl text-white px-5 py-3 flex items-center justify-center gap-5">
                    <TbTruckDelivery />
                    <h1 className="flex flex-col">
                        <span>{adminStats.orders}</span>

                        <span className="text-2xl">Orders</span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default AdminDashboard;
