import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../hooks/useCart";

const NavBar = () => {
    const { user, logout } = useContext(AuthContext)
    const [showNavbar, setShowNavbar] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isTop, setIsTop] = useState(true);
    const [cart] = useCart();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setShowNavbar(
                currentScrollPos < prevScrollPos ||
                currentScrollPos === 0 ||
                currentScrollPos < 50
            );
            setPrevScrollPos(currentScrollPos);
            setIsTop(currentScrollPos === 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    const logoutIcon = (
        <svg width="30" height="30" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M37.8511 35.7854C40.0692 33.8885 41.8362 31.5977 43.043 29.0546C44.2497 26.5115 44.8706 23.7701 44.867 21C44.867 9.78125 34.8753 0.6875 22.5488 0.6875C10.2222 0.6875 0.230484 9.78125 0.230484 21C0.226962 23.7701 0.847765 26.5115 2.05452 29.0546C3.26127 31.5977 5.02832 33.8885 7.24643 35.7854C11.3826 39.3414 16.859 41.3195 22.5488 41.3125C28.2386 41.3195 33.7149 39.3414 37.8511 35.7854ZM9.14635 33.1083C10.7534 31.2784 12.7928 29.8015 15.1131 28.7873C17.4333 27.7731 19.9748 27.2477 22.5488 27.25C25.1227 27.2477 27.6642 27.7731 29.9844 28.7873C32.3047 29.8015 34.3441 31.2784 35.9512 33.1083C34.1978 34.7202 32.1103 35.9992 29.8096 36.8711C27.5089 37.743 25.0409 38.1904 22.5488 38.1875C20.0566 38.1904 17.5886 37.743 15.2879 36.8711C12.9873 35.9992 10.8997 34.7202 9.14635 33.1083ZM31.1327 14.75C31.1327 16.822 30.2283 18.8091 28.6185 20.2743C27.0087 21.7394 24.8254 22.5625 22.5488 22.5625C20.2722 22.5625 18.0888 21.7394 16.479 20.2743C14.8692 18.8091 13.9648 16.822 13.9648 14.75C13.9648 12.678 14.8692 10.6909 16.479 9.22573C18.0888 7.7606 20.2722 6.9375 22.5488 6.9375C24.8254 6.9375 27.0087 7.7606 28.6185 9.22573C30.2283 10.6909 31.1327 12.678 31.1327 14.75Z" fill="white" />
        </svg>

    )

    const navItems = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/menu">Our Menu</Link>
            </li>
            <li>
                <Link to="/shop">Our Shop</Link>
            </li>
            <li>
                <Link>Contact Us</Link>
            </li>
            {user?.email ? (
                <>
                    <li className="flex items-center text-lg">
                        <FaShoppingCart/>
                        <div className="badge badge-secondary">{cart.length || 0}</div>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li onClick={logout}>
                        <span className="flex items-center cursor-pointer">
                            <span className="mr-1">Logout</span>
                            {logoutIcon}
                        </span>
                    </li>
                </>
            ) : (
                <li>
                    <Link to="/login">Login</Link>
                </li>
            )}
        </>
    );

    return (
        <div
            className={`
            navbar z-50 text-white sticky top-0 
        ${showNavbar ? "" : "-translate-y-full"} transition-transform duration-300 
        ${showNavbar ? "backdrop-filter backdrop-blur-lg" : ""}
        ${isTop ? "bg-[#E85A50]" : "bg-[#15151580]"}
        `}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                        {navItems}
                    </ul>
                </div>
                <a className="uppercase text-center">
                    <span className="text-2xl font-bold">Bistro Boss</span>
                    <br />
                    <span className="text-xl">Restaurant</span>
                </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="flex items-center space-x-6 px-1 uppercase text-sm">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;