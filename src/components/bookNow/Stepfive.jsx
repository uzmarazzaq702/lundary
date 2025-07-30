import React, { useState } from "react";
import OrderSummaryCard from "./OrderSummaryCard";
import { useOrder } from "../../OrderContext";

const packagingOptions = [
  {
    id: "plastic-wrap",
    title: "Plastic Wrap",
    description: "Clean transparent protection",
    extra: null,
  },
  {
    id: "soft-touch-wrap",
    title: "Soft-touch Wrap",
    description: "Soft-touch premium wrapping",
    extra: "+15 QAR",
  },
  {
    id: "premium-gift-box",
    title: "Premium Gift Box",
    description: "Elegant box with magnetic closure",
    extra: "+30 QAR",
  },
];

const Stepfive = ({ onBack, onNext }) => {
  const [selectedPackaging, setSelectedPackaging] = useState(null);
  const { orderSummary, setOrderSummary } = useOrder();

  const handleSelect = (id) => {
    setSelectedPackaging(id);
    setOrderSummary((prev) => ({
      ...prev,
      packaging: id,
    }));
  };

  return (
    <div className="min-h-screen mt-20 bg-[#f1ece7]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* AKOYA Header (matches Step 2) */}
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
                  Step 5 of 6
                </p>
              </div>

              {/* Step Title */}
              <div className="p-8">
                <h2 className="text-2xl font-medium text-gray-700 mb-6 text-center">
                  How would you like us to package your garments?
                </h2>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                  {packagingOptions.map((option) => {
                    const isSelected = selectedPackaging === option.id;
                    return (
                      <div
                        key={option.id}
                        onClick={() => handleSelect(option.id)}
                        className={`p-6 rounded-2xl cursor-pointer transition-transform transform hover:scale-105 duration-300 ${
                          isSelected
                            ? "border-2 border-[#C9A227] bg-[#FFF9E6]"
                            : "border border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                          {option.title}
                        </h3>
                        <p className="text-gray-600 text-center">
                          {option.description}
                        </p>
                        {option.extra && (
                          <p className="text-center text-[#D4AF37] font-semibold mt-3">
                            {option.extra}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
                  <button
                    onClick={onBack}
                    className="px-6 py-2 border border-gray-400 rounded text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={onNext}
                    className="px-6 py-2 bg-[#D4AF37] text-white rounded hover:bg-yellow-600 transition"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:w-80 mt-6 lg:mt-16">
            <OrderSummaryCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepfive;
