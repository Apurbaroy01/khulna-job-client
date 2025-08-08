import React, { useContext, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AuthConText from '../../Firebase/Context/AuthConText';

const Login = () => {
    const { signIn } = useContext(AuthConText)
    const [icon, setIcon] = useState('');
    const [error, setError] = useState('')

    const Navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        signIn(email, password)
            .then((result) => {
                console.log(result)
                form.reset()
                Navigate('/')
            })
            .catch((error) => {
                console.log(error.message)
                setError('error')
            });
    }
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
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-white/90 mb-1">Email</label>
                            <input
                                type="email" name='email'
                                placeholder="Enter your email"
                                className={`w-full px-4 py-2 rounded-lg bg-white/70 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 ${error && ' border border-red-500'}`}
                            />
                        </div>
                        <div className="mb-4 relative">
                            <label className="block text-white/90 mb-1">Password</label>
                            <input
                                type={icon ? 'text' : 'password'} name='password'
                                placeholder="Enter your password"
                                className={`w-full px-4 py-2 rounded-lg bg-white/70 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 ${error && ' border border-red-500'}`}
                            />
                            <p className='absolute right-4 top-10  text-xl' onClick={() => setIcon(!icon)}>
                                {
                                    icon ? <IoMdEye /> : <IoMdEyeOff />
                                }

                            </p>
                        </div>
                        <div className="flex justify-between items-center text-sm mb-4">
                            <a href="#" className="text-blue-300 hover:underline">Forgot Password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
                        >
                            Login
                        </button>
                        <div className="text-center items-center text-sm mt-2">
                            <p className="text-white">Don't have an account? <Link to={'/register'} className='text-red-300 hover:underline'>Sign up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;