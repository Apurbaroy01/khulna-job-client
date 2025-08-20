import React, { useState, useContext } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import AuthConText from "../../Firebase/Context/AuthConText";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import register from "../../assets/register.json";

const Register = () => {
  const { createUser } = useContext(AuthConText);
  const [icon, setIcon] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [termsError, setTermsError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setTermsError("");

    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const checkbox = form.checkbox.checked;

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }
    if (!checkbox) {
      setTermsError("You must accept the terms and conditions");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log("User created:", result.user);
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("Firebase Error:", error.message);
        setEmailError(error.message);
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
            Create Your Account
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 mb-4 sm:mb-6">
            Join us today and explore the best job opportunities tailored just for you.
          </p>
          <div className="w-56 sm:w-72 mx-auto lg:mx-0">
            <Lottie animationData={register} loop={true} />
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="flex-1 w-full max-w-md bg-white/20 backdrop-blur-lg p-5 sm:p-6 md:p-8 rounded-xl shadow-lg border border-white/30">
          <form onSubmit={handleSubmit} noValidate>
            
            {/* Email */}
            <div className="mb-4 sm:mb-5">
              <label className="block text-white/90 mb-1 font-medium text-sm sm:text-base">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/70 text-black placeholder-gray-600 focus:outline-none focus:ring-2 border transition-all duration-300 ${
                  emailError
                    ? "border-red-400 focus:ring-red-400"
                    : "border-transparent focus:ring-indigo-400"
                }`}
              />
              {emailError && <p className="text-red-400 text-xs sm:text-sm mt-1">{emailError}</p>}
            </div>

            {/* Password */}
            <div className="mb-4 sm:mb-5 relative">
              <label className="block text-white/90 mb-1 font-medium text-sm sm:text-base">Password</label>
              <input
                type={icon ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/70 text-black placeholder-gray-600 focus:outline-none focus:ring-2 border transition-all duration-300 ${
                  passwordError
                    ? "border-red-400 focus:ring-red-400"
                    : "border-transparent focus:ring-indigo-400"
                }`}
              />
              <span
                className="absolute right-3 sm:right-4 top-8 sm:top-10 text-lg sm:text-xl cursor-pointer text-gray-700"
                onClick={() => setIcon(!icon)}
              >
                {icon ? <IoMdEye /> : <IoMdEyeOff />}
              </span>
              {passwordError && (
                <p className="text-red-400 text-xs sm:text-sm mt-1">{passwordError}</p>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <input
                type="checkbox"
                name="checkbox"
                className={`w-4 h-4 sm:w-5 sm:h-5 rounded border ${termsError ? "border-red-500" : "border-gray-300"}`}
              />
              <label className="text-white/80 text-xs sm:text-sm">
                I accept the{" "}
                <span className="underline cursor-pointer hover:text-white">
                  terms & conditions
                </span>
              </label>
            </div>
            {termsError && <p className="text-red-400 text-xs sm:text-sm mb-3 sm:mb-4">{termsError}</p>}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition duration-300 shadow-lg shadow-indigo-500/30 text-sm sm:text-base"
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
