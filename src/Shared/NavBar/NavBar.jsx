import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { UserIcon } from "../../assets/icons/icons";
import { useAuth } from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";

const NavBar = () => {
    const { user, logout } = useAuth();
    const [showNavbar, setShowNavbar] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [cart] = useCart();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setShowNavbar(
                currentScrollPos < prevScrollPos || currentScrollPos === 0
            );
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    const navItems = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/menu">Our Menu</NavLink>
            </li>
            <li>
                <NavLink to="/shop">Our Shop</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact Us</NavLink>
            </li>
            {user?.email ? (
                <>
                    <li>
                        <NavLink to="/dashboard/">Dashboard</NavLink>
                    </li>
                    <li className="flex items-center text-lg">
                        <NavLink
                            className="flex items-center"
                            to="/dashboard/mycart"
                        >
                            <FaShoppingCart />
                            <div className="badge badge-secondary">
                                {cart.length}
                            </div>
                        </NavLink>
                    </li>
                    <li onClick={logout}>
                        <span className="flex items-center cursor-pointer">
                            <span className="mr-1">Logout</span>
                            <UserIcon />
                        </span>
                    </li>
                </>
            ) : (
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            )}
        </>
    );

    return (
        <div
            className={`flex items-center w-full lg:w-[calc(100%-12px*2)] lg:mx-3 z-50 text-white bg-[#15151580] transition duration-300 py-2 lg:px-5 fixed rounded-full
        ${
            showNavbar
                ? "backdrop-filter backdrop-blur-lg top-3"
                : "-translate-y-full"
        }
        `}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase nav-items"
                    >
                        {navItems}
                    </ul>
                </div>
                <a className="uppercase text-center font-mono">
                    <span className="text-3xl font-bold leading-5">
                        Bistro Buzz
                    </span>
                    <br />
                    <span className="text-2xl  leading-5">Restaurant</span>
                </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="flex items-center space-x-6 px-1 uppercase text-sm nav-items">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
