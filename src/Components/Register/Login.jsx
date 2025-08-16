import React, { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthConText from "../../Firebase/Context/AuthConText";
import Lottie from "lottie-react"; // তোমার লোটি অ্যানিমেশন ফাইল
import loginAnim from "../../assets/Sign up.json"; // তোমার লোটি অ্যানিমেশন ফাইল
import { RotatingLines } from "react-loader-spinner";


const Login = () => {
    const { signIn, loading } = useContext(AuthConText);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || "/";

    const [icon, setIcon] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        const form = e.target;
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        signIn(email, password)
            .then((result) => {
                console.log(result);
                form.reset();
                navigate(from);
            })
            .catch((err) => {
                console.log(err.message);
                setError("Invalid email or password");
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden px-4">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Main Card */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 bg-white/10 backdrop-blur-lg p-8 md:p-12 rounded-2xl shadow-2xl border border-white/20 max-w-6xl w-full">

                {/* Left Section */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        Welcome Back!
                    </h1>
                    <p className="text-white/80 mb-6 text-lg">
                        Enter your credentials to access your account and continue your journey with us.
                    </p>
                    <div className="w-100 mx-auto lg:mx-0">
                        <Lottie animationData={loginAnim} loop={true} />
                    </div>
                </div>

                {/* Right Section (Form) */}
                <div className="flex-1 w-full max-w-md bg-white/20 backdrop-blur-lg p-6 md:p-8 rounded-xl shadow-lg border border-white/30">
                    <form onSubmit={handleSubmit}>

                        {/* Email */}
                        <div className="mb-5">
                            <label className="block text-white/90 mb-1 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className={`w-full px-4 py-3 rounded-lg bg-white/70 text-black placeholder-gray-600 focus:outline-none focus:ring-2 border transition-all duration-300 ${error ? "border-red-400 focus:ring-red-500 border-2" : "border-transparent focus:ring-indigo-400"
                                    }`}
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-5 relative">
                            <label className="block text-white/90 mb-1 font-medium">Password</label>
                            <input
                                type={icon ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                className={`w-full px-4 py-3 rounded-lg bg-white/70 text-black placeholder-gray-600 focus:outline-none focus:ring-2 border transition-all duration-300 ${error ? "border-red-400 focus:ring-red-500 border-2" : "border-transparent focus:ring-indigo-400"
                                    }`}
                            />
                            <span
                                className="absolute right-4 top-11 text-xl cursor-pointer text-gray-700"
                                onClick={() => setIcon(!icon)}
                            >
                                {icon ? <IoMdEye /> : <IoMdEyeOff />}
                            </span>
                        </div>

                        {/* Error */}
                        {error && <p className="text-red-700 font- text-sm mb-2">{error}</p>}

                        {/* Forgot Password */}
                        <div className="flex justify-between items-center text-sm mb-5">
                            <a href="#" className="text-indigo-300 hover:underline">Forgot Password?</a>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg shadow-indigo-500/30"
                        >

                            <p className="flex items-center justify-center gap-2">
                                {
                                    loading ? <RotatingLines
                                        height="25"
                                        width="25"
                                        radius="9"
                                        color="green"
                                        ariaLabel="loading"
                                        wrapperStyle
                                        wrapperClass
                                    /> : "Login"
                                }
                            </p>
                        </button>

                        {/* Signup Link */}
                        <div className="text-center text-sm mt-4 text-white">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-red-300 hover:underline">
                                Sign up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
