import { Link } from "react-router-dom";

const NavBar = () => {
    const navItems = 
    <>
        <li><Link>Home</Link></li>
        <li><Link>Contact Us</Link></li>
        <li><Link>Dashboard</Link></li>
        <li><Link>Our Menu</Link></li>
        <li><Link>Our Shop</Link></li>
        <li><Link>Sign Out</Link></li>
    </>
    
    return (
        <div className="navbar bg-[rgba(21,21,21,0.5)] fixed top-0 z-50 text-white">
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
                <ul className="flex space-x-4 px-1 uppercase text-sm">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;