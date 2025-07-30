import React, { useState, useEffect } from "react";
import { useOrder } from "../../OrderContext";
import OrderSummaryCard from "./OrderSummaryCard";

const Steptow = ({ onBack, onNext }) => {
  const { orderSummary, updateOrder, removeItem, updateGarmentQuantity } = useOrder();
  const [selectedItems, setSelectedItems] = useState(new Set());

  useEffect(() => {
    const initialSet = new Set((orderSummary.garments || []).map((g) => g.id));
    setSelectedItems(initialSet);
  }, [orderSummary.garments]);

  const mensItems = [
    { id: "coat", name: "Coat", description: "Formal or winter coat" },
    { id: "pajamas", name: "Pajamas", description: "Comfortable sleepwear" },
    { id: "shirt", name: "Shirt", description: "Casual or formal shirts" },
    { id: "tshirt", name: "T-Shirt", description: "Everyday wear" },
    { id: "jeans", name: "Jeans", description: "Denim pants" },
    { id: "trousers", name: "Trousers", description: "Formal pants" },
    { id: "suit", name: "Suit", description: "Two-piece suit" },
    { id: "tie", name: "Tie", description: "Neckwear accessory" },
    { id: "waistcoat", name: "Waistcoat", description: "Vest worn under suit" },
    { id: "shorts", name: "Shorts", description: "Casual summer wear" },
    { id: "jacket", name: "Jacket", description: "Outerwear" },
    { id: "sweater", name: "Sweater", description: "Knitted wear" },
    { id: "hoodie", name: "Hoodie", description: "Casual hooded sweatshirt" },
    { id: "blazer", name: "Blazer", description: "Semi-formal outerwear" },
    { id: "kurta", name: "Kurta", description: "Traditional shirt" },
    { id: "shalwar", name: "Shalwar", description: "Traditional pants" },
    { id: "vest", name: "Vest", description: "Innerwear vest" },
    { id: "undergarments", name: "Undergarments", description: "Innerwear" },
    { id: "socks", name: "Socks", description: "Footwear accessories" },
    { id: "cap", name: "Cap", description: "Headwear" },
    { id: "scarf-men", name: "Scarf", description: "Neckwear" },
    { id: "bathrobe", name: "Bathrobe", description: "Towel robe" },
    { id: "gloves", name: "Gloves", description: "Handwear" },
    { id: "belt", name: "Belt", description: "Waist accessory" },
    { id: "tracksuit", name: "Tracksuit", description: "Sporty wear" },
    { id: "lungi", name: "Lungi", description: "Wrap-around cloth" },
    { id: "sherwani", name: "Sherwani", description: "Formal traditional wear" },
    { id: "muffler", name: "Muffler", description: "Warm neckwear" },
    { id: "boots", name: "Boots", description: "Winter footwear" },
    { id: "raincoat", name: "Raincoat", description: "Waterproof outerwear" },
  ];

  const womensItems = [
    { id: "scarf", name: "Scarf", description: "Neckwear" },
    { id: "shawwal", name: "Shawwal", description: "Traditional wear" },
    { id: "abaya", name: "Abaya", description: "Traditional overgarment" },
    { id: "hijab", name: "Hijab", description: "Head covering" },
    { id: "sari", name: "Sari", description: "Traditional Indian wear" },
    { id: "kurti", name: "Kurti", description: "Tunic top" },
    { id: "tunic", name: "Tunic", description: "Loose-fitting top" },
    { id: "leggings", name: "Leggings", description: "Stretchy pants" },
    { id: "blouse", name: "Blouse", description: "Dress shirt" },
    { id: "dress", name: "Dress", description: "One-piece outfit" },
    { id: "skirt", name: "Skirt", description: "Bottom wear" },
    { id: "gown", name: "Gown", description: "Formal dress" },
    { id: "jumpsuit", name: "Jumpsuit", description: "One-piece outfit" },
    { id: "sweater-women", name: "Sweater", description: "Warm knitted top" },
    { id: "hoodie-women", name: "Hoodie", description: "Casual hooded wear" },
    { id: "tights", name: "Tights", description: "Body-fitting pants" },
    { id: "nightgown", name: "Nightgown", description: "Sleepwear" },
    { id: "camisole", name: "Camisole", description: "Innerwear top" },
    { id: "shrug", name: "Shrug", description: "Short jacket" },
    { id: "dupatta", name: "Dupatta", description: "Traditional scarf" },
  ];

  const toggleItem = (item, category) => {
    const itemKey = `${category}-${item.name}`;
    const updatedSet = new Set(selectedItems);

    const existingGarment = (orderSummary.garments || []).find((g) => g.id === itemKey);

    if (existingGarment) {
      // Already selected: increase quantity
      updateGarmentQuantity(itemKey, existingGarment.quantity + 1);
    } else {
      // First-time selection
      updatedSet.add(itemKey);
      setSelectedItems(updatedSet);
      const newItem = {
        id: itemKey,
        name: item.name,
        quantity: 1,
        price: 10,
      };
      updateOrder("garments", (prev) => [...(prev || []), newItem]);
    }
  };

  const ItemButton = ({ item, category }) => {
    const itemKey = `${category}-${item.name}`;
    const isSelected = selectedItems.has(itemKey);

    return (
      <button
        onClick={() => toggleItem(item, category)}
        className={`w-full p-4 text-left border rounded-lg transition-all duration-200 flex justify-between items-center ${
          isSelected
            ? "border-gray-400 bg-orange-50 text-gray-700"
            : "border-gray-200 bg-white hover:border-gray-300"
        }`}
      >
        <span className="text-gray-800">{item.name}</span>
        <span className="text-2xl font-light text-gray-400">+</span>
      </button>
    );
  };

  return (
  // No changes to logic — only minor class improvements for responsiveness
<div className="min-h-screen mt-20 bg-[#f1ece7]">
  <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
      {/* Left section */}
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div
            className="text-center py-6"
            style={{
              background: "linear-gradient(to right, #000000, #8B7355 50%)",
            }}
          >
            <h1 className="text-lg sm:text-2xl font-light text-[#D4AF37]">
              AKOYA PREMIUM LAUNDRY
            </h1>
            <p className="text-gray-200 font-semibold text-[18px] mt-2">
              Step 2 of 6
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <h1 className="text-xl sm:text-2xl font-medium text-gray-700 mb-6">
              What clothes are you sending us?
            </h1>

            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Men's section */}
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                  Men's
                </h2>
                <div className="space-y-3">
                  {mensItems.map((item, index) => (
                    <ItemButton key={index} item={item} category="mens" />
                  ))}
                </div>
              </div>

              {/* Women's section */}
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                  Women's
                </h2>
                <div className="space-y-3">
                  {womensItems.map((item, index) => (
                    <ItemButton key={index} item={item} category="womens" />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between mt-12 pt-8 border-t border-gray-200 gap-4">
              <button
                onClick={onBack}
                className="w-full sm:w-auto px-6 py-2 border border-gray-400 rounded text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Back
              </button>
              <button
                onClick={onNext}
                className="w-full sm:w-auto px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="w-full lg:w-80 mt-6 lg:mt-16">
        <OrderSummaryCard />
      </div>
    </div>
  </div>
</div>

  );
};

export default Steptow;
