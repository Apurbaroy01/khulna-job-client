import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthConText from "../../Firebase/Context/AuthConText";
import { FaUserCircle } from "react-icons/fa";
import { IoIosAddCircle, IoIosSend } from "react-icons/io";
import { MdOutlinePostAdd } from "react-icons/md";
import { IoHome } from "react-icons/io5";

const Navbar = () => {
    const { user, logout } = useContext(AuthConText);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logout()
            .then(() => {
                console.log("SignOut Successfully");
                navigate("/");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div className="bg-transparent shadow-lg border-b  border-white/30 fixed w-full top-0 z-50 ">
            <div className="navbar container mx-auto px-4 text-white backdrop-blur-md">
                {/* Navbar Start */}
                <div className="navbar-start">
                    {/* Mobile Dropdown */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-4 shadow-xl bg-[#1e293b] rounded-xl w-60 gap-3 text-white/90 z-50"
                        >
                            {user ? (
                                <>
                                    <Link to="/" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                                        <IoHome size={20} /> <span>Home</span>
                                    </Link>
                                    
                                    <Link to="/addjob" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                                        <IoIosAddCircle size={20} /> <span>Add Job</span>
                                    </Link>
                                    <Link to="/mypost" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                                        <MdOutlinePostAdd size={20} /> <span>My Post</span>
                                    </Link>
                                    <Link to="/application" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                                        <IoIosSend size={20} /> <span>Application</span>
                                    </Link>
                                    <hr className="border-white/20 my-2" />
                                    <div className="flex items-center gap-2">
                                        <FaUserCircle className="text-2xl text-cyan-400" />
                                        <span className="truncate">{user.email}</span>
                                    </div>
                                    <button
                                        onClick={handleLogOut}
                                        className="mt-2 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition-all duration-200 text-white text-sm w-full"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link to="/register" className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition-all duration-200 text-sm text-center text-white">
                                        Register
                                    </Link>
                                    <Link to="/login" className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition-all duration-200 text-sm text-center text-white">
                                        Login
                                    </Link>
                                </>
                            )}
                        </ul>
                    </div>
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <span className="text-2xl font-bold tracking-wide text-cyan-400">NextHire</span>
                    </Link>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6 text-white">
                        {user && (
                            <>
                                <Link to="/" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                                    <IoHome /> <p>Home</p>
                                </Link>
                                
                                <Link to="/addjob" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                                    <IoIosAddCircle /> <p>Add Job</p>
                                </Link>
                                <Link to="/mypost" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                                    <MdOutlinePostAdd /> <p>My Post</p>
                                </Link>
                                <Link to="/application" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                                    <IoIosSend /> <p>Application</p>
                                </Link>
                            </>
                        )}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end gap-3 hidden lg:flex">
                    {user ? (
                        <>
                            <div className="flex items-center gap-2">
                                <FaUserCircle className="text-2xl text-cyan-400" />
                                <span className="text-white">{user.email}</span>
                            </div>
                            <button
                                onClick={handleLogOut}
                                className="px-4 py-1 rounded-lg bg-red-500 hover:bg-red-600 transition-all duration-200 text-white text-sm"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/register" className="px-4 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition-all duration-200 text-sm text-white">
                                Register
                            </Link>
                            <Link to="/login" className="px-4 py-1 rounded-lg bg-red-500 hover:bg-red-600 transition-all duration-200 text-sm text-white">
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
