import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useMenu } from "../../../../hooks/useMenu";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItems = () => {
    const [menu, , refetch] = useMenu()
    const [axiosSecure] = useAxiosSecure()

    const handleEdit = (item) => { }
    const handleDelete = (food) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to delete ${food.name}`,
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#2FBCFF',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${food._id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            `${food.name} has been deleted.`,
                            'success'
                        )
                    }
                })
            }
        })
    }
    return (
        <div>
            <SectionTitle width={"md:w-1/2"} subHeading={"Harry Up"} heading={"Manage All Items"} />
            <section className="bg-[#F3F3F3] rounded-lg p-10 mb-10">
                <div className="flex justify-between uppercase mb-9">
                    <h2 className="text-3xl font-bold">Total Items: {menu.length}</h2>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="uppercase bg-[#D1A054] ">
                            <tr>
                                <th>#</th>
                                <th>Food Image</th>
                                <th>Food Name</th>
                                <th>Price</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menu.map((food, index) => (
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
                                        <button onClick={() => handleEdit(food._id)} className="btn btn-warning text-lg btn-md text-white">
                                            <FaRegEdit />
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(food)} className="btn btn-error text-lg btn-md text-white">
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default ManageItems;