import loginImg from '../../../assets/others/authentication2.png';
import bgImg from '../../../assets/others/authentication.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';
import SocialLogin from '../../../Shared/SocialLogin/SocialLogin';
import { useAuth } from '../../../hooks/useAuth';

const Register = () => {
    const { register: signUp, updateUserProfile } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        const { name, photo, email, password } = data;
        signUp(email, password)
            .then(result => {
                updateUserProfile(name, photo)
                    .then(() => {
                        const user = { name, email, role: "user" };
                        fetch("http://localhost:5000/users", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(user)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    toast.success("You have successfully registered.");
                                    reset();
                                    navigate(from, { replace: true });
                                }
                            })
                    })
                    .catch(err => console.log(err))
            })
    };
    return (
        <div className={`hero min-h-screen bg-[url(${bgImg})]`}>
            <Helmet><title>Bistro Boss Restaurant | Register</title></Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse" style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)", background: `url(${bgImg})` }}>
                <div>
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-[500px]">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                placeholder="Name"
                                className={`input input-bordered ${errors.name ? 'input-error' : ''}`}
                            />
                            {errors.name && <p className="text-red-500">Name is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                {...register("photo", { required: true })}
                                placeholder="Photo URL"
                                className={`input input-bordered ${errors.photo ? 'input-error' : ''}`}
                            />
                            {errors.photo && <p className="text-red-500">Photo is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                placeholder="Email"
                                className={`input input-bordered ${errors.email ? 'input-error' : ''}`}
                            />
                            {errors.email && <p className="text-red-500">Email is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", { required: true, minLength: 8, pattern: /^(?=.*[A-Z]{2,})(?=.*[a-z]{2,})(?=.*\d{2,})(?=.*[@$!%*#?&]{2,})[A-Za-z\d@$!%*#?&]{8,}$/ })}
                                placeholder="Password"
                                className={`input input-bordered ${errors.password ? 'input-error' : ''}`}
                            />
                            {errors.password?.type === "required" && <p className="text-red-500">Password is required</p>}
                            {errors.password?.type === 'minLength' && (
                                <p className="text-red-500">Password should be at least 8 characters long</p>
                            )}
                            {errors.password?.type === 'pattern' && (
                                <p className="text-red-500">Password should include at least two uppercase, two lowercase, two digit and two special character</p>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' className="btn btn-primary" value="Register" />
                        </div>
                    </form>
                    <label className="text-center text-[#D1A054] font-semibold">
                        <span>Already Registered? <Link to="/login" className="font-bold" >Go To Login</Link></span>
                    </label>
                    <SocialLogin/>
                </div>
            </div>
        </div>
    );
};

export default Register;