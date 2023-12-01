import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import Swal from "sweetalert2";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";

const AllUsers = () => {
	const [axiosSecure] = useAxiosSecure();
	const { data: users = [], refetch } = useQuery(["users"], async () => {
		const res = await axiosSecure.get("/users");
		return res.data;
	});

	const handleMakeAdmin = (user) => {
		Swal.fire({
			title: "Are you sure?",
			text: `You want to make ${user.name} admin`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(
					`${import.meta.env.VITE_SERVER_URL}/users/admin/${
						user._id
					}`,
					{
						method: "PATCH",
					}
				)
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.modifiedCount > 0) {
							refetch();
							Swal.fire(
								"Done",
								`${user.name} is now admin.`,
								"success"
							);
						}
					});
			}
		});
	};
	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`${import.meta.env.VITE_SERVER_URL}/carts/${id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							refetch();
							Swal.fire(
								"Deleted!",
								"Your file has been deleted.",
								"success"
							);
						}
					});
			}
		});
	};
	return (
		<>
			<Helmet>
				<title>Bistro Buzz Restaurant | Cart</title>
			</Helmet>
			<SectionTitle
				width={"md:w-1/2"}
				subHeading={"How Many??"}
				heading={"Manage All Users"}
			/>
			<section className="bg-white rounded-lg p-10 mb-10">
				<div className="flex justify-between uppercase mb-9">
					<h2 className="text-3xl font-bold">
						Total Users: {users.length}
					</h2>
				</div>
				<div className="overflow-x-auto w-full">
					<table className="table w-full">
						{/* head */}
						<thead className="uppercase bg-[#D1A054] ">
							<tr>
								<th></th>
								<th>Name</th>
								<th>Email</th>
								<th>Role</th>
								<th></th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user, index) => (
								<tr key={user._id}>
									<td>{++index}</td>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>
										{user.role === "admin" ? (
											<button className="text-white text-2xl bg-[#D1A054] p-3 rounded-full">
												<RiAdminFill />
											</button>
										) : (
											<button
												onClick={() =>
													handleMakeAdmin(user)
												}
												className="bg-[#D1A054] text-2xl rounded-lg p-3 text-white transition-colors duration-300 ease-in-out active:bg-[#C9883A] transform active:scale-95"
											>
												<FaUser />
											</button>
										)}
									</td>
									<td></td>
									<td>
										<button
											onClick={() =>
												handleDelete(user._id)
											}
											className="btn btn-error btn-md text-white"
										>
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

export default AllUsers;
