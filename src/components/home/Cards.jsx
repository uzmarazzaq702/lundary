import React, { useEffect } from "react";
import uzma2 from "../../assets/uzma2.jpg";
import collection from "../../assets/Collection.jpg";
import collection1 from "../../assets/Collection1.jpg";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Cards = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  const services = [
    {
      icon: <span className="text-3xl">👑</span>,
      title: "The Platinum Care",
      description:
        "Our highest tier service for your most precious garments. Hand-washed, steamed, and wrapped in protective tissue.",
      bgImage: uzma2,
    },
    {
      icon: <span className="text-3xl">👔</span>,
      title: "Executive Collection",
      description:
        "Precision care for business attire. Perfect creases, stain removal, and fabric revitalization for your professional image.",
      bgImage: collection,
    },
    {
      icon: <span className="text-3xl">✨</span>,
      title: "Couture Preservation",
      description:
        "Specialized care for designer pieces and delicate fabrics. Museum-quality cleaning to maintain texture and color integrity.",
      bgImage: collection1,
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-[#faf9f7]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 cursor-pointer w-full"
            >
              {/* Image with AOS animation */}
              <div
                className="overflow-hidden rounded-2xl"
                data-aos="zoom-in"
                data-aos-delay={index * 300}
              >
                <img
                  src={service.bgImage}
                  alt={service.title}
                  className="w-full h-[270px] object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl z-10" />

              {/* Content */}
              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between z-20">
                <div className="text-2xl w-14 h-14 flex items-center justify-center bg-[#D4AF37] rounded-full text-white shadow-lg mb-4 transition-all duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

                <div className="mt-auto">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-[15px]">
                    {service.description}
                  </p>

                  <button className="bg-[#D4AF37] hover:bg-black text-black hover:text-[#D4AF37] font-semibold py-2 px-5 sm:px-6 rounded-full transition-all duration-300 flex items-center space-x-2 text-sm">
                    <span>Discover</span>
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button below cards */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="1000"
          className="mt-10 mb-16 text-center"
        >
          <button className="inline-flex items-center mt-5 gap-2 px-6 py-3 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-black hover:text-white hover:border-black transition-colors duration-200 font-medium">
            View All Collections
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
