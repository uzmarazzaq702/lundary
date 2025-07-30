import React from 'react';
import { Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b mt-20 from-white via-[#f9f6f1] to-[#f1ece7] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md sm:max-w-lg bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-[#1c1c1c] text-center py-6 relative">
          <h2 className="text-xl sm:text-2xl font-light text-[#D4AF37] tracking-wide break-words">
            AKOYA PREMIUM LAUNDRY
          </h2>
          <div className="w-44 sm:w-72 h-0.5 bg-[#D4AF37] mx-auto mt-2" />
          <p className="text-white text-sm sm:text-base mt-3">
            Reset Your Password
          </p>
        </div>

        {/* Icon */}
        <div className="flex justify-center mt-6">
          <div className="bg-gray-200 p-4 rounded-full shadow-md">
            <Lock className="text-yellow-600 w-6 h-6 sm:w-7 sm:h-7" />
          </div>
        </div>

        {/* Form Section */}
        <div className="px-4 sm:px-6 md:px-8 py-8 text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Forgot Password?</h3>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Enter your email address and we'll send you a verification code to reset your password.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Form submitted");
            }}
            className="space-y-6"
          >
            <div className="text-left">
              <label htmlFor="email" className="text-sm sm:text-base text-gray-700 font-medium">
                Email Address
              </label>
              <div className="mt-2 flex items-center border border-gray-300 rounded-md px-3 py-2">
                <Mail className="text-gray-400 w-5 h-5 mr-2" />
                <input
                  required
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full min-w-0 outline-none bg-transparent text-sm sm:text-base text-gray-700"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#e1ba27] hover:bg-[#d1a816] text-white font-semibold py-2 rounded-md transition-all"
            >
              Send Reset Code
            </button>
          </form>

          {/* Back to login */}
          <div className="mt-6 text-sm sm:text-base text-gray-600 text-center">
            <p>Remember your password?</p>
            <button
              onClick={() => navigate('/login')}
              className="mt-1 text-[#e1ba27] text-[18px] sm:text-[20px] hover:underline"
            >
              Back to Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
