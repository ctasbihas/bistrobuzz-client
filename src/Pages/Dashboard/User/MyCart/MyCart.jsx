import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useCart from "../../../../hooks/useCart";
import { Link } from "react-router-dom";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((acc, item) => item.price + acc, 0)

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss Restaurant | Cart</title>
            </Helmet>
            <SectionTitle subHeading={"My Cart"} heading={"Wanna Add More?"} />
            <section className="bg-white rounded-lg p-10 mb-10">
                <div className="flex justify-between uppercase mb-9">
                    <h2 className="text-3xl font-bold">Total Orders: {cart.length}</h2>
                    <h2 className="text-3xl font-bold">Total Price: ${total}</h2>
                    <Link to="/dashboard/payment">
                        <button className="bg-[#D1A054] px-4 text-white rounded-lg transition-colors duration-300 ease-in-out active:bg-[#C9883A] transform active:scale-95">
                            Pay
                        </button>
                    </Link>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="uppercase bg-[#D1A054] ">
                            <tr>
                                <th></th>
                                <th>Food Image</th>
                                <th>Food Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((food, index) => (
                                <tr key={food._id}>
                                    <td>{++index}</td>
                                    <td className="flex items-center">
                                        <div className="avatar">
                                            <div className="rounded-xl w-32 h-24">
                                                <img src={food.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{food.name}</td>
                                    <td>${food.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(food._id)} className="btn btn-error btn-md text-white">
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default MyCart;