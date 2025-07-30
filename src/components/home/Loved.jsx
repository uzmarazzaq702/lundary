import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import sana from "../../assets/sana.webp";
import photo1 from "../../assets/photo1.webp";
import photo2 from "../../assets/photo2.webp";

const testimonials = [
  {
    name: "Sheikha Al-Thani",
    title: "Fashion Designer",
    message:
      "Akoya's attention to detail is unmatched. My delicate couture pieces return looking better than when they were new. The only service I trust with my collection!",
    image: sana,
  },
  {
    name: "Mr. Khalid Al-Mansoori.",
    title: "Executive Director",
    message:
      "As someone who wears bespoke suits daily, Akoya's executive service saves me hours each week. Their precision pressing is worth every dirham.",
    image: photo1,
  },
  {
    name: "Mrs. Eleanor Rutherford",
    title: "Diplomat's Wife",
    message:
      "The fragrance infusion option is divine. My clothes return smelling like a Parisian boutique. It's become my signature scent in Doha's social circles.",
    image: photo2,
  },
];

const Loved = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="text-center mb-20 bg-[#FAF8F4] px-4 overflow-hidden"
    >
      <h2
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="text-3xl md:text-4xl font-light text-[#1C1C1C] mb-3"
      >
        Loved by Doha&apos;s Finest
      </h2>

      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="flex items-center justify-center mb-8"
      >
        <div className="h-0.5 bg-[#D4AF37] flex-1 max-w-20"></div>
        <h2 className="mx-4 text-sm md:text-base font-medium tracking-widest text-[#D4AF37] uppercase">
          Client Testimonials
        </h2>
        <div className="h-0.5 bg-[#D4AF37] flex-1 max-w-20"></div>
      </div>

      <div className="relative max-w-5xl mx-auto min-h-[520px] w-full">
        {testimonials.map((review, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ease-in-out absolute inset-0 px-2 ${
              index === current
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-95 z-0"
            }`}
          >
            <div className="p-4 w-full">
              <div className="bg-white p-6 md:p-10 py-12 px-6 md:px-16 lg:px-24 relative overflow-hidden rounded-2xl flex flex-col md:flex-row items-center text-center md:text-left gap-6 w-full shadow-2xl border border-gray-100 max-w-full">
                <div className="w-40 h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-[#D4AF37]">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col items-center md:items-start">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < 4 ? "text-[#D4AF37]" : "text-black"
                        }`}
                        fill={i < 4 ? "#D4AF37" : "#000"}
                      />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed italic mb-3">
                    “{review.message}”
                  </p>
                  <p className="text-sm font-semibold text-[#D4AF37] mb-1">
                    — {review.name}
                  </p>
                  <p className="text-sm text-gray-600">{review.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="mt-12 px-9 py-4 bg-[#1C1C1C] text-white rounded-full font-medium flex items-center gap-2 text-sm tracking-wider mx-auto hover:bg-[#333] transition"
      >
        <span>Join Our Discerning Clients</span>
        <FaArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Loved;
