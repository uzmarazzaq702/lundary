import React from 'react';

const Luxuary = () => {
  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-300"
      data-aos="fade-up"
    >
      <div className="text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-light mb-6">
          Luxury Laundry. Reimagined.
        </h1>

        <div className="flex items-center justify-center mb-6">
          <div className="h-px w-12 bg-yellow-500 mx-2" />
          <span className="text-yellow-500 tracking-widest text-sm md:text-base font-medium">
            AKOYA COLLECTION
          </span>
          <div className="h-px w-12 bg-yellow-500 mx-2" />
        </div>

        <button className="bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-400 transition duration-300">
          Schedule Your Pickup
        </button>
      </div>
    </div>
  );
};

export default Luxuary;
