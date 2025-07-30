import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Twitter,
  MessageCircle,
} from 'lucide-react';

const Touch = () => {
  return (
    <div className="bg-gray-100 overflow-hidden">
      {/* Header Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-6 break-words">
            Contact Us
          </h1>

          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-yellow-500 w-16"></div>
            <span className="text-yellow-500 font-medium tracking-widest text-sm uppercase">
              GET IN TOUCH
            </span>
            <div className="h-px bg-yellow-500 w-16"></div>
          </div>
        </div>
      </div>

      {/* Contact Content Section */}
      <div className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-8" data-aos="fade-right">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  How to reach us
                </h2>
                <p className="text-gray-700 leading-relaxed text-base sm:text-[16px]">
                  Our concierge team is available to assist you with any
                  inquiries about our premium laundry services. Reach out via
                  your preferred method and we'll respond promptly.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#F8F5F2] p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Location</h3>
                    <p className="text-gray-700 text-[16px]">
                      West Bay, Doha, Qatar
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#F8F5F2] p-3 rounded-full">
                    <Phone className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Phone</h3>
                    <p className="text-gray-700 text-[16px]">+974 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#F8F5F2] p-3 rounded-full">
                    <Mail className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Email</h3>
                    <p className="text-gray-700 text-[16px]">
                      info@akoyalaundry.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <a
                    href="#"
                    className="bg-gray-800 p-3 rounded-full hover:bg-yellow-500 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-800 p-3 rounded-full hover:bg-yellow-500 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-800 p-3 rounded-full hover:bg-yellow-500 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div
              className="bg-white p-6 sm:p-8 rounded-lg shadow-sm"
              data-aos="fade-left"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Send us a message
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-md font-medium transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Touch;
