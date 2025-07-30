import React, { useEffect } from "react";
import { MessageCircle } from "lucide-react";

const cards = [
  {
    number: "1.",
    title: "Select Wash Type",
    description: "Standard or Express wash options to suit your needs",
    icon: <span className="text-[#D4AF37] text-4xl">👕</span>,
  },
  {
    number: "2.",
    title: "Choose Garments",
    description: "Schedule a pickup at your preferred time",
    icon: <span className="text-[#D4AF37] text-4xl">👚</span>,
  },
  {
    number: "3.",
    title: "Steam Finishing",
    description: "Inspection of fabric to decide best care",
    icon: <span className="text-[#D4AF37] text-4xl">🧴</span>,
  },
  {
    number: "4.",
    title: "Fragrance Infusion",
    description: "Washing with premium detergents & care",
    icon: <span className="text-[#D4AF37] text-4xl">🧴</span>,
  },
  {
    number: "5.",
    title: "Packaging",
    description: "Drying and perfect wrinkle-free pressing",
    icon: <span className="text-[#D4AF37] text-4xl">📦</span>,
  },
  {
    number: "6.",
    title: "Personalization",
    description: "Neat & clean packing with fragrance options",
    icon: <span className="text-[#D4AF37] text-4xl">🎁</span>,
  },
  {
    number: "7.",
    title: "WhatsApp Checkout",
    description: "Message us anytime for help or feedback",
    icon: <MessageCircle size={36} className="text-[#D4AF37]" />,
  },
  {
    number: "8.",
    title: "AI Assistance",
    description: "3D avatars guide you in Arabic & English",
    icon: <span className="text-[#D4AF37] text-4xl">🤖</span>,
  },
];

const Jurney = () => {
  return (
    <div className="bg-[#F8F5F2] py-8 px-4 sm:py-12 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center text-black mb-6 sm:mb-8 md:mb-10">
        Our Service Journey
      </h2>

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-md p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm text-center hover:shadow-md transition-shadow duration-300 h-auto min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] flex flex-col justify-center"
            >
              <div className="flex justify-center mb-2 sm:mb-3">{card.icon}</div>
              <h3 className="text-black text-sm sm:text-base md:text-[17px] font-medium mb-1 sm:mb-2 leading-tight">
                {card.number} {card.title}
              </h3>
              <p className="text-black text-xs sm:text-sm leading-snug flex-grow flex items-center justify-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jurney;