import React from "react";

const How = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16 sm:py-20 overflow-x-hidden">
      <div className="w-full max-w-6xl text-center mx-auto">
        
        <div className="mb-16 px-2">
          <h1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
          >
            How Would You Like It Washed?
          </h1>
          <p
            data-aos="zoom-out-up"
            className="text-lg sm:text-xl text-[#D4AF37] font-medium tracking-wide"
          >
            CHOOSE YOUR EXPERIENCE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12 px-2">
          <div
            data-aos="zoom-in-right"
            className="bg-[#F5E1DA] rounded-3xl p-6 sm:p-8 text-left shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:-translate-y-2"
          >
            <div className="mb-6">
              <div className="mb-4 text-5xl">🧼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Standard Wash
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Our signature 48-hour service with gentle cleaning, eco-friendly
                detergents, and basic folding.
              </p>
            </div>
            <div className="text-[#D4AF37] font-medium text-lg">
              From 50 QAR
            </div>
          </div>

          <div
            data-aos="zoom-in-left"
            className="bg-[#F5E1DA] rounded-3xl p-6 sm:p-8 text-left shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:-translate-y-2"
          >
            <div className="mb-6">
              <div className="mb-4 text-5xl">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Express Wash
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Need it fast? Get 24-hour turnaround, priority processing, and
                premium care.
              </p>
            </div>
            <div className="text-[#D4AF37] font-medium text-lg">
              From 80 QAR
            </div>
          </div>
        </div>

        <div data-aos="zoom-out-up" className="mb-8">
          <button className="px-8 sm:px-10 py-3 sm:py-4 bg-[#D4AF37] text-black font-semibold text-sm sm:text-base rounded-full transition-colors duration-200">
            Continue to Garment Selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default How;
