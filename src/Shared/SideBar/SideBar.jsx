import { NavLink } from "react-router-dom";
import { BookingIcon, CalenderIcon, CartIcon, HomeIcon, MailIcon, MenuIcon, ReviewIcon, ShopIcon, WalletIcon } from "../../assets/icons/icons";
import useCart from "../../hooks/useCart";

const SideBar = () => {
    const [cart] = useCart();
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
                    <li><NavLink to="./"><HomeIcon /> User Home</NavLink></li>
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
                    <div className="divider"></div>
                    <li><NavLink to="/"><HomeIcon /> Home</NavLink></li>
                    <li><NavLink to="/menu"><MenuIcon /> Menu</NavLink></li>
                    <li><NavLink to="/shop"><ShopIcon /> Shop</NavLink></li>
                    <li><NavLink to="/"><MailIcon /> Contact</NavLink></li>
                </ul>
            </div>

        </div>
    );
};

export default SideBar;