import { toast } from "react-hot-toast";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const SocialLogin = () => {
	const { facebookSignIn, googleSignIn, twitterSignIn } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const handleFacebookSignIn = () => {
		facebookSignIn()
			.then((result) => {
				console.log(result.user);
			})
			.catch((err) => console.error(err));
	};
	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				const user = {
					name: result.user.displayName,
					email: result.user.email,
					role: "user",
				};
				fetch(`${import.meta.env.VITE_SERVER_URL}/users`, {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(user),
				})
					.then((res) => res.json())
					.then((data) => {
						if (data) {
							navigate(from, { replace: true });
							toast.success("Login Successful.", {
								duration: 4000,
							});
						}
					});
			})
			.catch((err) => console.log(err));
	};
	const handleTwitterSignIn = () => {
		twitterSignIn()
			.then((result) => {
				console.log(result.user);
			})
			.catch((err) => console.error(err));
	};

	return (
		<div>
			<div className="text-center my-3">Or Continue With</div>
			<div className="text-center space-x-10">
				<button
					onClick={handleFacebookSignIn}
					className="border-2 rounded-full border-[#444444] p-3 text-2xl"
				>
					<FaFacebookF />
				</button>
				<button
					onClick={handleGoogleSignIn}
					className="border-2 rounded-full border-[#444444] p-3 text-2xl"
				>
					<FaGoogle />
				</button>
				<button
					onClick={handleTwitterSignIn}
					className="border-2 rounded-full border-[#444444] p-3 text-2xl"
				>
					<FaTwitter />
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;
