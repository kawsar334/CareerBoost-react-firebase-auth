import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';

const Navbar = () => {
    const [open, setOpen] = useState(true);
    const { user, logout } = useContext(AuthContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        return logout(navigate);
    };

    return (
        <nav className="bg-blue-500 p-4 sticky top-0 left-0 z-20">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold w-max md:w-[30%] relative">
                    CareerBoost
                </Link>

                {/* Navigation links */}
                {open && (
                    <div className="space-x-6 flex rounded md:w-[40%] border md:flex justify-center items-center absolute top-[70px] md:top-[25px] flex-col md:flex-row p-3 md:p-0 w-max h-max gap-4 transform translate-x-[80%] bg-white md:bg-transparent md:border-none">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `hover:text-black ${isActive ? 'bg-gray-300 text-black p-2 rounded-md' : ''
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                `hover:text-black ${isActive ? 'bg-gray-300 text-black p-2 rounded-md' : ''
                                }`
                            }
                        >
                            My Profile
                        </NavLink>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                `hover:text-black ${isActive ? 'bg-gray-300 text-black p-2 rounded-md' : ''
                                }`
                            }
                        >
                            Dashboard
                        </NavLink>

                        <div className="md:hidden">
                            {user ? (
                                <NavLink
                                    to="/profile"
                                    className="flex items-center space-x-2 relative"
                                >
                                    <img
                                        src={user?.photoURL || 'https://via.placeholder.com/40'}
                                        alt="Loading"
                                        className="w-10 h-10 rounded-full cursor-pointer"
                                        onMouseEnter={() => setShowDropdown(!showDropdown)}
                                        onMouseLeave={() => setShowDropdown(false)}
                                    />
                                    {showDropdown && (
                                        <div className="hidden sm:block absolute top-[30px] right-[100px] z-[50] bg-[lightgray] w-max p-2 rounded shadow">
                                            <div className="flex justify-center items-center gap-3">
                                                <span>{user?.displayName}</span>
                                            </div>
                                        </div>
                                    )}
                                    <span className="hidden sm:block">{user?.displayName}</span>
                                    <button
                                        onClick={handleLogout}
                                        className="bg-red-500 text-white py-1 px-4 rounded-md"
                                    >
                                        Logout
                                    </button>
                                </NavLink>
                            ) : (
                                <Link
                                    to="/login"
                                    className="bg-green-500 text-white py-2 px-4 rounded-md"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                )}

                {/* User avatar and hamburger menu */}
                <div className="relative flex justify-center items-center gap-2 w-[50%] md:w-[20%]">
                    {user ? (
                        <NavLink to="/profile" className="flex items-center space-x-2 relative">
                            <img
                                src={user?.photoURL || 'https://via.placeholder.com/40'}
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full cursor-pointer"
                                onMouseEnter={() => setShowDropdown(!showDropdown)}
                                onMouseLeave={() => setShowDropdown(false)}
                            />
                            {showDropdown && (
                                <div className=" sm:block  absolute top-[30px] right-[40px] md:right-[100px] z-[50] bg-[lightgray] w-max p-2 rounded shadow">
                                    <div className="flex justify-center items-center gap-3">
                                        <span>{user?.displayName}</span>
                                    </div>
                                </div>
                            )}
                            {/* <span className="hidden sm:block">{user?.displayName}</span> */}
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white py-1 px-4 rounded-md hidden md:flex"
                            >
                                Logout
                            </button>
                        </NavLink>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-green-500 text-white py-2 px-4 rounded-md"
                        >
                            Login
                        </Link>
                    )}
                    <div
                        className="md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        {!open ? (
                            <i className="fa-solid fa-bars text-3xl cursor-pointer"></i>
                        ) : (
                            <i className="fa-solid fa-xmark text-3xl cursor-pointer text-[crimson]"></i>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
