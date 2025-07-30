import React from "react";
import { FaCheck, FaPlus, FaInfoCircle } from "react-icons/fa";
import aquaClub from "../../assets/aquaClub.jpg";

const features = [
  "Priority scheduling with 2-hour pickup windows",
  "Dedicated garment concierge",
  "Complimentary fragrance infusion",
  "Luxury packaging as standard",
  "Bi-annual complimentary couture care",
  "Exclusive seasonal offers",
];

const Akoya = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col md:flex-row bg-black text-white rounded-xl gap-5 overflow-hidden shadow-lg py-10">
        {/* Left image */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="relative w-full md:w-[45%] h-60 md:h-auto"
        >
          {/* Exclusive Badge */}
          <div className="absolute right-2 top-3 bg-[#D4AF37] text-black text-sm font-bold px-6 py-2 rounded-full flex items-center gap-1 shadow-md z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L13.09 8.26L19 9.27L14.5 13.97L15.82 21L12 17.27L8.18 21L9.5 13.97L5 9.27L10.91 8.26L12 2Z" />
            </svg>
            EXCLUSIVE
          </div>

          <img
            src={aquaClub}
            alt="Luxury folded garment representing Aqua Club"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Right content */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-full md:w-[55%] px-2 sm:px-4 md:px-8 pt-8 md:pt-20 flex flex-col justify-center"
        >
          <span className="text-[#D4AF37] text-3xl md:text-4xl font-light mb-4 tracking-tight">
            Akoya Club
          </span>

          <h2 className="text-base md:text-lg tracking-widest text-white mb-4 font-semibold uppercase">
            For the Few Who Know
          </h2>

          <p className="text-sm text-white/90 mb-6 leading-relaxed max-w-md">
            Our invitation-only membership program offers unparalleled benefits
            for those who demand the absolute best in garment care and
            convenience.
          </p>

          <ul className="mb-8 space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-white/90"
              >
                <FaCheck className="text-[#D4AF37] mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 border-2 border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-full hover:bg-[#D4AF37] hover:text-black transition text-sm">
              Request Invitation <FaPlus />
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#D4AF37] text-black px-6 py-3 rounded-full hover:bg-[#bda045] transition text-sm">
              Learn More <FaInfoCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Akoya;
