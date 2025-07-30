import React from 'react';

const Signatureline = () => {
  return (
    <div
      data-aos="flip-left"
      className="text-center py-16 px-4 sm:px-6 md:px-8 bg-[#fdfcf9] overflow-x-hidden"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-3 tracking-tight">
        Signature Lines
      </h2>

      {/* Subheading with lines */}
      <div className="flex items-center justify-center gap-4 whitespace-nowrap overflow-hidden">
        <div className="w-16 h-px bg-[#D4AF37]"></div>
        <p className="text-xl text-[#D4AF37] tracking-widest font-medium uppercase">
          The Akoya Collection
        </p>
        <div className="w-16 h-px bg-[#D4AF37]"></div>
      </div>
    </div>
  );
};

export default Signatureline;
