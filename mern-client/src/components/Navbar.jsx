

import { Link } from "react-router-dom";
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import avatarImg from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";


const navigation = [
    { name: "Dashboard", href: "/user-dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(true); // Start as false
    const cartItems = useSelector(state => state.cart.cartItems);
    console.log(cartItems)
    
     const {currentUser, logout} = useAuth()
    
    const handleLogOut = () => {
        logout()
    }
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
                <div className="flex items-center md:gap-16 gap-4">
                    {/* LEFT SIDE */}
                    <Link to="/">
                        <h2 className="text-3xl">GLYPH</h2>
                    </Link>

                    {/* search input */}
                    <div className="relative sm:w-72 w-40 space-x-2">
                        <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
                        <input
                            type="text"
                            placeholder="Search here"
                            className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="relative flex items-center md:space-x-3 space-x-2">

                    <div>
                        {
                            currentUser ? 
                            <>
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <img src={avatarImg} alt="" className={`size-7 rounded-full $ {currentUser ? 'ring-2 ring-yellow-500' : ''}`}
                        />
                        </button>
                        {/* Show Dropdown */}
                        {
                            isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                                        <ul className="py-2">
                                            {navigation.map((item) => (
                                                <li
                                                    key={item.name}
                                                    onClick={() => setIsDropdownOpen(false)} // Close dropdown on link click
                                                >
                                                    <Link
                                                        to={item.href}
                                                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                
                                            ))}
                                            <li>

                                                <button 
                                                 onClick={handleLogOut}
                                                classname="block px-4 py-2 text-sm hover:bg-gray-100">Logout</button>
                                            </li>
                                             </ul>
                                    </div>
                                )}
                            
                        </> : (<Link to ="/login"><HiOutlineUser className="size-6" /></Link>
                        )}
                    </div>

                    <button className="hidden sm:block">
                        <HiOutlineHeart className="size-6" />
                    </button>

                    <Link
                        to="/cart"
                        className="bg-button p-1 sm:px-6 px-2 flex items-center rounded-sm"
                    >
                        <HiOutlineShoppingCart className="" />
                        {
                            cartItems.length > 0 ?  <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span> :  <span className="text-sm font-semibold sm:ml-1">0</span>
                        }
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

