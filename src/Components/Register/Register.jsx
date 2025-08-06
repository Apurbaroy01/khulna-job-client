import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const Register = () => {
    const [icon, setIcon] = useState();
    return (
        <div className="hero bg-transparent min-h-screen">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-white/20 max-w-5xl w-full">

                {/* Text Section */}
                <div className="text-center lg:text-left flex-1">
                    <h1 className="text-4xl font-bold text-white mb-4">Welcome Back!</h1>
                    <p className="text-white/80">
                        Enter your credentials to access your account and explore the best job opportunities.
                    </p>
                </div>

                {/* Form Section */}
                <div className="w-full max-w-sm bg-white/20 p-8 rounded-xl shadow-lg border border-white/30">
                    <form>
                        <div className="mb-4">
                            <label className="block text-white/90 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-lg bg-white/70 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="mb-4 relative">
                            <label className="block text-white/90 mb-1">Password</label>
                            <input
                                type={icon ? 'text' : 'password'}
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 rounded-lg bg-white/70 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <p className='absolute right-4 top-10  text-xl' onClick={() => setIcon(!icon)}>
                                {
                                    icon ? <IoMdEye /> : <IoMdEyeOff />
                                }

                            </p>
                        </div>
                        <div className="flex justify-between items-center text-sm mb-4 *:text-white">

                        
                            <label className="label">
                                <input type="checkbox"  className="checkbox" />
                                I accept terms and condition
                            </label>

                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;