import React from "react";

const OurServices = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
      className="text-center mb-12 px-4 sm:px-6 lg:px-8"
    >
      <h2
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="text-3xl md:text-4xl mt-12 font-light text-[#1C1C1C] mb-4"
      >
        Our Services
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <div className="w-16 h-px bg-[#D4AF37] sm:w-10"></div>
        <p
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="text-[#D4AF37] tracking-widest text-sm md:text-base font-medium uppercase"
        >
          Luxury Garment Care
        </p>
        <div className="w-16 h-px bg-[#D4AF37] sm:w-10"></div>
      </div>
    </div>
  );
};

export default OurServices;
