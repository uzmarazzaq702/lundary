import React, { useEffect, useState } from "react";


import dryCleaning from "../../../assets/dryCleaning.jpg";
import executivePressing from "../../../assets/exectivePressing.jpg";
import care from "../../../assets/care.jpg";
import resturation from "../../../assets/resturation.jpg";
import collection1 from "../../../assets/Collection1.jpg";
import fragrance from "../../../assets/fragrance.jpg";
import child from "../../../assets/child.jpg";
import bisht from "../../../assets/bisht.jpg";
import ghutra from "../../../assets/ghutra.jpg";
import kurta from "../../../assets/kurta.jpg";
import kurtaPagama from "../../../assets/kurtaPajama.jpg";
import kameez from "../../../assets/kameez.jpg";
import jalabiya from "../../../assets/jalabiya.jpg";
import abaya from "../../../assets/abaya.jpg";
import abaya1 from "../../../assets/abaya1.jpg";
import hijab from "../../../assets/hijab.png";
import gents from "../../../assets/gents.jpg";
import dress from "../../../assets/dress.jpg";
import dresslong from "../../../assets/dresslong.jpg";
import uzma7 from "../../../assets/uzma7.jpg";
import suite from "../../../assets/suite.jpg";
import Overcoat from "../../../assets/Overcoat.jpg";
import dishdasha from "../../../assets/dishdasha.webp";
import blouse from "../../../assets/blouse.jpg";
import bathrob from "../../../assets/bathrob.jpg";


const cards = [
  {
    id: 1,
    title: "Dry Cleaning",
    price: "From 50 QAR",
    paragraph: "Expert care for suits and delicate fabrics using eco-friendly solvents",
    image: dryCleaning,
    icon: "🧥",
    category: "Dry Cleaning",
  },
  {
    id: 2,
    title: "Executive Pressing",
    price: "From 35 QAR",
    paragraph: "Crisp finishes for business attire with precision steam technology",
    image: executivePressing,
    icon: "👔",
    category: "Pressing",
  },
  {
    id: 3,
    title: "Couture Care",
    price: "From 120 QAR",
    paragraph: "Hand-cleaning for designer garments and delicate fabrics",
    image: care,
    icon: "👗",
    category: "Specialty",
  },
  {
    id: 4,
    title: "Bisht Restoration",
    price: "From 80 QAR",
    paragraph: "Traditional cleaning and pressing for Qatari formal wear",
    image: resturation,
    icon: "🕌",
    category: "Specialty",
  },
  {
    id: 5,
    title: "Express Service",
    price: "+30% Premium",
    paragraph: "3-hour turnaround for urgent garment needs",
    image: collection1,
    icon: "⚡",
    category: "Express",
  },
  {
    id: 6,
    title: "Fragrance Infusion",
    price: "From 20 QAR",
    paragraph: "Luxury scent options for your garments",
    image: fragrance,
    icon: "🌸",
    category: "Add-On",
  },
  {
    id: 7,
    title: "Dishdasha",
    price: "From 150 QAR",
    paragraph: "Specialized care for children's traditional garments",
    image: dishdasha,
    icon: "👕",
    category: "Specialty",
  },
  {
    id: 8,
    title: "Curtain Cleaning",
    price: "From 80 QAR",
    paragraph: "Steam press and allergen removal from fabrics",
    image: bathrob,
    icon: "🛁",
    category: "Traditional",
  },
  {
    id: 9,
    title: "Child Dishdasha",
    price: "From 35 QAR",
    paragraph: "Targeted stain removal with fiber-safe solutions",
    image: child,
    icon: "👦",
    category: "Specialty",
  },
  {
    id: 10,
    title: "Blouse",
    price: "From 90 QAR",
    paragraph: "Premium care for ceremonial cloak with gold detailing",
    image: blouse,
    icon: "👚",
    category: "Specialty",
  },
  {
    id: 11,
    title: "Ghutra",
    price: "From 25 QAR",
    paragraph: "Gentle cleaning for traditional headwear",
    image: ghutra,
    icon: "🧕",
    category: "Traditional",
  },
  {
    id: 12,
    title: "Kurta",
    price: "From 40 QAR",
    paragraph: "Care for traditional South Asian tunic",
    image: kurta,
    icon: "👘",
    category: "Specialty",
  },
  {
    id: 13,
    title: "Kurta Pyjama (Set)",
    price: "From 60 QAR",
    paragraph: "Complete set cleaning for traditional attire",
    image: kurtaPagama,
    icon: "👖",
    category: "Traditional",
  },
  {
    id: 14,
    title: "Kameez",
    price: "From 50 QAR",
    paragraph: "Professional care for traditional long shirts",
    image: kameez,
    icon: "👕",
    category: "Specialty",
  },
  {
    id: 15,
    title: "Jalabiya",
    price: "From 55 QAR",
    paragraph: "Specialized care for flowing traditional gowns",
    image: jalabiya,
    icon: "👗",
    category: "Traditional",
  },
  {
    id: 16,
    title: "Abaya",
    price: "From 50 QAR",
    paragraph: "Professional cleaning for everyday abayas",
    image: abaya,
    icon: "🧕",
    category: "Specialty",
  },
  {
    id: 17,
    title: "Abaya Special",
    price: "From 80 QAR",
    paragraph: "Premium care for embellished abayas",
    image: abaya1,
    icon: "✨",
    category: "Traditional",
  },
  {
    id: 18,
    title: "Hijab",
    price: "From 20 QAR",
    paragraph: "Infused oils and mild pressing for sheilas",
    image: hijab,
    icon: "🧣",
    category: "Specialty",
  },
  {
    id: 19,
    title: "Gent Suit (3pcs)",
    price: "From 100 QAR",
    paragraph: "Complete care for 3-piece suits",
    image: gents,
    icon: "👔",
    category: "Traditional",
  },
  {
    id: 20,
    title: "Dress (Short)",
    price: "From 50 QAR",
    paragraph: "Care for cocktail and summer dresses",
    image: dress,
    icon: "👗",
    category: "Traditional",
  },
  {
    id: 21,
    title: "Dress (Long)",
    price: "From 150 QAR",
    paragraph: "Specialized care for evening gowns",
    image: dresslong,
    icon: "👰",
    category: "Traditional",
  },
  {
    id: 22,
    title: "Prayer Mat Service",
    price: "From 35 QAR",
    paragraph: "Fragrance wash and respectful packaging",
    image: uzma7,
    icon: "🕌",
    category: "Specialty",
  },
  {
    id: 23,
    title: "Overcoat",
    price: "From 70 QAR",
    paragraph: "Winter coat cleaning and preservation",
    image: Overcoat,
    icon: "🧥",
    category: "Traditional",
  },
  {
    id: 24,
    title: "Military Uniform",
    price: "From 58 QAR",
    paragraph: "Regimental standard cleaning and pressing",
    image: suite,
    icon: "🎖️",
    category: "Traditional",
  },
];

const categories = ["All", "Dry Cleaning", "Pressing", "Specialty", "Traditional", "Express", "Add-On"];

const CardButtons = () => {
  const [active, setActive] = useState("All");
  const [orderedCards, setOrderedCards] = useState([]);

  const filteredProducts = active === "All" ? cards : cards.filter((c) => c.category === active);

  const handleOrder = (id) => {
    if (!orderedCards.includes(id)) {
      setOrderedCards((prev) => [...prev, id]);
    }
  };

  return (
    <div className="bg-gray-100 py-6 px-2 md:px-30">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 transform
              ${
                active === cat
                  ? cat === "All"
                    ? "bg-black text-[#D4AF37] scale-105"
                    : "bg-black text-white scale-105"
                  : cat === "All"
                  ? "bg-white text-[#D4AF37] hover:bg-[#1C1C1C]/10"
                  : "bg-white text-[#1C1C1C] hover:bg-[#1C1C1C]/10"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 p-3 sm:p-4 max-w-[360px] w-full mx-auto transition-transform duration-300 hover:scale-105"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-60 object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#1C1C1C] text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                {card.icon}
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <h3 className="text-xl font-medium text-[#1C1C1C]">{card.title}</h3>
              <span className="text-[#D4AF37] font-medium">{card.price}</span>
            </div>

            <p className="text-gray-600 text-[16px] mt-4">{card.paragraph}</p>

            <div className="h-[2px] w-full bg-[#D4AF37] my-4" />

            <button
              onClick={() => handleOrder(card.id)}
              className={`w-full rounded-2xl py-3 font-medium text-sm transition-all duration-300 ${
                orderedCards.includes(card.id)
                  ? "bg-black text-[#D4AF37]"
                  : "bg-[#D4AF37] text-black hover:bg-black hover:text-[#D4AF37]"
              }`}
            >
              {orderedCards.includes(card.id) ? "Order Placed!" : "Order +"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardButtons;
