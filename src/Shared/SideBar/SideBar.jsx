import { NavLink } from "react-router-dom";
import { BookingIcon, CalenderIcon, CartIcon, ReviewIcon, WalletIcon } from "../../assets/icons/icons";
import {ImSpoonKnife} from "react-icons/im";
import {TfiMenuAlt, TfiMenu} from "react-icons/tfi";
import {AiFillHome, AiFillShopping} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import useCart from "../../hooks/useCart";
import { FaBook, FaUsers } from "react-icons/fa";
import { useAdmin } from "../../hooks/useAdmin";

const SideBar = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <div className="px-5 py-12 w-72 bg-[#D1A054]">
                <a className="uppercase text-center">
                    <span className="text-2xl font-bold text-center">Bistro Boss</span>
                    <br />
                    <span className="text-xl">Restaurant</span>
                </a>
                <ul className="menu text-base-content mt-5 space-y-2 drawer-items">
                    {isAdmin ?
                        <>
                            <li><NavLink to="./"><AiFillHome /> Admin Home</NavLink></li>
                            <li><NavLink to="./addItem"><ImSpoonKnife /> Add An Item</NavLink></li>
                            <li><NavLink to="./manageItems"><TfiMenuAlt /> Manage Items</NavLink></li>
                            <li><NavLink to="./booking"><FaBook /> Manage Bookings</NavLink></li>
                            <li><NavLink to="./allUsers"><FaUsers /> All Users</NavLink></li>
                        </>
                        :
                        <>
                            <li><NavLink to="./"><AiFillHome /> User Home</NavLink></li>
                            <li><NavLink to="./reservation"><CalenderIcon /> Reservation</NavLink></li>
                            <li><NavLink to="./history"><WalletIcon /> Payment History</NavLink></li>
                            <li>
                                <NavLink to="./mycart" activeClassName="active-link">
                                    <CartIcon />
                                    My Cart
                                    <span className="badge badge-secondary">{cart.length}</span>
                                </NavLink>
                            </li>
                            <li><NavLink to="./review"><ReviewIcon /> Add Review</NavLink></li>
                            <li><NavLink to="./booking"><BookingIcon /> My Booking</NavLink></li>
                        </>}

                    <div className="divider"></div>

                    <li><NavLink to="/"><AiFillHome /> Home</NavLink></li>
                    <li><NavLink to="/menu"><TfiMenu /> Menu</NavLink></li>
                    <li><NavLink to="/shop"><AiFillShopping /> Shop</NavLink></li>
                    <li><NavLink to="/"><MdEmail /> Contact</NavLink></li>
                </ul>
            </div>

        </div>
    );
};

export default SideBar;