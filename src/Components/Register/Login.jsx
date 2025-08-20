import React, { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthConText from "../../Firebase/Context/AuthConText";
import Lottie from "lottie-react";
import loginAnim from "../../assets/Sign up.json";
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
        <div className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden px-3 sm:px-4 mt-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Main Card */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-10 bg-white/10 backdrop-blur-lg p-5 sm:p-8 md:p-12 rounded-2xl shadow-2xl border border-white/20 max-w-6xl w-full">

                {/* Left Section */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-snug">
                        Welcome Back!
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-xl text-white/80 mb-4 sm:mb-6">
                        Enter your credentials to access your account <br /> and continue your journey with us.
                    </p>
                    <div className="w-60 sm:w-80 mx-auto lg:mx-0">
                        <Lottie animationData={loginAnim} loop={true} />
                    </div>
                </div>

                {/* Right Section (Form) */}
                <div className="flex-1 w-full max-w-md bg-white/20 backdrop-blur-lg p-5 sm:p-6 md:p-8 rounded-xl shadow-lg border border-white/30">
                    <form onSubmit={handleSubmit}>

                        {/* Email */}
                        <div className="mb-4 sm:mb-5">
                            <label className="block text-white/90 mb-1 font-medium text-sm sm:text-base">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/70 text-black placeholder-gray-600 focus:outline-none focus:ring-2 border transition-all duration-300 ${error ? "border-red-400 focus:ring-red-500 border-2" : "border-transparent focus:ring-indigo-400"
                                    }`}
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4 sm:mb-5 relative">
                            <label className="block text-white/90 mb-1 font-medium text-sm sm:text-base">Password</label>
                            <input
                                type={icon ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/70 text-black placeholder-gray-600 focus:outline-none focus:ring-2 border transition-all duration-300 ${error ? "border-red-400 focus:ring-red-500 border-2" : "border-transparent focus:ring-indigo-400"
                                    }`}
                            />
                            <span
                                className="absolute right-3 sm:right-4 top-9 sm:top-11 text-lg sm:text-xl cursor-pointer text-gray-700"
                                onClick={() => setIcon(!icon)}
                            >
                                {icon ? <IoMdEye /> : <IoMdEyeOff />}
                            </span>
                        </div>

                        {/* Error */}
                        {error && <p className="text-red-700 text-xs sm:text-sm mb-2">{error}</p>}

                        {/* Forgot Password */}
                        <div className="flex justify-between items-center text-xs sm:text-sm mb-4 sm:mb-5">
                            <a href="#" className="text-indigo-300 hover:underline">Forgot Password?</a>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition duration-300 shadow-lg shadow-indigo-500/30 text-sm sm:text-base"
                        >
                            <p className="flex items-center justify-center gap-2">
                                {loading ? (
                                    <RotatingLines
                                        height="22"
                                        width="22"
                                        radius="9"
                                        color="green"
                                        ariaLabel="loading"
                                    />
                                ) : "Login"}
                            </p>
                        </button>

                        {/* Signup Link */}
                        <div className="text-center text-xs sm:text-sm mt-3 sm:mt-4 text-white">
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
