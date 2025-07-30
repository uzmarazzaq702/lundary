import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log('Login submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-10">
      <div className="w-full max-w-md sm:max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#2a2a2a] text-center py-6 sm:py-8 px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-light text-[#D4AF37] tracking-wide break-words">
            AKOYA PREMIUM LAUNDRY
          </h2>
          <p className="mt-1 sm:mt-2 text-gray-300 text-sm sm:text-base">Sign in to your account</p>
        </div>

        {/* Form */}
        <div className="p-4 sm:p-8">
          <div className="mb-6">
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm sm:text-base text-gray-700 font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                id="remember"
                className="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 focus:ring-2"
              />
              <label htmlFor="remember" className="ml-2 block text-sm sm:text-base text-gray-700">
                Remember me
              </label>
            </div>
            <button
              className="font-medium text-[#D4AF37] hover:text-yellow-600 text-sm sm:text-base"
              onClick={() => navigate('/forgetpassword')}
            >
              Forgot password?
            </button>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-[#D4AF37] hover:bg-yellow-600 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-lg transition-colors duration-300 mb-6 text-sm sm:text-base"
          >
            Sign in
          </button>

          <div className="text-center">
            <p className="text-gray-500 text-sm sm:text-base">New to AKOYA?</p>
            <button
              onClick={() => navigate('/signup')}
              className="text-[#D4AF37] hover:text-yellow-600 font-medium text-sm sm:text-base"
            >
              Create your account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
