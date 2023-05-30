import loginImg from '../../../assets/others/authentication2.png';
import bgImg from '../../../assets/others/authentication.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { login } = useContext(AuthContext)
    const captchaRef = useRef(null);
    const [error, setError] = useState("");
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                navigate(from, { replace: true })
                setError("")
            })
            .catch(err => {
                setError(err.code)
                if (err.code.split("/")[1] === "user-not-found") {
                    alert("user not found")
                }
                console.log(err.code);
            })
    }
    const handleCaptchaVerify = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
    return (
        <div className={`hero min-h-screen bg-[url(${bgImg})]`}>
            <Helmet><title>Bistro Boss Restaurant | Login</title></Helmet>
            <div className="hero-content flex-col lg:flex-row" style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)", background: `url(${bgImg})` }}>
                <div>
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-[500px]">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className={`input input-bordered ${error.split("/")[1] === "wrong-password" ? "input-error" : ""}`} />
                            {error.split("/")[1] === "wrong-password" && <p className="text-red-500 ml-4">Invalid Password!</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <div>
                                <input ref={captchaRef} type="text" placeholder="enter the code to validate your account" className="input input-bordered" />
                                <span onClick={handleCaptchaVerify} className='btn btn-sm ml-5'>Verify</span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} type='submit' className="btn btn-primary" value="Login" />
                        </div>
                    </form>
                    <label className="text-center">
                        <span>New Here? <Link to="/register">Create An Account</Link></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Login;