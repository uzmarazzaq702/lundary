import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white px-6 md:px-20 py-12">
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* Logo & Description */}
        <div>
          <div className="mb-4">
            <img
              src={logo}
              alt="Akoya Logo"
              className="w-24 mx-auto md:ml-4 mt-2"
            />
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Luxury garment care redefined. Serving Doha&apos;s discerning
            clients with unparalleled quality and service.
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-[#D4AF37] text-lg font-medium mb-6 tracking-wider">
            OUR SERVICES
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <span className="text-[#D4AF37] text-lg">›</span> Premium Laundry
            </li>
            <li>
              <span className="text-[#D4AF37] text-lg">›</span> Dry Cleaning
            </li>
            <li>
              <span className="text-[#D4AF37] text-lg">›</span> Steam Pressing
            </li>
            <li>
              <span className="text-[#D4AF37] text-lg">›</span> Fragrance Infusion
            </li>
            <li>
              <span className="text-[#D4AF37] text-lg">›</span> Couture Care
            </li>
            <li>
              <span className="text-[#D4AF37] text-lg">›</span> VIP Club
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-[#D4AF37] text-lg font-medium mb-6 tracking-wider">
            CONTACT US
          </h3>
          <ul className="text-sm text-gray-300 space-y-3">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-[#D4AF37]" />
              <span>West Bay, Doha, Qatar</span>
            </li>
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1 text-[#D4AF37]" />
              <span>+974 1234 5678</span>
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="mt-1 text-[#D4AF37]" />
              <span>info@akoyalaundry.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-[#D4AF37] text-lg font-medium mb-6 tracking-wider">
            NEWSLETTER
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe for exclusive offers and garment care tips.
          </p>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-3 py-3 text-medium text-white bg-[#2E2E2E] border-1 border-[#D4AF37] rounded mb-3 placeholder-gray-400"
          />
          <button className="w-full bg-[#D4AF37] text-black py-3 font-semibold rounded hover:bg-[#c29c2f]">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-4 text-sm text-gray-400 flex justify-end gap-6">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Sitemap</a>
      </div>
    </footer>
  );
};

export default Footer;
