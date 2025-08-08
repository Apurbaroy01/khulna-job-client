import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthConText from "../../Firebase/Context/AuthConText";


const Navbar = () => {
    const { user, logout } = useContext(AuthConText);

    const hendleLogOut=()=>{
        logout()
        .then(()=>{
            console.log('SignOut SuccessFully')
        })
        .catch((error)=>{
            console.log(error.message)
        });
    };


    return (
        <div className="fixed navbar bg-white/10 text-white shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to={'/'}><p className="btn btn-ghost text-2xl">NextHire</p></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-3 **:text-white">
                {/* <Link to={'/register'}><p className="btn bg-transparent hover:bg-cyan-500">Register</p></Link>
                <Link to={'/login'}><p className="btn bg-transparent hover:bg-red-500">Login</p></Link> */}

                {
                    user ? <p onClick={hendleLogOut} className="btn bg-transparent hover:bg-red-500">LogOut</p> : <>
                        <Link to={'/register'}><p className="btn bg-transparent hover:bg-cyan-500">Register</p></Link>
                        <Link to={'/login'}><p className="btn bg-transparent hover:bg-red-500">Login</p></Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;