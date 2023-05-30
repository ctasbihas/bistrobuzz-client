import loginImg from '../../../assets/others/authentication2.png';
import bgImg from '../../../assets/others/authentication.png';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const { register: signUp, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        const { name, photo, email, password } = data;
        signUp(email, password)
            .then(result => {
                console.log(result.user);
                updateUserProfile(name, photo)
                    .then(() => navigate(from, {replace: true}))
                    .catch(err => console.log(err))
                reset()
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
                    <label className="text-center">
                        <span>Already Registered? <Link to="/login">Go To Login</Link></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Register;