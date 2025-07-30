import React from 'react';
import { MessageCircle } from 'lucide-react';

const Need = () => {
  return (
    <div className="bg-[#1C1C1C] text-white py-20 px-4 md:px-12 lg:px-24 mt-20 text-center">
      <h2
        data-aos="fade-up-right"
        className="text-2xl md:text-3xl font-light text-[#D4AF37] mb-6"
      >
        Need Personalized Service?
      </h2>

      <p
        data-aos="fade-up-right"
        className="text-base md:text-lg lg:text-medium leading-relaxed text-white mb-10"
      >
        Our VIP concierge team is available 24/7 to handle special requests,
        delicate items, or bulk orders for businesses and residences.
      </p>

      <button className="bg-[#D4AF37] text-black px-6 md:px-8 py-3 rounded-full font-medium flex items-center gap-2 mx-auto hover:bg-[#c9a233] transition">
        Contact Concierge <MessageCircle className="w-5 h-5" />
      </button>

      <div className="h-[1px] bg-white mt-10 w-full"></div>
    </div>
  );
};

export default Need;
