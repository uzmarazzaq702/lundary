import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-20 px-4 sm:px-6 bg-[#747070] opacity-60 fixed top-0 left-0 z-50 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-16 sm:h-12 sm:w-20" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex flex-1 justify-center space-x-6 ml-4">
        <Link to="/" className="text-white font-semibold hover:text-yellow-400">
          HOME
        </Link>
        <Link to="/services" className="text-white font-semibold hover:text-yellow-400">
          SERVICES
        </Link>
        <Link to="/about" className="text-white font-semibold hover:text-yellow-400">
          ABOUT
        </Link>
        <Link to="/contact" className="text-white font-semibold hover:text-yellow-400">
          CONTACT
        </Link>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/login">
          <button className="text-white font-semibold border border-yellow-500 px-4 py-1 rounded-full hover:bg-yellow-500 transition">
            Client Login
          </button>
        </Link>
        <Link to="/bookNow">
          <button className="bg-yellow-500 text-black font-semibold px-4 py-1 rounded-full hover:bg-yellow-600 transition">
            Book Now
          </button>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-yellow-400 focus:outline-none"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black bg-opacity-90 flex flex-col items-start px-6 py-6 space-y-4 z-40">
          <Link
            to="/"
            className="text-white font-semibold hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/services"
            className="text-white font-semibold hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            SERVICES
          </Link>
          <Link
            to="/about"
            className="text-white font-semibold hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className="text-white font-semibold hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <button className="text-white font-semibold border border-yellow-500 px-4 py-1 rounded-full hover:bg-yellow-500 transition w-full text-left">
              Client Login
            </button>
          </Link>
          <Link to="/bookNow" onClick={() => setIsOpen(false)}>
            <button className="bg-yellow-500 text-black font-semibold px-4 py-1 rounded-full hover:bg-yellow-600 transition w-full text-left">
              Book Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
