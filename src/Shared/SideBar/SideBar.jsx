import { AiFillHome, AiFillShopping } from "react-icons/ai";
import { BsBookmarksFill } from "react-icons/bs";
import {
    FaBook,
    FaCalendarAlt,
    FaShoppingCart,
    FaUsers,
    FaWallet,
} from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { TfiCommentAlt, TfiMenu, TfiMenuAlt } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import { useAdmin } from "../../hooks/useAdmin";
import useCart from "../../hooks/useCart";

const SideBar = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    return (
        <div className="drawer-side">
            <label
                htmlFor="my-drawer-2"
                className="drawer-overlay"
            ></label>
            <div className="px-5 py-12 w-72 bg-[#D1A054]">
                <a className="uppercase text-center">
                    <span className="text-2xl font-bold text-center">
                        Bistro Buzz
                    </span>
                    <br />
                    <span className="text-xl">Restaurant</span>
                </a>
                <ul className="menu text-base-content mt-5 space-y-2 drawer-items">
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink to="/dashboard">
                                    <AiFillHome /> Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="./addItem">
                                    <ImSpoonKnife /> Add An Item
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="./manageItems">
                                    <TfiMenuAlt /> Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="./booking">
                                    <FaBook /> Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="./allUsers">
                                    <FaUsers /> All Users
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/dashboard">
                                    <AiFillHome /> User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="./payment">
                                    <FaCalendarAlt /> Reservation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="./paymentHistory">
                                    <FaWallet /> Payment History
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="./myCart"
                                    activeClassName="active-link"
                                >
                                    <FaShoppingCart />
                                    My Cart
                                    <span className="badge badge-secondary">
                                        {cart.length}
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="./review">
                                    <TfiCommentAlt /> Add Review
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="./booking">
                                    <BsBookmarksFill /> My Booking
                                </NavLink>
                            </li>
                        </>
                    )}

                    <div className="divider"></div>

                    <li>
                        <NavLink to="/">
                            <AiFillHome /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                            <TfiMenu /> Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">
                            <AiFillShopping /> Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <MdEmail /> Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
