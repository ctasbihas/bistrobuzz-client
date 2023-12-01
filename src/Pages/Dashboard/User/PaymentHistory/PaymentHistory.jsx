import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
    return (
        <>
            <Helmet>
                <title>Bistro Buzz Restaurant | Payment History</title>
            </Helmet>
            <SectionTitle width={"md:w-1/2"} subHeading={"At a Glance!"} heading={"Payment History"} />
            <section className="bg-[#F3F3F3] rounded-lg p-10 mb-10">
                <div className="flex justify-between uppercase mb-9">
                    <h2 className="text-3xl font-bold">Total Payments: {6}</h2>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="uppercase bg-warning ">
                            <tr>
                                <th>Email</th>
                                <th>Category</th>
                                <th>Total Price</th>
                                <th>Payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Email</td>
                                <td>Category</td>
                                <td>Total Price</td>
                                <td>Payment Date</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default PaymentHistory;