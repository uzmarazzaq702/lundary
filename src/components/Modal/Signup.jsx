import React, { useState } from "react";
import { Mail, Lock, User, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let valid = true;
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }

    if (!form.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", form);
    }
  };

  return (
    <div className="min-h-screen mt-20 flex items-center justify-center bg-[#f9f6f2] px-4 sm:px-6 md:px-10 lg:px-20 py-10 relative overflow-hidden">
      <div className="w-full max-w-md sm:max-w-lg bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#1c1c1c] text-center py-6 sm:py-8 px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-light text-[#D4AF37] tracking-wide break-words">
            Akoya Premium Laundry
          </h2>
          <p className="text-sm sm:text-base text-white mt-1">
            Create your premium account
          </p>
        </div>

        {/* Form */}
        <form className="px-4 sm:px-6 md:px-8 py-6 space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="text-sm sm:text-base font-medium text-gray-700">
              Full Name
            </label>
            <div className="flex items-center mt-1 border border-gray-300 rounded-md px-3 py-2">
              <User size={18} className="text-gray-400 mr-2" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full outline-none text-sm sm:text-base"
              />
            </div>
            {errors.name && (
              <p className="text-xs sm:text-sm text-red-500 mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm sm:text-base font-medium text-gray-700">
              Email Address
            </label>
            <div className="flex items-center mt-1 border border-gray-300 rounded-md px-3 py-2">
              <Mail size={18} className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full outline-none text-sm sm:text-base"
              />
            </div>
            {errors.email && (
              <p className="text-xs sm:text-sm text-red-500 mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm sm:text-base font-medium text-gray-700">
              Password
            </label>
            <div className="flex items-center mt-1 border border-gray-300 rounded-md px-3 py-2">
              <Lock size={18} className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full outline-none text-sm sm:text-base"
              />
            </div>
            {errors.password && (
              <p className="text-xs sm:text-sm text-red-500 mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm sm:text-base font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="flex items-center mt-1 border border-gray-300 rounded-md px-3 py-2">
              <Check size={18} className="text-gray-400 mr-2" />
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="********"
                className="w-full outline-none text-sm sm:text-base"
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-xs sm:text-sm text-red-500 mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2.5 sm:py-3 bg-[#D4AF37] hover:bg-yellow-500 text-black text-sm sm:text-base font-semibold rounded transition-all duration-300"
          >
            Create Account
          </button>

          {/* Sign In link */}
          <p className="text-center text-sm sm:text-base mt-4">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              type="button"
              className="text-[#D4AF37] font-medium hover:underline"
            >
              Sign In
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
