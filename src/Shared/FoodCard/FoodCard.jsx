import Button from "../../components/Button/Button";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";

const FoodCard = ({ item }) => {
	const { _id, image, price, name, recipe } = item;
	const { user } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const [, refetch] = useCart();

	const handleAddToCart = () => {
		if (user && user.email) {
			const orderFood = {
				orderFoodId: _id,
				name,
				image,
				price,
				email: user.email,
			};
			fetch(`${import.meta.env.VITE_SERVER_URL}/carts`, {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(orderFood),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.insertedId) {
						refetch();
						toast.success(`${name} added to cart.`, {
							duration: 2000,
						});
					}
				});
		} else {
			toast.custom(
				<div className="bg-red-500 text-white py-2 px-4 rounded">
					<span>Please log in to add items to your cart.</span>
					<button
						onClick={handleLogin}
						className="ml-2 bg-white text-red-500 py-1 px-3 rounded"
					>
						Login
					</button>
				</div>
			);
		}
	};
	const handleLogin = () => {
		navigate("/login", { state: { from: location } });
		toast.remove();
	};

	return (
		<div className="card card-compact w-11/12 bg-base-100 shadow-xl">
			<figure className="relative">
				<img
					src={image}
					alt={name}
				/>
				<span className="bg-[#111827] text-white px-2 py-1 rounded-md absolute top-2 right-2">
					${price}
				</span>
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{name}</h2>
				<p>{recipe}</p>
				<div onClick={handleAddToCart}>
					<Button
						text="Add To Cart"
						color="#BB8506"
						className={""}
					/>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
