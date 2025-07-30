import React, { useState } from "react";
import { Lock } from "lucide-react";
import collection1 from "../../assets/collection.jpg";
import uzma5 from "../../assets/uzma5.jpg";
import uzma7 from "../../assets/uzma7.jpg";

const packagingOptions = [
  {
    image: collection1,
    label: "Included",
    title: "Plastic Wrap",
    description:
      "Crystal-clear protective wrapping with our embossed gold seal for discreet luxury.",
    features: [
      "Medical-grade transparency",
      "Anti-static interior",
      "Recyclable material",
      "Tamper-evident closure",
    ],
  },
  {
    image: uzma7,
    label: "+25 QAR",
    title: "Luxury Fabric Wrap",
    description:
      "Cashmere-lined protective casing with magnetic closure and monogram option.",
    features: [
      "Italian wool exterior",
      "Silk-lined interior",
      "Magnetic seal",
      "Reusable design",
    ],
  },
  {
    image: uzma5,
    label: "+50 QAR",
    title: "Premium Gift Box",
    description:
      "Handcrafted wooden presentation case with velvet interior and scent capsule.",
    features: [
      "Sandalwood construction",
      "French velvet lining",
      "Integrated scent capsule",
      "Heirloom quality",
    ],
  },
];

const Finaltouch = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="w-full overflow-hidden bg-[#fdfcf9] px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className="text-center mb-12"
      >
        <h2
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="text-3xl md:text-4xl font-light text-[#1C1C1C] mb-4"
        >
          The Final Touch
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="w-10 h-px bg-[#D4AF37]"></div>
          <p
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="text-[#D4AF37] tracking-widest text-sm md:text-base font-medium uppercase"
          >
            Packaging Options
          </p>
          <div className="w-10 h-px bg-[#D4AF37]"></div>
        </div>
      </div>

      {/* Cards */}
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14"
      >
        {packagingOptions.map((option, index) => (
          <div key={index} className="relative w-full">
            {/* SELECTED Ribbon */}
            {selectedIndex === index && (
              <div className="absolute -top-3 -right-3 transform -rotate-45 origin-top-right z-20">
                <div className="bg-[#D4AF37] text-white px-8 py-1 text-xs font-bold tracking-wide shadow-md">
                  SELECTED
                </div>
              </div>
            )}

            {/* Card */}
            <div
              className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl group ${
                selectedIndex === index
                  ? "border-t-[4px] border-l-[4px] border-r-[4px] border-b-[8px] border-[#D4AF37]"
                  : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4">
                  <button
                    onClick={() => setSelectedIndex(index)}
                    className="px-4 py-1.5 rounded-full text-sm font-medium tracking-wide shadow-md bg-[#D4AF37] text-black transition-all duration-300 hover:bg-black hover:text-[#D4AF37]"
                  >
                    {option.label}
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {option.description}
                </p>
                <ul className="text-sm text-gray-800 space-y-2 mb-4">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#D4AF37] mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="text-center pb-16"
      >
        <button className="inline-flex items-center gap-2 px-9 py-4 bg-black text-white font-semibold text-sm rounded-full shadow-md hover:bg-[#1c1c1c] transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Book Your Order
          <Lock size={18} />
        </button>
      </div>
    </div>
  );
};

export default Finaltouch;
