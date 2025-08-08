import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthConText from "../../Firebase/Context/AuthConText";

const Navbar = () => {
    const { user, logout } = useContext(AuthConText);
    const navigate = useNavigate(); // ✅ useNavigate hook

    const hendleLogOut = () => {
        logout()
            .then(() => {
                console.log("SignOut SuccessFully");
                navigate("/"); // ✅ redirect after logout
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div className="fixed navbar bg-white/10 text-white shadow-sm px-4 sm:px-6">
            {/* Navbar Start */}
            <div className="navbar-start">
                {/* Mobile Menu Button */}
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
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
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow text-sm"
                    >
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                {/* Logo */}
                <Link to={"/"}>
                    <p className="btn btn-ghost text-xl sm:text-2xl font-bold">NextHire</p>
                </Link>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base">
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Contact</a></li>
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end gap-2 sm:gap-3">
                {user ? (
                    <>
                        <p>{user.email}</p>
                        <p
                            onClick={hendleLogOut}
                            className="btn btn-sm sm:btn-md text-white bg-transparent hover:bg-red-500 text-sm sm:text-base"
                        >
                            LogOut
                        </p>
                        
                    </>
                ) : (
                    <>
                        <Link to={"/register"}>
                            <p className="btn btn-sm sm:btn-md text-white bg-transparent hover:bg-cyan-500 text-sm sm:text-base">
                                Register
                            </p>
                        </Link>
                        <Link to={"/login"}>
                            <p className="btn btn-sm sm:btn-md text-white bg-transparent hover:bg-red-500 text-sm sm:text-base">
                                Login
                            </p>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
