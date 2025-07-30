import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Shield, Users, Clock } from 'lucide-react';

const WhyChoose = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-light text-black mb-4">
          Why Choose <span className="text-[#D4AF37] font-normal">Akoya</span>
        </h1>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          data-aos="fade-up"
          className="bg-[#f8f5f2] p-8 rounded-xl text-center shadow-md hover:shadow-xl transition duration-300"
        >
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-medium text-black mb-4">Premium Quality</h3>
          <p className="text-black leading-relaxed">
            We use only the finest eco-friendly detergents and state-of-the-art equipment.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-[#f8f5f2] p-8 rounded-xl text-center shadow-md hover:shadow-xl transition duration-300"
        >
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-medium text-black mb-4">Personalized Service</h3>
          <p className="text-black leading-relaxed">
            Tailored solutions for each garment with our expert fabric specialists.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-[#f8f5f2] p-8 rounded-xl text-center shadow-md hover:shadow-xl transition duration-300"
        >
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center">
              <Clock className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-medium text-black mb-4">Convenience</h3>
          <p className="text-black leading-relaxed">
            24/7 booking with flexible pickup and delivery options.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
