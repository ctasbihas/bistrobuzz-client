import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useAuth } from "../../../../hooks/useAuth";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { data: payments = [] } = useQuery(["paymentsHistory"], async () => {
        const res = await axiosSecure.get(`/payments?email=${user.email}`);
        return res.data;
    });

    return (
        <>
            <Helmet>
                <title>Bistro Buzz Restaurant | Payment History</title>
            </Helmet>
            <SectionTitle
                width={"md:w-1/2"}
                subHeading={"At a Glance!"}
                heading={"Payment History"}
            />
            <section className="bg-[#F3F3F3] rounded-lg p-10 mb-10">
                <div className="flex justify-between uppercase mb-9">
                    <h2 className="text-3xl font-bold">
                        Total Payments: {payments.length}
                    </h2>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="uppercase bg-warning ">
                            <tr>
                                <th>Email</th>
                                <th>Food Names</th>
                                <th>Total Price</th>
                                <th>Payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((item) => (
                                <tr key={item._id}>
                                    <td>{item.email}</td>
                                    <td>
                                        <div className="dropdown">
                                            <div
                                                tabIndex={item._id}
                                                role="button"
                                                className="btn btn-outline btn-primary m-1"
                                            >
                                                Food Names
                                            </div>
                                            <ul
                                                tabIndex={item._id}
                                                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                            >
                                                {item.itemsName.map(
                                                    (foodItem) => (
                                                        <li key={foodItem}>
                                                            <a>{foodItem}</a>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </td>
                                    <td>${item.price}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default PaymentHistory;
