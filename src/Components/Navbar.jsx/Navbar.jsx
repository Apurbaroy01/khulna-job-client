import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthConText from "../../Firebase/Context/AuthConText";
import { FaUserCircle } from "react-icons/fa";
import { IoIosAddCircle, IoIosSend } from "react-icons/io";
import { MdOutlinePostAdd } from "react-icons/md";

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
        <div className="bg-transparent from-[#0f172a] via-[#1e293b] to-[#0f172a] shadow-lg border-b border-white/10">
            <div className="navbar container mx-auto px-4 text-white/5 backdrop-blur-md">
                {/* Navbar Start */}
                <div className="navbar-start text-white">
                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-3 shadow-lg bg-[#1e293b] rounded-lg w-52 gap-2  text-white">
                            {user && (
                                <>
                                    <Link to="/" className="hover:text-cyan-400">Home</Link>
                                    <Link to="/application" className="hover:text-cyan-400">Application</Link>
                                </>
                            )}
                        </ul>
                    </div>
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <span className="text-2xl font-bold tracking-wide">NextHire</span>
                    </Link>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex  text-white">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        {user && (
                            <>
                                <Link to="/addjob" className="hover:text-cyan-400 transition-colors flex items-center"><IoIosAddCircle /> <p>Add Job</p></Link>
                                <Link to="/mypost" className="hover:text-cyan-400 transition-colors flex items-center"><MdOutlinePostAdd /> <p>My Post</p></Link>
                                <Link to="/application" className="hover:text-cyan-400 transition-colors flex items-center"><IoIosSend /> <p>Application</p></Link>
                            </>
                        )}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end gap-3">
                    {user ? (
                        <>
                            <div className="flex items-center gap-2">
                                <FaUserCircle className="text-2xl text-cyan-400" />
                                <span className="hidden sm:block  text-white">{user.email}</span>
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
                            <Link to="/register" className="px-4 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition-all duration-200 text-sm  text-white">
                                Register
                            </Link>
                            <Link to="/login" className="px-4 py-1 rounded-lg bg-red-500 hover:bg-red-600 transition-all duration-200 text-sm  text-white">
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
